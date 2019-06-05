import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import AnimeList from '../../components/AnimeList';
import { highestRated } from '../../grahql/quries.js';

class HighestRated extends Component {
  static navigationOptions = () => ({
    header: null,
  });
  render() {
    const { highestRated,navigation } = this.props;
    return (
      <AnimeList navigation={navigation} title="Highest Rated Anime" popularAnime={highestRated} />
    )
  }
}

export default graphql(highestRated, {
  name: 'highestRated',
  options: () => ({
    variables: {
      page: 1,
      perPage: 6,
    },
  })
})(HighestRated);