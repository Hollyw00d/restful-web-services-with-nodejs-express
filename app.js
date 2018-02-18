let express = require('express');
let mongoose = require('mongoose');

let db = mongoose.connect('mongodb://localhost/bookAPI');

let Book = require('./models/bookModel');
let app = express();

let port = process.env.PORT || 3000;

let bookRouter = express.Router();

bookRouter.route('/books')
    .get((req, res) => {
        let query = {};
        if(req.query.genre) {
            query.genre = req.query.genre;
        }

        Book.find(query, (err, books) => {
            if(err) {
                res.status(500).send(err);
            }
            else {
                res.json(books);
            }
        });
        
    });

bookRouter.route('/books/:bookId')  
.get((req, res) => {
    Book.findById(req.params.bookId, (err, book) => {
        if(err) {
            res.status(500).send(err);
        }
        else {
            res.json(book);
        }
    });
    
});  

app.use('/api', bookRouter);

app.get('/', (req, res) => {
    res.send('Welcome to my API!');
});

app.listen(port, () => {
    console.log(`Gulp is running my app on PORT: ${port}`);
});