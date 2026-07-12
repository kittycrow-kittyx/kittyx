export type DependencyRelationship = "contract" | "build" | "runtime" | "toolchain";

export interface ProjectDependency {
  name: string;
  repository: string;
  path: string;
  commit: string;
  relationship: DependencyRelationship;
  direct: boolean;
  updatePolicy: "pull-request";
}
