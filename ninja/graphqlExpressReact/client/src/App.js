import React, { Component } from 'react';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';

// components
import BookList from './components/bookList';
import AddBook from './components/addBook';

// apollo client setup, apollo client will request this end point
// client.data has book details and ROOT_QUERY
const client = new ApolloClient({
    uri: 'http://localhost:4000/graphql',
    request: operation => {
        operation.setContext({
          headers: {
            authorization: `Bearer YOUR_GITHUB_PERSONAL_ACCESS_TOKEN`,
          },
        });
      },
});

class App extends Component {
    render() {
        return (
            <ApolloProvider client={client}>
                <div id="main">
                    <h1>Hammer Reading List</h1>
                    <BookList />
                    <AddBook />
                </div>
            </ApolloProvider>
        );
    }
}

export default App;