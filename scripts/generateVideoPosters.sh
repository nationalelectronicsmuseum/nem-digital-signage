#!/usr/bin/env bash
# Generates a <name>.poster.webp next to each video in public/video.
# The Video component derives the poster path from the video filename, so run
# this after adding or replacing any video. Requires ffmpeg.
set -euo pipefail

cd "$(dirname "$0")/../public/video"

for video in *.mp4 *.webm; do
  [ -e "$video" ] || continue
  poster="${video%.*}.poster.webp"
  ffmpeg -y -loglevel error -ss 0.5 -i "$video" -frames:v 1 \
    -c:v libwebp -quality 80 "$poster"
  echo "Generated $poster"
done
