/**
 * @description 深拷贝deepcopy
 * @author
 * @param {Object} obj深拷贝的对象
 * @param {Map} 用于存储循环引用对象的地址
 */

type DeepResult = any[] | object | undefined;

export const Deepcopy = (
  obj: object = {},
  map: Map<any, any> = new Map()
): DeepResult => {
  if (typeof obj !== "object") {
    return obj;
  }
  // obj中已经存在
  if (map.get(obj) as DeepResult) {
    return map.get(obj);
  }
  // 初始化返回结果
  let result: DeepResult = {};

  if (obj instanceof Array) {
    result = [];
  }
  // 防止循环引用
  map.set(obj, result);

  for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
      //   const Item: DeepResult = obj[key];
      //   result[key] = Deepcopy(obj[key], map);
    }
  }
  return [];
};
