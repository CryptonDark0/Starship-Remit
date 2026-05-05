import express from "express";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());

// TEST ROUTE
app.get("/", (req, res) => {
  res.send("🚀 Starship Remit Backend Running");
});

// SCORE API
app.post("/api/game/score", (req, res) => {
  const { wallet, score } = req.body;

  if (!wallet || !score) {
    return res.status(400).json({ error: "Missing data" });
  }

  // 🎯 Convert score → DRC
  const drc = score / 100000;

  console.log("Player:", wallet);
  console.log("Score:", score);
  console.log("DRC Earned:", drc);

  // (TEMP: no database yet)
  return res.json({
    success: true,
    drcEarned: drc
  });
});

app.listen(3000, () => {
  console.log("🚀 Backend running on port 3000");
});
