let express = require('express');

let app = express();

let port = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.send('Welcome to my API!');
});

app.listen(port, () => {
    console.log(`Gulp is running my app on PORT: ${port}`);
});