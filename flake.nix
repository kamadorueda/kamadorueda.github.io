{
  inputs = {
    nixpkgs.url = "github:nixos/nixpkgs/nixos-unstable-small";
  };
  outputs = inputs: let
    supportedSystems = inputs.nixpkgs.lib.systems.flakeExposed;
    forAllSupportedSystems = inputs.nixpkgs.lib.genAttrs supportedSystems;

    nixpkgsForSystem = system: import inputs.nixpkgs {inherit system;};
    nixpkgs = forAllSupportedSystems nixpkgsForSystem;

    devShellsForSystem = system:
      with nixpkgs.${system}; {
        default = mkShell {
          name = "default";
          packages = [
            nodejs
            mprocs
            (writeShellApplication {
              name = "ci";
              runtimeInputs = [ nodejs ];
              text = ''
                npm run format
                npm run lint -- --fix
                npm run lint
              '';
            })
            (writeShellApplication {
              name = "frontend";
              runtimeInputs = [ nodejs ];
              text = ''
                npm run dev
              '';
            })
            (writeShellApplication {
              name = "deploy";
              runtimeInputs = [ nodejs ];
              text = ''
                npm run build
                npm run gh-pages -- -d dist
              '';
            })
            (writeShellApplication {
              name = "resize";
              runtimeInputs = [ imagemagick ];
              text = ''
                name="''${1%.*}"
                ext="''${1##*.}"
                for size in "''${@:2}"; do
                  magick "$1" -resize "$size"  "$name$size.$ext"
                done
              '';
            })
          ];
        };
      };
  in {
    devShells = forAllSupportedSystems devShellsForSystem;
  };
}
