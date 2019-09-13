import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'react-apollo';

import AnimeList from '../../components/AnimeList';
import { allTimePopular } from '../../grahql/quries.js';

const AllTimePopular = ({
  allTimePopular,
  navigation,
}) => (
  <AnimeList navigation={navigation} title="All Time Popular Anime" popularAnime={allTimePopular} />
);

AllTimePopular.navigationOptions = {
  header: null,
};

AllTimePopular.propTypes = {
  allTimePopular: PropTypes.object,
  navigation: PropTypes.object,
};

export default graphql(allTimePopular, {
  name: 'allTimePopular',
  options: () => ({
    variables: {
      page: 1,
      perPage: 6,
    },
  }),
})(AllTimePopular);
