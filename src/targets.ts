export type ThistleMachine = "thistle32" | "thistle64";
export type ThistleInstructionSet = "thistle" | "rv64gc";

export const THISTLE32 = { machine: "thistle32", wordBits: 32, binaryVersion: 1 } as const;
export const THISTLE64 = {
  machine: "thistle64",
  wordBits: 64,
  binaryVersion: 2,
  compilerProfile: "rv64gc",
  abi: "lp64d",
} as const;
