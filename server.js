const express = require("express");
const app = express();
const PORT = process.env.PORT || 5000;
const connectDb = require("./config/db");
const accountSid = "AC7088c784503b2fda81989a0fcb14e34c";
const authToken = "0aca977ed1ac3a572f7e57dc2b0eb3cf";
const client = require("twilio")(accountSid, authToken);
const schedule = require("node-schedule");
var date = new Date(2020, 5, 22, 11, 46, 0);



console.log(date.toLocaleString());
//!connect database
connectDb();

app.use(
	express.json({
		extended: false,
	}),
);
app.use((req, res, next) => {
	res.setHeader("Access-Control-Allow-Origin", "*");
	res.setHeader("Access-Control-Allow-Methods", "GET,POST,PUT,PATCH,DELETE");
	res.setHeader(
		"Access-Control-Allow-Headers",
		"Content-Type, Authorization",
	);
	res.setHeader("Access-Control-Allow-Headers", "Content-Type, x-auth-token");

	next();
});
app.get("/", (req, res) => res.send("Hello World!"));
//!     Setting Routes
app.use("/api/register", require("./routes/api/register"));
app.use("/api/login", require("./routes/api/login"));
app.use("/api/todos", require("./routes/api/todos"));


app.listen(PORT, () => console.log('running'));