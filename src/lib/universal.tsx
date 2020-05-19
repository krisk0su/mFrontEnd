export const stringToArr = (str: string) => {
  const entities: string[] = str
    .split(",")
    .map((entity: string) => entity.trim());

  return entities;
};
