function generateFilter(filter) {
  if (Object.keys(filter).length === 0) return "";

  filter = Object.entries(filter)
    .map(([key, value]) => {
      if (Array.isArray(value)) return `${key} IN (${value.join(", ")})`;
      if (value == null || value == 'null') return `${key} IS NULL`;
      return `${key} = '${value}'`;
    })
    .join(" AND ");

  filter = `WHERE ${filter}`;

  return filter;
}

module.exports = {
  generateFilter,
};
