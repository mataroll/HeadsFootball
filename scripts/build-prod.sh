#!/usr/bin/env bash
set -euo pipefail
echo "Building production images..."
docker compose build
