export default function doseObjectsMach(ojb1, ojb2) {
  //find out if two objects are the same
  let keys1 = Object.keys(ojb1);
  let keys2 = Object.keys(ojb2);
  if (keys1.length !== keys2.length) return false;
  for (let key of keys1) {
    if (ojb1[key] !== ojb2[key]) return false;
  }
  return true;
}
