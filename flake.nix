{
  inputs = {
    nixpkgs.url = "nixpkgs";
  };
  outputs = inputs: let
    system = "x86_64-linux";
    nixpkgs = import inputs.nixpkgs {inherit system;};
  in {
    devShells.${system}.default = nixpkgs.mkShell {
      name = "main";
      packages = [
        nixpkgs.hugo
        nixpkgs.go
      ];
    };
  };
}
