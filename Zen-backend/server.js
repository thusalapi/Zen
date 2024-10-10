const { default: mongoose } = require("mongoose");
const express = require("express");
const app = express();
const cors = require("cors");
const habits = require("./routes/habitRoutes");
const users = require("./routes/userRoutes");

mongoose
  .connect(
    "mongodb+srv://sachilaawandya:sachila20000816@habit-cluster.cldoa.mongodb.net/?retryWrites=true&w=majority&appName=habit-cluster"
  )
  .then(() => console.log("Connect to MongoDB"))
  .catch((err) => console.log("Could not connect to MongoDB", err));

app.use(cors()); // Enable CORS for all routes

app.use(express.json());

app.use("/api/habits", habits);

app.use("/api/users", users);

app.use('/api/doctors', require('./routes/doctors'));
app.use('/api/appointments', require('./routes/appointments'));
app.use('/api/feedback', require('./routes/feedback'));

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}...`));
