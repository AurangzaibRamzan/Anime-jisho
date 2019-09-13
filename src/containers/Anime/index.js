import React from 'react';
import PropTypes from 'prop-types';

import { graphql } from 'react-apollo';
import { get } from 'lodash';

import AnimeView from '../../components/Anime';
import { AnimeDetails } from '../../grahql/quries.js';

const Anime = ({
  AnimeDetails,
  navigation,
}) => (
  <AnimeView
    AnimeDetails={AnimeDetails}
    navigation={navigation}
  />
);

Anime.navigationOptions = {
  header: null,
};

Anime.propTypes = {
  AnimeDetails: PropTypes.object,
  navigation: PropTypes.object,
};

export default graphql(AnimeDetails, {
  name: 'AnimeDetails',
  options: props => ({
    variables: {
      id: get(props, 'navigation.state.params.id', 0),
    },
  }),
})(Anime);
