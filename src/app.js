const express = require('express');
const app = express();
const path = require('path');
const port = process.env.PORT || 3001;

app.use(express.static(path.join(__dirname, '../public')));

app.get('/', (req, res) =>{
    res.sendFile(__dirname + '/views/home.html');
});

app.listen (port, () => console.log(`Servidor funcionando bien en puerto ${port}`));

