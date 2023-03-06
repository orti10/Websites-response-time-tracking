const Pool = require("pg").Pool;
const pool = new Pool({
  user: "postgres",
  password: "ortalh10",
  host: "localhost",
  port: 5432,
  database: "domainsrecords"

  //I tried to write a more secure code but because of a library import problem it didn't work for me!
  // The code is below

  // user: process.env.DB_USER,
  // password: `${process.env.DB_PASSWORD}`,
  // host: process.env.DB_HOST,
  // port: process.env.DB_PORT,
  // database: process.env.DB_NAME,

});

module.exports = pool;