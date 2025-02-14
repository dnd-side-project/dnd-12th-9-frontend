type Entries<T> = {
  [K in keyof T]: [K, T[K]];
}[keyof T][];

export const Entries = <T extends object>(obj: T) => {
  return Object.entries(obj) as Entries<T>;
};
