# #!/bin/sh

echo Running script ./.devcontainer/init.sh

npx playwright install-deps
npx playwright install 

echo Script ./.devcontainer/init.sh finished
