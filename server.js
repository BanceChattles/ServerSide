const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.render('index', {
        title: 'Homepage'
    });
});

app.set('view engine', 'pug');

const server = app.listen(7001, () => {
    console.log(`Express running → PORT ${server.address().port}`);
  });
//   For some reason changing it to 7001 helped?!