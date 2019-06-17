import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'react-apollo';

import AnimeList from '../../components/AnimeList';
import { highlyAnticipated } from '../../grahql/quries.js';

class HighlyAnticipated extends Component {
  static navigationOptions = () => ({
    header: null,
  });

  render() {
    const {
      highlyAnticipated,
      navigation,
    } = this.props;
    return (
      <AnimeList navigation={navigation} title="Highly Anticipated Anime" popularAnime={highlyAnticipated} />
    );
  }
}

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
