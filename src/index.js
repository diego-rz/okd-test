const express = require("express");

const app = express();app.listen(3000, () => {
 console.log("El servidor está inicializado en el puerto 3000");
});

app.get('/', (req, res) => {
  res.send("Estoy corriendo en okd")
});