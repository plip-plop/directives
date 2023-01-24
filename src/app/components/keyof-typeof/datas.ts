export interface User {
  name: string;
  PLOP: string;
  PLIP: string;
  age: number;
}

export enum TYPE {
  PLOP,
  PLIP,
}

export type CleUser = keyof typeof TYPE;

export const user: User = {
  name: "user",
  PLOP: "I say plop",
  PLIP: "I say plip",
  age: 18,
};
