const express = require('express');
const app = express();

app.set('view engine', 'pug')

app.get('/', (req, res) => {
    res.render('index', {
        title: 'Using View Engine in Express', message: "This is received from the Server"
    });
})

app.listen(3000, () => console.log('Server running on port 3000'));
