#!/bin/bash

rsync -avz --progress --exclude .vscode --exclude .git ./ $1@$2:/var/www/sonha-solutions
