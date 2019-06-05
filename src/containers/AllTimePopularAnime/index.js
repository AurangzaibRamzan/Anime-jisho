import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import AnimeList from '../../components/AnimeList';
import { allTimePopular } from '../../grahql/quries.js';

class AllTimePopular extends Component {
  static navigationOptions = () => ({
    header: null,
  });
  render() {
    const { allTimePopular,navigation } = this.props;
    return (
      <AnimeList navigation={navigation} title="All Time Popular Anime" popularAnime={allTimePopular} />
    )
  }
}

export default graphql(allTimePopular, {
  name: 'allTimePopular',
  options: () => ({
    variables: {
      page: 1,
      perPage: 6,
    },
  })
})(AllTimePopular);