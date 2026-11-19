#!/usr/bin/env bash
set -euo pipefail
tag="${1:?release tag required}"
root="$(git rev-parse --show-toplevel)"
cd "$root"
sha="$(git rev-parse HEAD)"
name="${GH_REPO##*/}"
stage="$(mktemp -d)"
trap 'rm -rf "$stage"' EXIT
git archive HEAD | tar -xf - -C "$stage"
if [[ -f bun.lock ]]; then cp bun.lock "$stage/bun.lock"; fi
printf '%s\n' "$sha" > "$stage/RELEASE_COMMIT"
mkdir -p dist
tar --sort=name --mtime="@$(git show -s --format=%ct HEAD)" --owner=0 --group=0 --numeric-owner -czf "dist/$name-$tag.tar.gz" -C "$stage" .
tar -tzf "dist/$name-$tag.tar.gz" >/dev/null
