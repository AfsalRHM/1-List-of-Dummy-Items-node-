const express = require('express');

const app = express();

app.set('view engine' , 'ejs');

app.listen(3001);

app.get('/', (req, res) => {
    const dummyItems = ['Pencil','Pen','Pouch','Duster','Mobile','Laptop']
    res.render('items', {dummyItems});
});