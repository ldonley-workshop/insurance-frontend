#!/bin/bash

echo "Replacing variables"
. /usr/share/nginx/html/.env
if [[ -v FM_KEY ]]; then
  echo "Replacing $VITE_FM_KEY with $FM_KEY"
  find /usr/share/nginx/html -type f -print0 | xargs -0 sed -i "s/$VITE_FM_KEY/$FM_KEY/g"
fi
if [[ -v BACKEND_URL ]]; then
  find /usr/share/nginx/html -type f -print0 | xargs -0 sed -i "s#$VITE_BACKEND_URL#$BACKEND_URL#g"
fi
echo "Done replacing variables"
