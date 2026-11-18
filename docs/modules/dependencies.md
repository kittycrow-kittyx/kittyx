# Dependency contract

`DependencyRelationship` classifies a dependency as contract, build, runtime or toolchain. `ProjectDependency` records name, repository, checkout path, exact commit, relationship, directness and pull-request update policy. These types describe manifest data, not Git operations or runtime validation.
