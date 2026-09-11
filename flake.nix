{
  inputs = {
    nixpkgs.url = "nixpkgs";

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
            pnpm exec tsc
            pnpm run format
            pnpm run lint --fix
            pnpm run lint
            pnpm run build
            pnpm test
          '';
        };

        frontend = nixpkgs.writeShellApplication {
          name = "frontend";
          runtimeInputs = [nixpkgs.nodejs];
          text = ''
            pnpm run dev
          '';
        };

        deploy = nixpkgs.writeShellApplication {
          name = "deploy";
          runtimeInputs = [nixpkgs.nodejs];
          text = ''
            pnpm exec tsc
            pnpm run build
            pnpm exec wrangler deploy
          '';
        };

        deployPreview = nixpkgs.writeShellApplication {
          name = "deploy-preview";
          runtimeInputs = [nixpkgs.nodejs];
          text = ''
            pnpm exec tsc
            pnpm run build
            pnpm exec wrangler versions upload --preview-alias dev
          '';
        };

        nodePackages = nixpkgs.nodePackages_latest;

        shell = nixpkgs.mkShell {
          name = "default";
          packages = [
            kamadorueda.ci
            kamadorueda.deploy
            kamadorueda.deployPreview
            kamadorueda.frontend
            nixpkgs.nodejs
            nixpkgs.pnpm
            nixpkgs.mprocs

            (nixpkgs.writeShellApplication {
              name = "npm";
              text = "echo use pnpm && exit 1";
            })
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
