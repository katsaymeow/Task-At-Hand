const express = require('express');
const fs = require('fs');
const path = require('path');
const PORT = process.env.PORT || 3301;
const app = express();
const htmlRoutes = require('./routes/htmlRoutes');
const apiRoutes = require('./routes/apiRoutes');

app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({extended: true }));
app.use(apiRoutes);
app.use(htmlRoutes);

app.listen(PORT, () => {
    console.log(`Server is now on port ${PORT}.`)
});

