import React from 'react';
import { graphql } from 'react-apollo';
import { get } from 'lodash';
import PropTypes from 'prop-types';

import CharacterView from '../../components/Character';
import { CharacterDetails } from '../../grahql/quries.js';

const Character = ({
  CharacterDetails,
  navigation,
}) => (
  <CharacterView
    CharacterDetails={CharacterDetails}
    navigation={navigation} />
);

Character.navigationOptions = {
  header: null,
};

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
