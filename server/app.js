const books = require('./routes/Books')
const PORT = 3001;
const express = require('express');
const cors = require('cors')

const app = express();

app.use(express.json());
app.use(cors())


app.use('/books', books);

app.listen(PORT, () => {
    console.log('Connect on server in port:' + PORT);
})