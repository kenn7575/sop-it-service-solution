const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

function getFieldTypes(table) {
  let fieldTypes = {};

  Object.entries(prisma[table].fields).map(
    ([key, value]) => (fieldTypes[key] = value.typeName)
  );

  return fieldTypes;
}

function convertToPrismaTypes(data, table) {
  let fieldTypes = getFieldTypes(table);

  Object.entries(data).map(([key, value]) => {
    if (fieldTypes[key] == "Int") data[key] = Number(value);
  });

  return data;
}

function findReferenced(table) {
  return `
  SELECT 
    TABLE_NAME, 
    COLUMN_NAME, 
    REFERENCED_TABLE_NAME, 
    REFERENCED_COLUMN_NAME 
  FROM 
    information_schema.KEY_COLUMN_USAGE 
  WHERE 
	  REFERENCED_TABLE_SCHEMA = 'sop' AND 
    REFERENCED_TABLE_NAME = '${table}';`;
}

function findReferencing(table) {
  return `
  SELECT 
    TABLE_NAME, 
    COLUMN_NAME, 
    REFERENCED_TABLE_NAME, 
    REFERENCED_COLUMN_NAME
  FROM
    information_schema.KEY_COLUMN_USAGE 
  WHERE 
    TABLE_NAME = '${table}' AND
    REFERENCED_TABLE_NAME IS NOT NULL;`;
}

module.exports = {
  getFieldTypes,
  convertToPrismaTypes,
  findReferenced,
  findReferencing,
};
