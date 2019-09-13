/* eslint-disable no-underscore-dangle */
import React, { Component } from 'react';
import { StatusBar } from 'react-native';
import { ThemeProvider } from 'styled-components';
import ApolloClient from 'apollo-client';

import { HttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { ApolloProvider } from 'react-apollo';
import Api from './config';

import AppScreen from './src/containers/app/Navigator';

const theme = {
  color: {
    pirmary: '#004f4f',
    secondary: '#ff8f1f',
  },
  fontSize: 13,
};

export default class App extends Component {
  constructor(props) {
    super(props);

    this.client = new ApolloClient({
      link: new HttpLink({ uri: Api }),
      // eslint-disable-next-line no-undef
      cache: new InMemoryCache().restore(window.__APOLLO_STATE__),
    });
  }

  render() {
    return (
      <ApolloProvider client={this.client}>
        <StatusBar backgroundColor="#004f4f" />
        <ThemeProvider theme={theme}>
          <AppScreen />
        </ThemeProvider>
      </ApolloProvider>
    );
  }
}
