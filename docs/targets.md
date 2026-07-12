# Targets

KITTYX gives each executable machine a stable identifier. Tools use
these identifiers in configuration files and binary metadata rather
than inferring a target from a filename.

## Thistle32

`thistle32` is the original 32-bit Thistle machine. It uses 32-bit
words and version 1 object and executable containers.

## Thistle64

`thistle64` is the 64-bit machine. It uses version 2 containers and
may select either the native Thistle64 instruction set or the
`rv64gc` instruction profile.

`rv64gc` identifies the RISC-V RV64GC profile used for compiler-built
Thistle64 programmes. Its ABI is LP64D. The process and system-call
interface remains the Thistle interface recorded alongside the
executable.

The constants are exported by `src/targets.ts`.
