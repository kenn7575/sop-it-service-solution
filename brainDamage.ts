class authorizationLevelModel {
  UUID: number;
  name: string;
  level: number;
}

let test: authorizationLevelModel = {
  UUID: 1,
  name: "test",
  level: 1,
};

let testClone = { ...test };

testClone.UUID = 2;
console.log(test, "test");
console.log(testClone, "testClone");
