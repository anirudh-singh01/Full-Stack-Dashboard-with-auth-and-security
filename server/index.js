require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const cookieParser = require("cookie-parser"); // Add cookie-parser
const connection = require("./db");
const userRoutes = require("./routes/users");
const authRoutes = require("./routes/auth");
const userUpdateRoutes = require("./routes/userUpdate");
const getUser = require("./routes/getUser");

// database connection
connection();

// middlewares
app.use(express.json());
app.use(cors());
app.use(cookieParser(process.env.COOKIE_SECRET)); // Add signed cookies

// routes
app.use("/api/users", userRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/userUpdate", userUpdateRoutes);
app.use("/api/getUser", getUser);

const port = process.env.PORT || 8080;
app.listen(port, console.log(`Listening on port ${port}...`));
