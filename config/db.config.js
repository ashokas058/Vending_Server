const { createPool } = require("mysql");
const db = createPool({
  port: 3306,
  host: "sql.freedb.tech",
  user: "freedb_root_ashok",
  password: "HdcVxd#5x!Y#*x#",
  database: "freedb_vending",
  
});

module.exports = db;