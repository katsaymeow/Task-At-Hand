const PORT = process.env.PORT || 3301;
const { Console } = require('console');
const express = require('express');
const app = express();
const fs = require('fs');
const path = require('path');

app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({extended: true }));

app.listen(PORT, () => {
    console.log(`Server is now on port ${PORT}.`)
});

