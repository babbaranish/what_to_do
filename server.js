const express = require("express");
const app = express();
const PORT = process.env.PORT || 5000;
const connectDb = require("./config/db");
const accountSid = "accoutsid";
const authToken = "auth-token";
const client = require("twilio")(accountSid, authToken);

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

app.listen(PORT, () => console.log(`server is running on ${PORT} port`));
