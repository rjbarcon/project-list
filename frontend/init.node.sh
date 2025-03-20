# Quick Node Setup
# Created by ronnie.james.arcon

echo Quick Node Setup
echo Initialize setup

echo Deleting package-lock.json...
rm -f package-lock.json
echo package-lock.json successfully deleted

echo Deleting existing logs folder
rm -rf logs

echo Deleting existing dist folder
rm -rf dist

echo Delete prisma related fiels
rm -rf prisma-client
rm -rf src/prisma-client

echo Deleting node_modules...
rm -rf node_modules
echo node_modules successfully deleted

echo Refreshing node_modules...
npm install