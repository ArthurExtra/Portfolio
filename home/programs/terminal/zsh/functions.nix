{
  config,
  constants,
  lib,
  secretLoader,
  ...
}:

let
  inherit (secretLoader) loadSecretFn;
  zaiEnv = import ../../ai-agents/helpers/_zai-env.nix { inherit constants; };
  models = import ../../ai-agents/helpers/_models.nix;

  opencodeProfiles = import ../../ai-agents/helpers/_opencode-profiles.nix { inherit config; };

  simpleWrapperProfiles = builtins.filter (
    p: p.alias != "oc" && p.name != "opencode-openrouter"
  ) opencodeProfiles.profiles;

  profileSuffix = p: builtins.replaceStrings [ "opencode-" ] [ "" ] p.name;

  ompProfiles = import ../../ai-agents/helpers/_omp-profiles.nix { inherit config; };

  simpleOmpProfiles = builtins.filter (p: p.name != "omp") ompProfiles.profiles;

  ompProfileSuffix = p: builtins.replaceStrings [ "omp-" ] [ "" ] p.name;

  piProfiles = import ../../ai-agents/helpers/_pi-profiles.nix { inherit config; };

  simplePiProfiles = builtins.filter (p: p.name != "pi") piProfiles.profiles;

  piProfileSuffix = p: builtins.replaceStrings [ "pi-" ] [ "" ] p.name;
in

