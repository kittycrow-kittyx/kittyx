# THX and THO identities

THO is the relocatable object container and THX is the executable
container.

| Machine | Object magic | Executable magic |
| --- | --- | --- |
| Thistle32 | `THO1` | `THX1` |
| Thistle64 | `THO2` | `THX2` |

`.thx` and `.39` are two filename extensions for the same executable
bytes. Readers identify a file from its header, not its extension.

The exported constants live in `src/thx.ts`. The binary encoder and
decoder belong to the assembler package; KITTYX records only the
shared identities needed by producers and consumers.
