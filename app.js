const usuarioRoutes = require('./routes/usuarioRoutes');
const express = require('express');
require('dotenv').config();

const app = express()
app.use(express.json());

const port = process.env.PORT;


app.get('/', (req, res) => {
  res.send({status: 'ok'})
});
app.use('/usuarios', usuarioRoutes);

app.listen(port, () => {
  console.log(`Example app listening on port: http://localhost:${port}`)
});