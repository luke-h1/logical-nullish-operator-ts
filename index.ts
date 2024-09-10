const cache: Record<number, Set<string>> = {};

const addToCache1 = (index: number, item: string) => {
  if (!cache[index]) {
    cache[index] = new Set();
  }
  cache[index].add(item);
};

const addToCache2 = (index: number, item: string) => {
  (cache[index] ??= new Set()).add(item);
};
