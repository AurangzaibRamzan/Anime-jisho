import React from 'react';
import PropTypes from 'prop-types';

import { graphql } from 'react-apollo';
import SearchCharactorView from '../../components/SearchCharactor';
import { SearchCharactorQuery } from '../../grahql/quries.js';

const SearchCharactor = ({
  SearchCharactorQuery,
  navigation,
}) => (
  <SearchCharactorView
    SearchCharactorQuery={SearchCharactorQuery}
    navigation={navigation}
  />
);

SearchCharactor.navigationOptions = {
  header: null,
};

SearchCharactor.propTypes = {
  navigation: PropTypes.object,
  SearchCharactorQuery: PropTypes.object,
};

export default graphql(SearchCharactorQuery, {
  name: 'SearchCharactorQuery',
  options: () => ({
    variables: {
      page: 1,
      perPage: 6,
      search: 'a',
    },
  }),
})(SearchCharactor);
