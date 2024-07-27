#!/bin/bash
set -o xtrace

rm -rf src/types/ 
cd ../roarer-2 

TSC_COMPILE_ON_ERROR=true
pnpm exec tsc --declaration --declarationDir ./types/ --outDir temp src/plugin/init.tsx &> /dev/null 

rm -rf temp/

mv types ../roarer-plugin/src/
cd ../roarer-plugin