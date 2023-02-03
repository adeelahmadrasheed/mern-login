// import dotenv from 'dotenv';
import pg from "pg";
const { Pool } = pg;
// import {Pool} from "pg";

const pool = new Pool({
  user: "devops",
  host: "localhost",
  database: "loginapp",
  password: "devops",
  port: 5432,
});

// const Query = pool.query('SELECT NOW()', (err, res) => {
//   console.log(err)
// })

// module.exports = {
//   query: (text, params) => pool.query(text, params),
// };


export default pool;