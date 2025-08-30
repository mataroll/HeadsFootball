#!/usr/bin/env bash
set -euo pipefail
echo "Setting up dev environment..."
( cd client && npm install )
( cd server && npm install )
( cd matchmaker && npm install )
( cd analytics && npm install )
echo "Done."
