const express = require("express");
const sqlite3 = require("sqlite3").verbose();
const cors = require("cors");
const authRoutes = require("./routes/auth"); // Import auth routes
const productRoutes = require("./routes/products"); // Import product routes
require("dotenv").config();
require("./db"); // Import the database setup file

const app = express();
app.use(express.json());
app.use(cors());

// Connect to SQLite database
// const db = new sqlite3.Database("./database.sqlite", (err) => {
//   if (err) console.error(err.message);
//   else console.log("Connected to SQLite database.");
// });

// Routes
app.use("/api/auth", authRoutes); //  Authentication routes
app.use("/api/products", productRoutes); // Product management routes

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
