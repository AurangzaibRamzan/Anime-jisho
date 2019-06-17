import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { graphql, compose } from 'react-apollo';

import {
  popularAnime,
  highlyAnticipated,
  highestRated,
  allTimePopular,
} from '../../grahql/quries.js';

import MainScreenView from '../../components/MainScreen';

class MainScreen extends Component {
  static navigationOptions = () => ({
    header: null,
  });


  render() {
    const {
      popularAnime,
      highlyAnticipated,
      highestRated,
      allTimePopular,
      navigation,
    } = this.props;
    return (<MainScreenView
      popularAnime={popularAnime}
      highlyAnticipated={highlyAnticipated}
      highestRated={highestRated}
      allTimePopular={allTimePopular}
      navigation={navigation} />);
  }
}


MainScreen.propTypes = {
  popularAnime: PropTypes.object,
  highlyAnticipated: PropTypes.object,
  highestRated: PropTypes.object,
  allTimePopular: PropTypes.object,
  navigation: PropTypes.object,
};

export default compose(graphql(popularAnime, {
  name: 'popularAnime',
  options: () => ({
    variables: {
      page: 1,
      perPage: 6,
    },
  }),
}), graphql(highlyAnticipated, {
  name: 'highlyAnticipated',
  options: () => ({
    variables: {
      page: 1,
      perPage: 6,
    },
  }),
}), graphql(allTimePopular, {
  name: 'allTimePopular',
  options: () => ({
    variables: {
      page: 1,
      perPage: 6,
    },
  }),
}), graphql(highestRated, {
  name: 'highestRated',
  options: () => ({
    variables: {
      page: 1,
      perPage: 6,
    },
  }),
}))(MainScreen);
