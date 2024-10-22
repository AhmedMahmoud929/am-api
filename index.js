require("dotenv").config();
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const port = process.env.PORT || 2611;
const dashboardRouter = require("./routers/dashboard.router");
const projectsRouter = require("./routers/projects.router");
const usersRouter = require("./routers/users.router");
const messagesRouter = require("./routers/messages.router");
const checkAuth = require("./middlewares/auth.mw");
const cors = require("cors");
// MiddleWares
app.use(express.json());
app.use(cors());
app.use(cors({
  origin: 'https://client-side-ahmedmahmoud929-ahmedmahmoud929s-projects.vercel.app'
}));


// Routes
app.get("/", (req, res) => res.send("Please go to /api/"));
app.use("/api/dashboard", checkAuth, dashboardRouter);
app.use("/api/projects", projectsRouter);
app.use("/api/messages", messagesRouter);
app.use("/api/user", usersRouter);

// Connect to DB
mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => console.log("DB Connected"))
  .catch((err) => console.log(err));

// Server Listening
app.listen(port, () => console.log(`http://localhost:${port}/api/projects`));
