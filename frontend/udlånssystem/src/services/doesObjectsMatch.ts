export default function doesObjectsMatch(obj1: Object, obj2: Object) {
  if (JSON.stringify(obj1) !== JSON.stringify(obj2)) return false;
  return true;
}
