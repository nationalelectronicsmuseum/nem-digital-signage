export function resolvePath(data, path) {
  return path.split('.').reduce((obj, key) => {
    if (!obj) return null;
    return obj[key];
  }, data);
}
