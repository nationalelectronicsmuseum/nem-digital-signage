#!/bin/bash

set -e

VENV_DIR="./nemdsvenv"
PYTHON_SCRIPT="scripts/updateLocalizations.py"
NODE_SCRIPT="scripts/addTags.js"
REQUIREMENTS_FILE="requirements.txt"

install_if_missing() {
    CMD=$1
    PKG=$2
    if ! command -v "$CMD" &>/dev/null; then
        echo "$CMD not found. Attempting to install $PKG..."
        if [[ "$OSTYPE" == "linux-gnu"* ]]; then
            sudo apt update
            sudo apt install -y "$PKG"
        elif [[ "$OSTYPE" == "darwin"* ]]; then
            brew install "$PKG"
        else
            echo "Unsupported OS. Please install $PKG manually."
            exit 1
        fi
    fi
}

check_vite_installed() {
  if command -v vite &> /dev/null; then
    echo "Vite is already installed globally."
  else
    echo "Vite not found. Installing globally..."
    sudo npm install -g vite
    echo "Vite installed globally."
  fi
}

# Ensure Python and Node.js are installed

install_if_missing python3 python3
install_if_missing pip3 python3-pip
install_if_missing node nodejs
install_if_missing npm npm
check_vite_installed
npm install

# Check if venv module is available

if ! python3 -m venv --help &>/dev/null; then
    echo "Python venv module not found. Installing..."
    install_if_missing python3-venv python3-venv
fi

# Create virtual environment if it doesn't exist

if [ ! -d "$VENV_DIR" ]; then
    echo "Creating Python virtual environment in $VENV_DIR..."
    python3 -m venv "$VENV_DIR"
fi

# Activate virtual environment

echo "Activating Python virtual environment..."
source "$VENV_DIR/bin/activate"

# Install Python dependencies

if [ -f "$REQUIREMENTS_FILE" ]; then
    echo "Installing Python dependencies from $REQUIREMENTS_FILE..."
    pip install -r "$REQUIREMENTS_FILE"
else
    echo "No $REQUIREMENTS_FILE found, skipping Python dependencies."
fi

# Run scripts

echo "Running Python script: $PYTHON_SCRIPT"
python "$PYTHON_SCRIPT"

echo "Running Node.js script: $NODE_SCRIPT"
node "$NODE_SCRIPT"

# Deactivate Python virtual environment
deactivate
echo "Python script completed."

echo "All tasks completed successfully."
