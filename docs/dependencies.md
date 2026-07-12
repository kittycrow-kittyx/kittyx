# Dependency manifests

`project.dependencies.json` records the exact revision of each
repository used by a build. Each entry contains:

- the project name and repository;
- the checkout path;
- the pinned commit;
- the relationship, such as `contract`, `build`, `runtime` or
  `toolchain`;
- whether the dependency is direct;
- the update policy.

The JSON schema is
`schemas/project.dependencies.schema.json`. A Git submodule entry and
its manifest entry must name the same commit.

Update automation may propose a newer revision, but changing a pin is
a normal reviewed source change. Builds never follow a moving branch.
