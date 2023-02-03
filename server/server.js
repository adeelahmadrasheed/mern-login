import express from "express";
import cors from 'cors'
import bodyParser from "body-parser";
import morgan from "morgan";
/* Node modules */
import pool from "./db/conn.js";
import router from "./router/route.js";
/* import modules above */
const app = express();
const port = 8080;

app.use(express.json());
app.use(cors());
app.use(morgan('tiny'))
app.disable('x-powered-by')
// app.use(
//   bodyParser.urlencoded({
//     extended: true,
//   })
// );

app.get("/", (request, response) => {
  response.json({ info: "Node.js, Express, and Postgres API" });
});

/* API Routes */

app.use('/api', router)

app.listen(port, () => {
  console.log(`App running on port ${port}.`);
});

// app.get("/api/v1/users", async (req, res) => {
//   try {
//     const results = await pool.query("select * from users");
//     res.status(200).json({
//       status: "success",
//       results: results.rows.length,
//       data: {
//         users: results.rows,
//       },
//     });
//   } catch (error) {
//     console.log(error);
//   }
// });

// =================================================
// import express from "express";
// import cors from "cors";
// import morgan from "morgan";
// import db from './database/connection'
// const db = require('./database/connection')
// import connect from "./database/connection";

// const app = express();

// /* middleware */
// app.use(express.json());
// app.use(cors());
// app.use(morgan("tiny"));
// app.disable("x-powered-by"); /* disable stack info */

// const port = 8080;

// /* HTTP GET request */
// app.get("/", async (req, res) => {
//   try {
//     res.status(200).json("Home");
//   } catch (error) {
//     console.log(error);
//   }
// });

// /* start server */
// app.listen(port, () => {
//   console.log(`Server connect to http://localhost:${port}`);
// });

// /* start only when valid db */
// connect()
//   .then(() => {
//     try {
//       /* start server */
//       app.listen(port, () => {
//         console.log(`Server connect to http://localhost:${port}`);
//       });
//     } catch (error) {
//       console.log("Unable to connect to server");
//     }
//   })
//   .catch((error) => {
//     console.log("Invalid DB connection");
//   });
