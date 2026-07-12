# Compatibility and versioning

A KITTYX commit identifies a complete set of target and format
declarations. Consumers pin that commit and test a proposed update
before accepting it.

Additive declarations may remain compatible with an existing binary
format. A change that alters the interpretation of existing THO or
THX bytes requires a new format identity. The same rule applies to a
machine identifier or ABI declaration: existing identifiers do not
change meaning after release.

Package versions are useful release labels. The Git commit remains
the precise compatibility reference used by a build.
