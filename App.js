import React, { Component } from 'react';
import { StatusBar } from 'react-native';
import { ThemeProvider } from 'styled-components';
import ApolloClient from 'apollo-client';

import { HttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { ApolloProvider } from 'react-apollo';

import AppScreen from './src/containers/app/Navigator';

const theme = {
  colors: {
  },
};

export default class App extends Component {
  constructor(props) {
    super(props);

    this.client = new ApolloClient({
      link: new HttpLink({ uri: 'https://graphql.anilist.co' }),
      cache: new InMemoryCache().restore(window.__APOLLO_STATE__),
    });
  }

  render() {
    return (
      <ApolloProvider client={this.client}>
        <StatusBar backgroundColor="red" />
        <ThemeProvider theme={theme}>
          <AppScreen />
        </ThemeProvider>
      </ApolloProvider>
    );
  }
}