const express = require('express');
const app = express();
const env = require('dotenv');
const mongoose = require('mongoose');
const brandRoutes = require("./routes/brand");
const phoneRoutes = require("./routes/phone");
const contactRoutes = require("./routes/contact");

env.config();


app.use(express.json());

mongoose.connect(
  `mongodb+srv://${process.env.MONGO_DB_USER}:${process.env.MONGO_DB_PASSWORD}@mobihub.qmy0w.mongodb.net/${process.env.MONGO_DB_DATABASE}?retryWrites=true&w=majority`, {useUnifiedTopology: true, useNewUrlParser: true});

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error: "));
db.once("open", function () {
  console.log("Connected successfully");
});



app.use("/api", brandRoutes);
app.use("/api", phoneRoutes);
app.use("/api", contactRoutes);

app.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT}`);
});