const express = require("express");
const cors = require("cors");
const app = express();
const Allrouter = require("./app/routes");

require("dotenv").config();

const db = require("./app/config/db");
const PORT = process.env.PORT;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

db.then(() => console.log("database connected")).catch((error) =>
	console.log(error.message)
);

app.use("/api", Allrouter);

app.listen(PORT, () => {
	console.log("server running on http://localhost:" + PORT);
});
