export const uniqueValues = (arr, prop) =>
  arr.filter((v, i, a) => a.findIndex((t) => t[prop] === v[prop]) === i);
export const cleanValues = (arr, prop) => arr.filter((ele) => !!ele[prop]);
