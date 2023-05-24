export const stripPath = (path, level) => {
  //if root return
  if (path === "/") return path;
  //split path into array
  let paths = path.split("/");
  //remove empty strings
  paths = paths.filter((p) => p !== "");

  let formatPath = "";
  for (let i = 0; i < level; i++) {
    formatPath += "/" + paths[i];
  }

  return formatPath;
};
export const formatPathToBreadcrumps = (path) => {
  //convert path to array
  let paths = path.split("/");

  //remove empty strings
  paths = paths.filter((p) => p !== "");

  if (paths.length === 0) return [{ path: "Home", fullPath: "/" }];
  // return list of object with path and full path
  return paths.map((p, i) => {
    return {
      path: p.charAt(0).toUpperCase() + p.slice(1),
      fullPath: stripPath(path, i + 1),
      seperator: i !== paths.length - 1,
    };
  });
};
