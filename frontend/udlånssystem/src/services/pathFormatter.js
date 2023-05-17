export const formatPath = (path, level) => {
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
