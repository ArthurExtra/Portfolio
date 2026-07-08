# Main NixOS configuration for the 'desktop' host.
{
  pkgs,
  stateVersion,
  hostname,
  ...
}:
{
  imports = [
    ./hardware-configuration.nix
    ./local-packages.nix
    ../../nixos/modules
    ./modules
  ];

  networking.hostName = hostname;
  nixpkgs.config.permittedInsecurePackages = [ "pnpm-10.29.2" ];
  system = { inherit stateVersion; };

  # System module configurations with all options explicitly set
  mySystem = {
    virtualisation.enable = true;
    gaming = {
      enable = true;
      enableGamescope = true;
    };
    sandboxing = {
      enable = true;
      enableUserNamespaces = true;
      enableWrappedBinaries = true;
    };
    bluetooth = {
      enable = true;
      powerOnBoot = true;
    };
    flatpak = {
      enable = true;
    };
    tor = {
      enable = true;
    };
    dnscryptProxy = {
      enable = false;
    };
    netdata = {
      enable = true;
    };
    scrutiny = {
      enable = true;
    };
    syncthing = {
      enable = true;
    };
    glance = {
      enable = true;
    };
    macchanger = {
      enable = true;
    };
    mullvadVpn = {
      enable = false;
    };
    tailscale = {
      enable = true;
    };
    webRe = {
      enable = true;
    };
    ollama = {
      enable = true;
    };
    vaultwarden = {
      enable = true;
    };
  };

  environment.systemPackages = with pkgs; [ home-manager ];
}
