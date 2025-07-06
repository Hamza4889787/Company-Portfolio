require("dotenv").config();
const express = require("express");
const app = express();
const connectDB = require("./server/config/db");
const PORT = process.env.PORT || 5000;
const cors = require("cors");

const contactRoute = require("./server/routes/contactUs");
const projectsRoute = require("./server/routes/projects");

connectDB();
app.use(
  cors({
    origin: "http://localhost:8081",
    credentials: true, // ✅ Required for session cookies
  })
);

app.use(express.json());
app.use("/api/projects", projectsRoute);
app.use("/api/clients", contactRoute);

app.get("/", (req, res) => {
  res.send("Hello from express");
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
