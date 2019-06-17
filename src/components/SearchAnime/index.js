import React, { Component } from 'react';
import { View } from 'react-native';
import { get } from 'lodash';

import SearchBar from './SearchBar';
import FlatList from '../../widget/FlatList';
import Image from '../../widget/Image';

import { CoverLabel, MainWrapper, AnimeTouchble } from './styles';

export default class index extends Component {
  renderItem = ({ item, index }) => {
    const { navigation } = this.props;
    const cover = get(item, 'coverImage.medium', 'https://data.whicdn.com/images/153106009/large.jpg');
    const titleEng = get(item, 'title.english', '');
    const titleNative = get(item, 'title.native', '');
    const episodes = get(item, 'episodes', '');
    const format = get(item, 'format', '');
    const season = get(item, 'season', '');
    const averageScore = get(item, 'averageScore', '');
    const id = get(item, 'id');
    const date = `${get(item, 'startDate.day', '')}/${get(item, 'startDate.month', '')}/${get(item, 'startDate.year', '')}`;
    return <AnimeTouchble onPress={() => id && navigation.navigate('Anime', { id: id })} >
      <Image source={{ uri: cover }} width={100} height={135} />
      <View style={{ flexDirection: 'column' }}>
        {titleEng && <CoverLabel>{titleEng}</CoverLabel>}
        {titleNative && <CoverLabel>{titleNative}</CoverLabel>}
        {episodes && <CoverLabel>{`Episodes: ${episodes}`}</CoverLabel>}
        {averageScore && <CoverLabel>{`Score: ${averageScore}`}</CoverLabel>}
        {format && <CoverLabel>{`Format: ${format}`}</CoverLabel>}
        {season && <CoverLabel>{`Season: ${season}`}</CoverLabel>}
        {date && <CoverLabel>{`Starting Date: ${date}`}</CoverLabel>}
      </View>

    </AnimeTouchble>
  }

  handleInputChange = (text) => {
    this.props.SearchAnimeQuery.refetch(
      ({
        search: text === '' ? 'a' : text,
      }),
    );
  }

  render() {
    const { SearchAnimeQuery } = this.props;
    return (
      <MainWrapper>
        <SearchBar handleInputChange={this.handleInputChange} title="Search Anime" />
        <FlatList
          data={SearchAnimeQuery}
          renderItem={this.renderItem}
        />
      </MainWrapper>
    )
  }
}
