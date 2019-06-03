import React, { Component } from 'react';
import { graphql, compose } from 'react-apollo';

import { popularAnime, highlyAnticipated, highestRated, allTimePopular } from '../../grahql/quries.js';

import MainScreenView from '../../components/MainScreen';

class MainScreen extends Component {
  static navigationOptions = () => ({
    header: null,
  });
  render() {
    const { popularAnime, highlyAnticipated, highestRated, allTimePopular } = this.props;
    return (<MainScreenView
      popularAnime={popularAnime}
      highlyAnticipated={highlyAnticipated}
      highestRated={highestRated}
      allTimePopular={allTimePopular} />)
  }
}

export default compose(graphql(popularAnime, {
  name: 'popularAnime',
  options: () => ({
    variables: {
      page: 1,
      perPage: 6,
    },
  })
}),
  graphql(highlyAnticipated, {
    name: 'highlyAnticipated',
    options: () => ({
      variables: {
        page: 1,
        perPage: 6,
      },
    })
  }),
  graphql(allTimePopular, {
    name: 'allTimePopular',
    options: () => ({
      variables: {
        page: 1,
        perPage: 6,
      },
    })
  }),
  graphql(highestRated, {
    name: 'highestRated',
    options: () => ({
      variables: {
        page: 1,
        perPage: 6,
      },
    })
  })
)(MainScreen);