import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import PropTypes from 'prop-types';

import AnimeList from '../../components/AnimeList';
import { highestRated } from '../../grahql/quries.js';

class HighestRated extends Component {
  static navigationOptions = () => ({
    header: null,
  });


  render() {
    const { highestRated, navigation } = this.props;
    return (
      <AnimeList navigation={navigation} title="Highest Rated Anime" popularAnime={highestRated} />
    );
  }
}

HighestRated.prototypes = {
  highestRated: PropTypes.object,
  navigation: PropTypes.object,
};

export default graphql(highestRated, {
  name: 'highestRated',
  options: () => ({
    variables: {
      page: 1,
      perPage: 6,
    },
  }),
})(HighestRated);
