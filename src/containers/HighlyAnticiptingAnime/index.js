import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'react-apollo';

import AnimeList from '../../components/AnimeList';
import { highlyAnticipated } from '../../grahql/quries.js';

const HighlyAnticipated = ({
  highlyAnticipated,
  navigation,
}) => (
  <AnimeList navigation={navigation} title="Highly Anticipated Anime" popularAnime={highlyAnticipated} />
);

HighlyAnticipated.navigationOptions = {
  header: null,
};

HighlyAnticipated.propTypes = {
  highlyAnticipated: PropTypes.object,
  navigation: PropTypes.object,
};

export default graphql(highlyAnticipated, {
  name: 'highlyAnticipated',
  options: () => ({
    variables: {
      page: 1,
      perPage: 6,
    },
  }),
})(HighlyAnticipated);
