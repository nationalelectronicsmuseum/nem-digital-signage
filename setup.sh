#!/usr/bin/env bash
set -e

echo "==> Starting cross-platform Vite dev setup"

# -------------------------------------------------
# Helpers
# -------------------------------------------------
command_exists() { command -v "$1" >/dev/null 2>&1; }

OS="$(uname -s)"
ARCH="$(uname -m)"

IS_WSL=false
IS_GITBASH=false

if grep -qi microsoft /proc/version 2>/dev/null; then
  IS_WSL=true
fi

if [[ "$OS" == MINGW* || "$OS" == MSYS* ]]; then
  IS_GITBASH=true
fi

# -------------------------------------------------
# Package manager (macOS / Linux)
# -------------------------------------------------
install_system_packages() {
  if [[ "$OS" == "Darwin" ]]; then
    if ! command_exists brew; then
      echo "==> Installing Homebrew"
      /bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
    fi
  elif [[ "$OS" == "Linux" || "$IS_WSL" == true ]]; then
    if command_exists apt-get; then
      sudo apt-get update
      sudo apt-get install -y curl build-essential python3 python3-venv python3-pip
    elif command_exists dnf; then
      sudo dnf install -y curl gcc gcc-c++ make python3 python3-venv python3-pip
    fi
  fi
}

# -------------------------------------------------
# Install latest NVM (Linux/macOS/WSL)
# -------------------------------------------------
install_latest_nvm_unix() {
  echo "==> Installing latest NVM (nvm-sh)"

  # Query latest tag dynamically
  LATEST_NVM_TAG=$(curl -s https://api.github.com/repos/nvm-sh/nvm/releases/latest \
    | grep '"tag_name":' \
    | sed -E 's/.*"([^"]+)".*/\1/')

  echo "Latest NVM version: $LATEST_NVM_TAG"

  curl -fsSL https://raw.githubusercontent.com/nvm-sh/nvm/$LATEST_NVM_TAG/install.sh | bash

  export NVM_DIR="$HOME/.nvm"
  # shellcheck disable=SC1090
  [ -s "$NVM_DIR/nvm.sh" ] && . "$NVM_DIR/nvm.sh"
}

# -------------------------------------------------
# Install latest NVM for Windows (nvm-windows)
# -------------------------------------------------
install_latest_nvm_windows() {
  echo "==> Installing latest NVM for Windows"

  TMPFILE=$(mktemp).zip

  DOWNLOAD_URL=$(curl -s https://api.github.com/repos/coreybutler/nvm-windows/releases/latest \
    | grep browser_download_url \
    | grep nvm-setup.zip \
    | cut -d '"' -f 4)

  echo "Downloading $DOWNLOAD_URL"
  curl -L "$DOWNLOAD_URL" -o "$TMPFILE"

  unzip -o "$TMPFILE" -d /tmp/nvm-win-install
  echo "Launching NVM Windows installer..."
  cmd.exe /C start /wait /tmp/nvm-win-install/nvm-setup.exe
}

# -------------------------------------------------
# Node install via NVM
# -------------------------------------------------
setup_node() {
  if command_exists nvm; then
    echo "==> Installing latest LTS Node"
    nvm install --lts
    nvm use --lts
  else
    echo "NVM not found — Node setup skipped"
  fi

  node -v || true
  npm -v || true
}

# -------------------------------------------------
# Python venv
# -------------------------------------------------
setup_python() {
  if ! command_exists python3; then
    echo "Python not found, skipping"
    return
  fi

  if [[ ! -d ".venv" ]]; then
    python3 -m venv .venv
  fi

  # shellcheck disable=SC1091
  source .venv/bin/activate

  pip install --upgrade pip

  if [[ -f requirements.txt ]]; then
    pip install -r requirements.txt
  fi
}

# -------------------------------------------------
# Node deps + Vite
# -------------------------------------------------
setup_node_deps() {
  if ! command_exists vite; then
    npm install -g vite
  fi

  if [[ -f package-lock.json ]]; then
    npm ci
  elif [[ -f package.json ]]; then
    npm install
  fi
}

# -------------------------------------------------
# MAIN
# -------------------------------------------------
echo "Detected OS: $OS"

if [[ "$IS_GITBASH" == true ]]; then
  install_latest_nvm_windows
  echo "Please restart Git Bash after NVM Windows install."
  exit 0
fi

install_system_packages

if ! command_exists nvm; then
  install_latest_nvm_unix
else
  export NVM_DIR="$HOME/.nvm"
  [ -s "$NVM_DIR/nvm.sh" ] && . "$NVM_DIR/nvm.sh"
fi

setup_node
setup_python
setup_node_deps

echo
echo "==> Setup complete!"
echo "Run:"
echo "  source .venv/bin/activate"
echo "  npm run dev"
