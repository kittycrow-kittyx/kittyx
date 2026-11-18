# Package entry point

`src/index.ts` re-exports the target definitions from `targets.ts`, binary format constants from `thx.ts` and manifest types from `dependencies.ts`. Import the contracts from `@kittyx/contracts`. No I/O or initialisation is performed by this module.