{
  programs.zsh.initContent = ''
    if command -v vivid >/dev/null 2>&1; then
      ls_colors_cache="$HOME/.cache/vivid-ls-colors"
      if [[ ! -f "$ls_colors_cache" ]]; then
        mkdir -p "$HOME/.cache"
        vivid generate ${constants.theme} > "$ls_colors_cache"
      fi
      export LS_COLORS="$(cat "$ls_colors_cache")"
    fi

    ${loadSecretFn}

    _load_gemini_key() { _load_secret gemini_api_key; }
    _load_zai_key() { _load_secret zai_api_key; }
    _load_openrouter_key() { _load_secret openrouter_api_key; }
    _load_deepseek_key() { _load_secret deepseek_api_key; }
    _load_mimo_key() { _load_secret mimo_api_key; }

    if _gemini_key="$(_load_gemini_key 2>/dev/null)" && [[ -n "$_gemini_key" ]]; then
      export GEMINI_API_KEY="$_gemini_key"
    fi

    if _zai_key_export="$(_load_zai_key 2>/dev/null)" && [[ -n "$_zai_key_export" ]]; then
      export ZAI_API_KEY="$_zai_key_export"
    fi

    _ai_tab_icon() {
      if [[ -n "''${ZELLIJ_MOBILE:-}" ]]; then
        return 0
      fi

      case "$1" in
        cl*|ocl*|hcl*) printf '\uf1b0 ' ;;
        oc*|locgpt*|mocgpt*|xocgpt*) printf '\ue7a4 ' ;;
        cx*|lcx*|mcx*|hcx*|xcx*) printf '\uf1c0 ' ;;
        ag*|gem*) printf '\uf529 ' ;;
        omp*) printf '\uf1b2 ' ;;
        pi*) printf '\uf1b2 ' ;;
        *) ;;
      esac
    }

    _zellij_rename_tab() {
      local tab_name="$1"
      [[ -n "$tab_name" && -n "${"ZELLIJ:-"}" ]] || return 0
      local icon
      icon="$(_ai_tab_icon "$tab_name")"
      command zellij action rename-tab "''${icon}''${tab_name}" >/dev/null 2>&1 || true
    }

    _ai_agent_exec() {
      local tab_name="$1"
      shift
      if [[ "$1" == "--" ]]; then
        shift
      fi
      _zellij_rename_tab "$tab_name"
      if [[ "$1" == "claude" ]]; then
        local debug_dir="''${AI_AGENT_LOG_DIR:-$HOME/.local/share/ai-agents/logs}"
        mkdir -p "$debug_dir"
        set -- "$@" "--debug-file" "$debug_dir/claude-debug-$(date +%Y-%m-%d).log"
      fi
      if [[ "$1" != "omp" ]] && command -v systemd-run >/dev/null 2>&1 && ! whence -w "$1" 2>/dev/null | grep -q 'function$'; then
        systemd-run --user --slice=ai-agents.slice --scope --unit="ai-''${tab_name}" -- "$@" 2>/dev/null || "$@"
      else
        "$@"
      fi
    }

    claude_glm() {
      local key; key="$(_load_zai_key)" || return 1
      _zellij_rename_tab "clglm"
      local debug_dir="''${AI_AGENT_LOG_DIR:-$HOME/.local/share/ai-agents/logs}"
      mkdir -p "$debug_dir"
      ANTHROPIC_AUTH_TOKEN="$key" \
      ${zaiEnv.inlinePrefix} \
      claude --dangerously-skip-permissions --debug-file "$debug_dir/claude-debug-$(date +%Y-%m-%d).log" "$@"
    }

    claude_seek() {
      local key; key="$(_load_deepseek_key)" || return 1
      _zellij_rename_tab "clsk"
      local debug_dir="''${AI_AGENT_LOG_DIR:-$HOME/.local/share/ai-agents/logs}"
      mkdir -p "$debug_dir"
      ANTHROPIC_AUTH_TOKEN="$key" \
      ANTHROPIC_BASE_URL="https://api.deepseek.com/anthropic" \
      ANTHROPIC_DEFAULT_OPUS_MODEL="deepseek-v4-pro[1m]" \
      ANTHROPIC_DEFAULT_SONNET_MODEL="deepseek-v4-pro[1m]" \
      ANTHROPIC_DEFAULT_HAIKU_MODEL="deepseek-v4-flash[1m]" \
      CLAUDE_CODE_DISABLE_NONESSENTIAL_TRAFFIC=1 \
      CLAUDE_CODE_EFFORT_LEVEL=max \
      claude --dangerously-skip-permissions --debug-file "$debug_dir/claude-debug-$(date +%Y-%m-%d).log" "$@"
    }

    claude_mimo() {
      local key; key="$(_load_mimo_key)" || return 1
      _zellij_rename_tab "clmi"
      local debug_dir="''${AI_AGENT_LOG_DIR:-$HOME/.local/share/ai-agents/logs}"
      mkdir -p "$debug_dir"
      ANTHROPIC_AUTH_TOKEN="$key" \
      ANTHROPIC_BASE_URL="https://token-plan-sgp.xiaomimimo.com/anthropic" \
      ANTHROPIC_DEFAULT_OPUS_MODEL="mimo-v2.5-pro[1m]" \
      ANTHROPIC_DEFAULT_SONNET_MODEL="mimo-v2.5-pro[1m]" \
      ANTHROPIC_DEFAULT_HAIKU_MODEL="mimo-v2.5[1m]" \
      claude --dangerously-skip-permissions --debug-file "$debug_dir/claude-debug-$(date +%Y-%m-%d).log" "$@"
    }

    omp_glm() {
      local key; key="$(_load_zai_key)" || return 1
      _zellij_rename_tab "opi"
      ZAI_API_KEY="$key" omp "$@"
    }

    omp_seek() {
      local key; key="$(_load_deepseek_key)" || return 1
      _zellij_rename_tab "ompds"
      DEEPSEEK_API_KEY="$key" omp "$@"
    }

    _opencode_profile() {
      local profile="$1"
      local tab_name="$2"
      shift 2
      _zellij_rename_tab "$tab_name"
      OPENCODE_CONFIG_DIR="$HOME/.config/opencode-$profile" opencode --log-level WARN "$@"
    }

    ${lib.concatStringsSep "\n\n" (
      map (p: ''
        opencode_${profileSuffix p}() {
          _opencode_profile "${profileSuffix p}" "${p.alias}" "$@"
        }
      '') simpleWrapperProfiles
    )}

    opencode_openrouter() {
      local key; key="$(_load_openrouter_key)" || return 1
      OPENROUTER_API_KEY="$key" _opencode_profile "openrouter" "ocor" "$@"
    }

    mimo_glm() {
      _zellij_rename_tab "miglm"
      mimo -m ${models.glm} "$@"
    }

    mimo_seek() {
      _zellij_rename_tab "miseek"
      mimo -m deepseek/deepseek-v4-pro "$@"
    }

    mimo_gpt() {
      _zellij_rename_tab "migpt"
      mimo -m openai/gpt-5.4 "$@"
    }

    za() {
      if [[ -n "''${ZELLIJ:-}" ]]; then
        zellij-ai-panel "$@"
      else
        zellij --layout ai
      fi
    }

    zac() {
      if [[ -n "''${ZELLIJ:-}" ]]; then
        if [[ -n "''${ZELLIJ_MOBILE:-}" ]]; then
          zellij action new-tab --name "council" --layout "$HOME/.config/zellij/layouts/ai-council.kdl"
        else
          zellij action new-tab --name "󰚩 council" --layout "$HOME/.config/zellij/layouts/ai-council.kdl"
        fi
      else
        zellij --layout ai-council
      fi
    }

    zalogs() {
      if [[ -n "''${ZELLIJ:-}" ]]; then
        if [[ -n "''${ZELLIJ_MOBILE:-}" ]]; then
          zellij action new-tab --name "ai-logs" --layout "$HOME/.config/zellij/layouts/ai-observe.kdl"
        else
          zellij action new-tab --name "󰙨 ai-logs" --layout "$HOME/.config/zellij/layouts/ai-observe.kdl"
        fi
      else
        zellij --layout ai-observe
      fi
    }

    zm() {
      zellij-mobile "$@"
    }

    zp() {
      if [[ -n "''${ZELLIJ:-}" ]]; then
        zellij action new-pane "$@"
      else
        echo "zp must be run inside Zellij" >&2
        return 1
      fi
    }

    zpr() {
      if [[ -n "''${ZELLIJ:-}" ]]; then
        zellij action new-pane --direction right "$@"
      else
        echo "zpr must be run inside Zellij" >&2
        return 1
      fi
    }

    zpd() {
      if [[ -n "''${ZELLIJ:-}" ]]; then
        zellij action new-pane --direction down "$@"
      else
        echo "zpd must be run inside Zellij" >&2
        return 1
      fi
    }

    aip() {
      if [[ $# -eq 0 ]]; then
        echo "Usage: aip <agent> [agent...] [\"prompt\"]" >&2
        return 1
      fi

      local -a agents=("$@")
      local prompt=""

      if ! type "''${agents[-1]}" &>/dev/null; then
        prompt="''${agents[-1]}"
        agents[-1]=()
      fi

      if [[ ''${#agents[@]} -eq 0 ]]; then
        echo "Error: no agents specified" >&2
        return 1
      fi

      local layout_file zsh_bin
      layout_file=$(mktemp /tmp/aip-XXXXXX.kdl)
      zsh_bin="$SHELL"
      local joined_agents="''${(j:+:)agents}"
      local kdl_prompt="''${prompt//\"/\\\"}"

      local default_layout="$HOME/.config/zellij/layouts/default.kdl"
      if [[ -f "$default_layout" ]]; then
        head -n -1 "$default_layout" > "$layout_file"
      else
        echo 'layout {' > "$layout_file"
      fi

      {
        echo "  tab name=\"$joined_agents\" focus=true {"
        echo '    pane split_direction="vertical" {'
        local i=0 cmd
        for agent in "''${agents[@]}"; do
          if [[ -n "$prompt" ]]; then
            case "$agent" in
              oc|ocglm|ocgem|ocgpt|ocor|ocs|oczen|opi|opencode*|ag|ag*|agy|antigravity*|gem*)
                cmd="$agent --prompt '$kdl_prompt'" ;;
              *)
                cmd="$agent '$kdl_prompt'" ;;
            esac
          else
            cmd="$agent"
          fi

          if [[ $i -eq 0 ]]; then
            echo "      pane name=\"$agent\" command=\"$zsh_bin\" focus=true {"
          else
            echo "      pane name=\"$agent\" command=\"$zsh_bin\" {"
          fi
          echo "        args \"-ic\" \"$cmd\""
          echo "      }"
          ((i++))
        done
        echo '    }'
        echo '  }'
        echo '}'
      } >> "$layout_file"

      if [[ -n "''${ZELLIJ:-}" ]]; then
        zellij action new-tab --layout "$layout_file"
      else
        zellij --layout "$layout_file"
      fi

      rm -f "$layout_file"
    }

    if [[ -n "''${ZELLIJ:-}" ]]; then
      _zellij_tab_name_for_command() {
        local raw="$1"
        local cmd="''${raw%% *}"
        cmd="''${cmd:t}"
        case "$raw" in
          just\ check*) printf "󱓞 check" ;;
          just\ lint*) printf "󰁨 lint" ;;
          just\ test*) printf "󰙨 test" ;;
          just\ home*) printf "󱄅 home" ;;
          just\ nixos*) printf "󱄅 nixos" ;;
          just*) printf "just" ;;
          nix\ build*) printf "󱄅 nix build" ;;
          nix\ flake*) printf "󱄅 flake" ;;
          home-manager*) printf "󱄅 home" ;;
          nvim*|vim*|vi*) printf " edit" ;;
          lazygit*|git*) printf " git" ;;
          btop*|nvtop*|htop*) printf "󰍛 monitor" ;;
          docker*|podman*) printf "󰡨 containers" ;;
          pnpm\ dev*|npm\ run\ dev*|bun\ run\ dev*) printf "󰜎 dev" ;;
          pnpm*|npm*|bun*) printf "󰎙 js" ;;
          cargo\ test*) printf "󱘗 rs test" ;;
          cargo*) printf "󱘗 rust" ;;
          python*|uv*) printf " py" ;;
          cl*|claude*) printf "$(_ai_tab_icon cl)cl" ;;
          oc*|opencode*) printf "$(_ai_tab_icon oc)oc" ;;
          cx*|codex*) printf "$(_ai_tab_icon cx)cx" ;;
          gem*|gemini*) printf "$(_ai_tab_icon gem)gem" ;;
          za|zac|zalogs|aip*) printf "󰚩 ai" ;;
          *) printf "%s" "$cmd" ;;
        esac
      }

      _zellij_auto_tab_preexec() {
        local name
        name="$(_zellij_tab_name_for_command "$2")"
        case "$name" in
          cd|ls|ll|la|l|clear|cls|exit|source|\.|zellij|"") return 0 ;;
        esac
        command zellij action rename-tab "$name" >/dev/null 2>&1 || true
      }
      preexec_functions+=(_zellij_auto_tab_preexec)
    fi

    export GPG_TTY=$(tty)

    if [ -f ~/.nix-profile/etc/profile.d/hm-session-vars.sh ]; then
      source ~/.nix-profile/etc/profile.d/hm-session-vars.sh
    fi

    for pydir in ~/.nix-profile/lib/python3.*/site-packages; do
      if [ -d "$pydir" ]; then
        export PYTHONPATH="$pydir:$PYTHONPATH"
        break
      fi
    done

    export PYTHONPATH="$HOME/.local_packages:$PYTHONPATH"

    pip() {
      if [[ "$1" == "install" ]]; then
        command pip install --break-system-packages --target="$HOME/.local_packages" "''${@:2}"
      else
        command pip "$@"
      fi
    }
  '';
}
