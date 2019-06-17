import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import PropTypes from 'prop-types';

import AnimeList from '../../components/AnimeList';
import { popularAnime } from '../../grahql/quries.js';

class PopularAnime extends Component {
  static navigationOptions = () => ({
    header: null,
  });

  render() {
    const {
      popularAnime,
      navigation,
    } = this.props;

    return (
      <AnimeList navigation={navigation} title="Popular Anime" popularAnime={popularAnime} />
    );
  }
}

PopularAnime.propTypes = {
  navigation: PropTypes.object,
  popularAnime: PropTypes.object,
};

export default graphql(popularAnime, {
  name: 'popularAnime',
  options: () => ({
    variables: {
      page: 1,
      perPage: 6,
    },
  }),
})(PopularAnime);
