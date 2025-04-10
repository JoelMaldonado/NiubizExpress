const express = require("express");
const bodyParser = require("body-parser");
const app = express();

const PORT = 7412;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// 🌐 Endpoint que recibe el POST desde el botón de Niubiz
app.post("/api/niubiz-token-callback", async (req, res) => {
  const body = req.body;

  console.log("🟢 Body recibido desde Niubiz:", body);

  res.status(200).json({
    message: "ok",
    body,
  });
});

app.listen(PORT, () => {
  console.log(`🚀 Backend corriendo en el puerto:${PORT}`);
});
