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
            pnpm run format
            pnpm run lint --fix
            pnpm run lint
          '';
        };

        frontend = nixpkgs.writeShellApplication {
          name = "frontend";
          runtimeInputs = [nixpkgs.nodejs];
          text = ''
            npm exec vite
          '';
        };

        deploy = nixpkgs.writeShellApplication {
          name = "deploy";
          runtimeInputs = [nixpkgs.nodejs];
          text = ''
            pnpm exec tsc
            pnpm exec vite build
            pnpm exec gh-pages -d dist
          '';
        };

        nodePackages = nixpkgs.nodePackages_latest;

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
            kamadorueda.nodePackages.nodejs
            kamadorueda.nodePackages.pnpm
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
