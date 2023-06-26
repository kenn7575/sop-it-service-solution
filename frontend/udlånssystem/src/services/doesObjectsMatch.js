export default function doesObjectsMatch(obj1, obj2) {
  //find out if two objects are the same
  // let keys1 = Object.keys(obj1);
  // let keys2 = Object.keys(obj2);
  // if (keys1.length !== keys2.length) return false;

  // for (let key of keys1) {
  //   if (obj1[key] !== obj2[key]) {
  //     // if the values are objects, check if they are the same
  //     if (typeof obj1[key] === "object" && typeof obj2[key] === "object") {
  //       if (!doesObjectsMatch(obj1[key], obj2[key])) return false;
  //     } else return false;
  //   }
  // }
  if (JSON.stringify(obj1) !== JSON.stringify(obj2)) return false;
  return true;
}
