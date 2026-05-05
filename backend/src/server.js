import express from "express";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());

app.post("/api/game/score", (req, res) => {
  const { wallet, score } = req.body;

  console.log("Score received:", wallet, score);

  // fake DRC calculation
  const drc = score / 100000;

  res.json({
    success: true,
    wallet,
    score,
    drc
  });
});

app.listen(3000, () => {
  console.log("🚀 Backend running on http://localhost:3000");
});
