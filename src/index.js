const express = require("express");
const fs = require("fs");

const app = express();app.listen(3000, () => {
 console.log("El servidor está inicializado en el puerto 3000");
});

app.get('/', (req, res) => {
  res.send("Estoy corriendo en okd")
});

app.get('/read', (req, res) => {
  try {
    const data = fs.readFileSync("/my-files/data.txt");
    res.send(data.toString());
  } catch (error) {
    console.log(error);
  }
})
