const express = require("express");
const app = express();

require("dotenv").config();

const db = require("./app/config/db");
const PORT = process.env.PORT;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

db.then(() => console.log("database connected")).catch((error) =>
	console.log(error.message)
);

app.use("/", require("./app/routes"));

app.listen(PORT, () => {
	console.log("server running on http://localhost:" + PORT);
});
