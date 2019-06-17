import React from 'react';
import PropTypes from 'prop-types';
import { FlatList, RefreshControl } from 'react-native';
import {
  get, assign, isFunction,
} from 'lodash';

import Loading from '../Loading';
import NoItemFound from '../NetworkError';
import EmptyList from '../EmptyList';

class AppFlatList extends React.Component {
  constructor(props) {
    super(props);
    this.state = { loadmore: false, page: 1 };
    this.keyExtractor = this.keyExtractor.bind(this);
    this.loadMore = this.loadMore.bind(this);
    this.refetchDataList = this.refetchDataList.bind(this);
  }

  keyExtractor(item, index) {
    if (!isFunction(this.props.keyExtractor)) return index.toString();
    return this.props.keyExtractor(item, index);
  }

  loadMore() {
    const { data } = this.props;
    if ((get(data, 'Page.media', []).length) < 6) {
      this.setState({ noMoreData: true });
      return null;
    }
    data.fetchMore({
      variables: {
        page: 1 + this.state.page,
        perPage: 6,
      },
      updateQuery: (previousResult, { fetchMoreResult }) => {
        const newEdges = get(fetchMoreResult, 'Page.media', []);
        this.setState({ page: (this.state.page + 1) });
        // Don't do anything if there weren't any new items
        if (!fetchMoreResult || newEdges.length === 0) {
          this.setState({ noMoreData: true });
          return previousResult;
        }

        const previousEdges = get(previousResult, 'Page.media', []);
        const concatEdges = previousEdges.concat(newEdges);
        const dataList = assign(
          {},
          get(previousResult, 'Page', {}),
          {
            media: [...concatEdges],
          },
        );

        return { Page: dataList };
      },
    });
    return null;
  }

  refetchDataList() {
    this.props.data.refetch();
  }

  render() {
    const {
      data,
      renderItem,
    } = this.props;
    const { noMoreData } = this.state;
    if (!data) return null;
    const loadingStyle = { height: '80%', backgroundColor: '#004f4f' };
    if (!get(data, 'Page.media') && data.loading) return (<Loading style={loadingStyle} />);

    const networkError = data.networkStatus === 8;

    const dataList = get(data, 'Page.media', []);
    const emptyData = !(get(data, 'Page.media', []).length > 0);
    const containerStyle = { justifyContent: 'center', alignItems: 'center', height: '100%' };
    return (
      <FlatList
        data={dataList}
        renderItem={renderItem}
        keyExtractor={this.keyExtractor}
        initialNumToRender={6}
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
        onEndReachedThreshold={0.5}
        onEndReached={this.loadMore}
        contentContainerStyle={emptyData && containerStyle}
        ListEmptyComponent={networkError ? <NoItemFound /> : <EmptyList />}
        refreshControl={
          <RefreshControl
            refreshing={data.networkStatus === 4}
            onRefresh={this.refetchDataList}
          />
        }
        ListFooterComponent={
          (!networkError && !noMoreData) && (!networkError && !emptyData)
          && <Loading />
        }
      />
    );
  }
}

AppFlatList.propTypes = {
  data: PropTypes.object.isRequired,
  renderItem: PropTypes.func.isRequired,
};

export default AppFlatList;
