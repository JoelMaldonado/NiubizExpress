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

  // Construimos un HTML simple con el contenido recibido
  const htmlResponse = `
      <html>
        <head>
          <title>Niubiz Callback</title>
          <style>
            body {
              font-family: Arial, sans-serif;
              padding: 2rem;
              background-color: #f8f8f8;
              color: #333;
            }
            pre {
              background: #fff;
              padding: 1rem;
              border: 1px solid #ccc;
              overflow-x: auto;
            }
          </style>
        </head>
        <body>
          <h1>✅ Todo está bien</h1>
          <p>Este es el body recibido:</p>
          <pre>${JSON.stringify(body, null, 2)}</pre>
        </body>
      </html>
    `;
  res.status(200).send(htmlResponse);
});

app.listen(PORT, () => {
  console.log(`🚀 Backend corriendo en el puerto:${PORT}`);
});
