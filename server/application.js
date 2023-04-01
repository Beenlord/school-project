const bodyParser = require('body-parser')
const app = require('express')();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.get('/', function (req, res) {
  res.send({
    data: 'data',
  });
  res.end();
});

module.exports = app;
