const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const bookRoutes = require("./routes/bookRoutes");

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use("/api/books", bookRoutes);

mongoose.connect(process.env.MONGO_URI)
.then(() => {
  app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
}).catch(err => console.error(err));
