# KITTYX

**KITTYX** is **Kitty's Integrated TypeScript Toolchain Yielding a
uniX-like system**.

This package defines the names and interchange contracts used across
the KITTYX projects. It contains the machine descriptions for
Thistle32 and Thistle64, the THX and THO file identities, and the
schema used to pin compatible project revisions.

## Package

The public entry point is `src/index.ts`. The main modules are:

- `src/targets.ts` for machine and ABI identities;
- `src/thx.ts` for object and executable format constants;
- `src/dependencies.ts` for dependency manifest types.

## Build and test

    npm install
    npm test

`npm test` runs Code Guards in strict mode and checks TypeScript types. The package contains
declarations and schemas rather than generated runtime artefacts.

## Documentation

[Module reference](docs/index.md)

- [Targets](docs/targets.md)
- [THX and THO identities](docs/thx.md)
- [Dependency manifests](docs/dependencies.md)
- [Compatibility and versioning](docs/versioning.md)

## Licence

MIT. See `LICENSE`.
