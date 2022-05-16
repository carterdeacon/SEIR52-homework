const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const { buildSchema } = require('graphql');
const books = require('./books.json')
const cors = require('cors');

// Schema
// book: Book object can be returned when looked up by :id,
// books: Array of Book Objects can be returned, with an optional title query string
const schema = buildSchema(`
    type Query {
        book(id: Int): Book,
        books(title: String): [Book]
    },
    type Book {
        id: Int,
        title: String,
        description: String,
        authors: [String],
        image: String,
        publishYear: Int
    }
`);

//resolver

const getBook = ({ id }) =>  books.find((book) => book.id == id);

//optional title query
const getBooks = ({ title }) =>  {
    if (title) {
        return books.filter((book) => book.title.toLowerCase().includes(title.toLowerCase()));
    } else {
        return books;
    }
};


// turn them into methods - expose the functions above, matches requests to actions
// Like a routes file

const root = {
    book: getBook,
    books: getBooks
};

// tie it all together

const server = express();
server.use(cors());
server.options('*', cors());
server.use('/graphql', graphqlHTTP({
    schema: schema,
    rootValue: root,
    graphiql: true
}
));

server.listen(4000, () => console.log('http://localhost:4000/graphql'));
