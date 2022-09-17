const express = require("express");
const dbConnect = require("./config/dbConnect");
const app = express();


// Db connection
dbConnect()
// Routes
// User Routes

// Registration route
app.post("/api/user/register", (req, res) => {
  res.send("This is the register route");
});

// Login Route
app.post("/api/user/login", (req, res) => {
  res.send("This is the login route");
});

// Update user
app.put("/api/user/update", (req, res) => {
  res.send("user updated");
});

// Delete user
app.delete("/api/user/:id", (req, res) => {
  res.send("user account has been deleted");
});

// Fetch all users
app.get("/api/users", (req, res) => {
  res.send("Here is the list of all users");
});

// Server
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`my server is up and running at port number: ${PORT}`);
});

