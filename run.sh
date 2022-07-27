if ! command -v nix-shell &> /dev/null
then
    sh <(curl -L https://nixos.org/nix/install) --no-daemon
fi
nix-shell --run "deno run -A --unstable --no-check https://github.com/langwitch-tools/langwitch-deno/raw/main/src/configs/interactive.ts" -p deno mpv
