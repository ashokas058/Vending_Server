const { createPool } = require("mysql");
const db = createPool({
  port: 5432,
  host: "ec2-34-200-205-45.compute-1.amazonaws.com",
  user: "hbrtsbwkhdgqfy",
  password: "518ced4f708135b0812fced4bbd93b672a7970b534746cdffe029f14ced65414",
  database: "duishf25hku4v",
  
});

module.exports = db;