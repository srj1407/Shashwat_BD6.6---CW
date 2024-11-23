const express = require('express');
const app = express();
const cors = require('cors');
const { getAllEmployees, getEmployeeById } = require('./controllers/index.js');

app.use(express.json());
app.use(cors());

app.get('/employees', async (req, res) => {
  const employees = getAllEmployees();
  res.json({ employees });
});

app.get('/employees/details/:id', async (req, res) => {
  let employee = getEmployeeById(parseInt(req.params.id));
  res.json({ employee });
});

module.exports = {
  app,
};
