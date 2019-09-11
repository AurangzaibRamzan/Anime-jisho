import React from 'react';
import { graphql } from 'react-apollo';
import PropTypes from 'prop-types';

import SearchAnimeView from '../../components/SearchAnime';
import { SearchAnimeQuery } from '../../grahql/quries.js';

const SearchAnime = ({
  SearchAnimeQuery,
  navigation,
}) => (
  <SearchAnimeView SearchAnimeQuery={SearchAnimeQuery} navigation={navigation} />
);

SearchAnime.navigationOptions = {
  header: null,
};

SearchAnime.propTypes = {
  navigation: PropTypes.object,
  SearchAnimeQuery: PropTypes.object,
};

export default graphql(SearchAnimeQuery, {
  name: 'SearchAnimeQuery',
  options: () => ({
    variables: {
      page: 1,
      perPage: 6,
      search: 'a',
    },
  }),
})(SearchAnime);
