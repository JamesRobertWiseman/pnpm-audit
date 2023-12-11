#!/bin/sh
cd $1

pnpm audit --audit-level="$2" | node /opt/action-files/dist/main.js