set -euo pipefail
IFS=$'\n\t'

if ! command -v nix-shell &> /dev/null
then
    bash <(curl -L https://nixos.org/nix/install) --daemon
fi

nix-shell --run "deno run -A --unstable --no-check --reload https://github.com/langwitch-tools/langwitch-deno/raw/main/src/configs/interactive.ts" -p deno mpv
