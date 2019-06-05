import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import SearchCharactorView from '../../components/SearchCharactor';
import { SearchCharactorQuery } from '../../grahql/quries.js';

class SearchCharactor extends Component {
  static navigationOptions = () => ({
    header: null,
  });
  render() {
    const { SearchCharactorQuery, navigation } = this.props;
    return <SearchCharactorView
      SearchCharactorQuery={SearchCharactorQuery}
      navigation={navigation} />
  }
}


export default graphql(SearchCharactorQuery, {
  name: 'SearchCharactorQuery',
  options: () => ({
    variables: {
      page: 1,
      perPage: 6,
      search: 'a',
    },
  })
})(SearchCharactor);
