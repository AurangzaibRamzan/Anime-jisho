import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import { get } from 'lodash';
import PropTypes from 'prop-types';

import CharacterView from '../../components/Character';
import { CharacterDetails } from '../../grahql/quries.js';

class Character extends Component {
  static navigationOptions = () => ({
    header: null,
  });


  render() {
    const { CharacterDetails, navigation } = this.props;
    return (
      <CharacterView
        CharacterDetails={CharacterDetails}
        navigation={navigation} />
    );
  }
}

Character.propTypes = {
  CharacterDetails: PropTypes.object,
  navigation: PropTypes.object,
};

export default graphql(CharacterDetails, {
  name: 'CharacterDetails',
  options: props => ({
    variables: {
      id: get(props, 'navigation.state.params.id', 0),
    },
  }),
})(Character);
