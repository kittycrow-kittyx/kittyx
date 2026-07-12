export const THISTLE_OBJECT_MAGIC = ["THO1", "THO2"] as const;
export const THISTLE_EXECUTABLE_MAGIC = ["THX1", "THX2"] as const;
export const THISTLE_EXECUTABLE_EXTENSIONS = [".thx", ".39"] as const;

export interface ThxEnvelope {
  magic: "THX1" | "THX2";
  metadataBytes: number;
  payloadBytes: number;
  checksum: number;
}
