import { ApolloClient, HttpLink, InMemoryCache } from '@apollo/client';

const httpLink = new HttpLink({
  uri: '',
});

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: httpLink,
});
