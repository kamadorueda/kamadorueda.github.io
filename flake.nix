{
  inputs = {
    nixpkgs.url = "github:nixos/nixpkgs/nixos-unstable-small";

    systems.url = "github:nix-systems/default";
  };
  outputs = inputs: let
    supportedSystems = import inputs.systems;

    forEachSystem = inputs.nixpkgs.lib.genAttrs supportedSystems;

    nixkpgsOverlayForSystem = system: (nixpkgs: _: rec {
      kamadorueda = {
        ci = nixpkgs.writeShellApplication {
          name = "ci";
          runtimeInputs = [nixpkgs.nodejs];
          text = ''
            npm run format
            npm run lint -- --fix
            npm run lint
          '';
        };

        frontend = nixpkgs.writeShellApplication {
          name = "frontend";
          runtimeInputs = [nixpkgs.nodejs];
          text = ''
            npm run dev
          '';
        };

        deploy = nixpkgs.writeShellApplication {
          name = "deploy";
          runtimeInputs = [nixpkgs.nodejs];
          text = ''
            npm run build
            npm run gh-pages -- -d dist
          '';
        };

        resize = nixpkgs.writeShellApplication {
          name = "resize";
          runtimeInputs = [nixpkgs.imagemagick];
          text = ''
            name="''${1%.*}"
            ext="''${1##*.}"
            for size in "''${@:2}"; do
              magick "$1" -resize "$size"  "$name$size.$ext"
            done
          '';
        };

        shell = nixpkgs.mkShell {
          name = "default";
          packages = [
            kamadorueda.ci
            kamadorueda.deploy
            kamadorueda.frontend
            kamadorueda.resize
            nixpkgs.nodejs
            nixpkgs.mprocs
          ];
        };
      };
    });

    nixpkgsForSystem = system:
      import inputs.nixpkgs {
        inherit system;
        overlays = [
          (nixkpgsOverlayForSystem system)
        ];
      };

    nixpkgs = forEachSystem nixpkgsForSystem;
  in {
    devShells = forEachSystem (system: {
      default = nixpkgs.${system}.kamadorueda.shell;
    });
  };
}
