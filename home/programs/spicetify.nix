# Spicetify (Spotify client customizer) configuration.
{ pkgs, inputs, ... }:
let
  # Spicetify package set from the flake input
  spicePkgs = inputs.spicetify-nix.legacyPackages.${pkgs.stdenv.hostPlatform.system};
in
{
  # Import the Spicetify home-manager module
  imports = [ inputs.spicetify-nix.homeManagerModules.default ];

  # Stylix integration — apply system color theme to Spicetify automatically
  stylix.targets.spicetify.enable = true;

  # Spicetify configuration
  programs.spicetify = {
    enable = true; # Enable Spicetify customization

    # Marketplace tab (browse-only — installing from it doesn't work with this flake,
    # see https://gerg-l.github.io/spicetify-nix/custom-apps.html)
    enabledCustomApps = with spicePkgs.apps; [
      marketplace
    ];

    # Enabled Spicetify extensions for enhanced functionality
    enabledExtensions = with spicePkgs.extensions; [
      playlistIcons # Add icons to playlists
      historyShortcut # Keyboard shortcuts for history
      hidePodcasts # Hide podcasts from interface
      adblock # Block ads in Spotify
      fullAppDisplay # Full app display mode
      keyboardShortcut # Additional keyboard shortcuts
    ];
  };

  # Environment variables to improve Spotify stability and performance
  home.sessionVariables = {
    # Increase memory cache size for better performance
    SPOTIFY_MAX_CACHE_SIZE_MB = "1024";

    # Additional stability flags
    SPOTIFY_SKIP_LINUX_NOTIFICATIONS = "1"; # Skip DBus notifications (Noctalia handles media via MPRIS)
  };
}
