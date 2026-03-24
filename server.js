const express = require("express");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());

// LOGIN
app.post("/login", (req, res) => {
  const { username, password } = req.body;

  if (username === "admin" && password === "123456") {
    return res.json({ token: "123" });
  }

  return res.status(401).json({ error: "Login inválido" });
});

// SINAIS
app.get("/sinais", (req, res) => {
  const sinais = [
    { par: "EUR/USD", sinal: "COMPRA" },
    { par: "GBP/USD", sinal: "VENDA" },
    { par: "USD/JPY", sinal: "COMPRA" }
  ];

  res.json(sinais);
});

app.listen(3000, () => {
  console.log("Servidor rodando");
});
