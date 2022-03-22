type cache = () => void;
interface CacheType {
  [key: string]: any;
}

function createCache() {
  const cacheData: CacheType = {};

  return {
    get(key: string) {
      return cacheData[key];
    },
    set(key: string, val: string | number) {
      cacheData[key] = val;
    },
  };
}
