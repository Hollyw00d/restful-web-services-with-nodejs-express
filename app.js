let express = require('express');
let mongoose = require('mongoose');
let bodyParser = require('body-parser');

let db = mongoose.connect('mongodb://localhost/bookAPI');

let Book = require('./models/bookModel');
let app = express();

let port = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

bookRouter = require('./routes/bookRoutes')(Book);

app.use('/api/books', bookRouter);

app.get('/', (req, res) => {
    res.send('Welcome to my API!');
});

app.listen(port, () => {
    console.log(`Gulp is running my app on PORT: ${port}`);
});