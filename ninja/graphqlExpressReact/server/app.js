const express = require('express');
const graphqlHTTP = require('express-graphql');
const schema = require('./schema/schema');
const mongoose = require('mongoose');
const config = require('./config');
const cors = require('cors');

const app = express();

// allow react requests
app.use(cors());

// connect to mlab database
// make sure to replace my db string & creds with your own
mongoose.connect(config.database);
mongoose.connection.once('open', () => {
    console.log('conneted to mLab');
});

// bind express with graphql
app.use('/graphql', graphqlHTTP({
    schema,
    graphiql: true
}));

app.listen(4000, () => {
    console.log('now listening for requests on port 4000');
});