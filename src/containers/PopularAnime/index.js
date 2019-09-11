import React from 'react';
import { graphql } from 'react-apollo';
import PropTypes from 'prop-types';

import AnimeList from '../../components/AnimeList';
import { popularAnime } from '../../grahql/quries.js';

const PopularAnime = ({
  popularAnime,
  navigation,
}) => (
  <AnimeList navigation={navigation} title="Popular Anime" popularAnime={popularAnime} />
);

PopularAnime.navigationOptions = {
  header: null,
};

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
