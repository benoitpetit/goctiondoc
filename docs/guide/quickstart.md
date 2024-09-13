# Quick Start Guide

Get up and running with Goction in just a few minutes!

## Prerequisites

- Go 1.16 or higher
- Linux-based operating system (for systemd support)

## Installation

Install Goction with our quick installation script:

```bash
curl -sSL https://raw.githubusercontent.com/benoitpetit/goction/master/hack/install.sh | sudo bash
```

## Create Your First Goction

1. Create a new goction:

```bash
goction new my_first_goction
```

2. Edit the goction:

```bash
nano ~/.config/goction/goctions/my_first_goction/main.go
```

3. Update the goction:

```bash
goction update my_first_goction
```

## Run Your Goction

1. Start the Goction service:

```bash
goction start
```

2. Execute your goction:

```bash
goction run my_first_goction arg1 arg2
```

## Next Steps

- Read the [full installation guide](/guide/installation.md) for more options
- Learn about [configuration](/guide/configuration.md) to customize Goction
- Explore [advanced usage](/guide/advanced.md) for more features

<FeedbackComponent/>