#!/bin/bash

# this script is just to keep track of the original source of a documents


curl https://raw.githubusercontent.com/sagecontinuum/sage/master/README.md \
--create-dirs -o docs/about.md

curl https://raw.githubusercontent.com/sagecontinuum/sage/master/architecture_overview.md \
--create-dirs -o docs/about/arch-overview.md

curl https://raw.githubusercontent.com/sagecontinuum/sage/master/user_interaction.md \
--create-dirs -o docs/about/user-interaction.md





curl https://raw.githubusercontent.com/waggle-sensor/plugin-helloworld-ml/master/README.md \
--create-dirs -o docs/getting-started/plugin-dev/plugin-helloworld-ml.md
