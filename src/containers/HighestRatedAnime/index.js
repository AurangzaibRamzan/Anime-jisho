import React from 'react';
import { graphql } from 'react-apollo';
import PropTypes from 'prop-types';

import AnimeList from '../../components/AnimeList';
import { highestRated } from '../../grahql/quries.js';

const HighestRated = ({
  highestRated,
  navigation,
}) => (
  <AnimeList navigation={navigation} title="Highest Rated Anime" popularAnime={highestRated} />
);

HighestRated.navigationOptions = {
  header: null,
};

HighestRated.propTypes = {
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
