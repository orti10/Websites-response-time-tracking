const Pool = require("pg").Pool;

const pool = new Pool({
  user: "postgres",
  password: "ortalh10",
  host: "localhost",
  port: 5432,
  database: "domainsrecords"

});

module.exports = pool;