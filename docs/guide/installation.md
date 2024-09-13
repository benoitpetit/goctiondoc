# Installation Guide

This guide provides detailed instructions for installing Goction on your system.

## Prerequisites

Before installing Goction, ensure you have:

- Go 1.16 or higher
- An operating system compatible with systemd (e.g., most Linux distributions)

## Quick Installation (Recommended)

You can quickly install Goction using our installation script:

```bash
curl -sSL https://raw.githubusercontent.com/goction/goction/master/hack/install.sh | sudo bash
```

This script will download and install Goction on your system.

## Manual Installation

If you prefer to install Goction manually, follow these steps:

1. Clone the repository:
   ```bash
   git clone https://github.com/goction/goction/
   cd goction
   ```

2. Run the installation script:
   ```bash
   sudo ./hack/install.sh
   ```

## Verifying the Installation

After installation, verify that Goction is installed correctly by running:

```bash
goction --version
```

This should display the version of Goction installed on your system.

## Post-Installation

After installation:

1. The Goction service will be installed and started automatically.
2. A configuration file will be created at:
   - For root: `/etc/goction/config.json`
   - For other users: `~/.config/goction/config.json`
3. The goctions directory will be created at:
   - For root: `/etc/goction/goctions/`
   - For other users: `~/.config/goction/goctions/`

## Uninstallation

To uninstall Goction, use the removal script:

```bash
sudo ./hack/remove.sh
```

This script will remove all Goction files, including your goctions and configuration. Make sure to backup any important goctions before uninstalling.

<FeedbackComponent/>