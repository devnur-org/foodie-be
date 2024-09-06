const express = require('express');
const app = express();

// Route Paths
const indexRoute = require('./routes');
const usersRoute = require('./routes/users');

app.use(express.json());

// Route middlewares
app.use('/', indexRoute);
app.use('/users', usersRoute);

app.listen(3000, () => console.log('Server running on port 3000'));
