const express = require("express");
const cors = require("cors");
require("dotenv").config();

const gameRoutes = require("./routes/game.routes");

const app = express();

app.use(cors());
app.use(express.json());

// Routes
app.use("/api/game", gameRoutes);

app.get("/", (req, res) => {
  res.send("🚀 Starship Remit Backend Running");
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
