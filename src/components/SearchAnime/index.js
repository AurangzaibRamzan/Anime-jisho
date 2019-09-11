import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { get } from 'lodash';

import SearchBar from './SearchBar';
import FlatList from '../../widget/FlatList';
import Image from '../../widget/Image';

import {
  CoverLabel,
  MainWrapper,
  AnimeTouchble,
  LabelWrapper,
} from './styles';

const SearchAnime = ({
  SearchAnimeQuery,
  navigation,
}) => {
  const renderItem = ({ item }) => {
    const cover = get(item, 'coverImage.medium', 'https://data.whicdn.com/images/153106009/large.jpg');
    const titleEng = get(item, 'title.english', '');
    const titleNative = get(item, 'title.native', '');
    const episodes = get(item, 'episodes', '');
    const format = get(item, 'format', '');
    const season = get(item, 'season', '');
    const averageScore = get(item, 'averageScore', '');
    const id = get(item, 'id');
    const date = `${get(item, 'startDate.day', '')}/${get(item, 'startDate.month', '')}/${get(item, 'startDate.year', '')}`;
    return (
      <AnimeTouchble onPress={() => id && navigation.navigate('Anime', { id })} >
        <Image source={{ uri: cover }} width={100} height={135} />
        <LabelWrapper>
          {titleEng && <CoverLabel>{titleEng}</CoverLabel>}
          {titleNative && <CoverLabel>{titleNative}</CoverLabel>}
          {episodes && <CoverLabel>{`Episodes: ${episodes}`}</CoverLabel>}
          {averageScore && <CoverLabel>{`Score: ${averageScore}`}</CoverLabel>}
          {format && <CoverLabel>{`Format: ${format}`}</CoverLabel>}
          {season && <CoverLabel>{`Season: ${season}`}</CoverLabel>}
          {date && <CoverLabel>{`Starting Date: ${date}`}</CoverLabel>}
        </LabelWrapper>
      </AnimeTouchble>
    );
  };

  const handleInputChange = (text) => {
    SearchAnimeQuery.refetch(
      ({
        search: text === '' ? 'a' : text,
      }),
    );
  };

  return (
    <MainWrapper>
      <SearchBar handleInputChange={handleInputChange} title="Search Anime" />
      <FlatList
        data={SearchAnimeQuery}
        renderItem={renderItem}
      />
    </MainWrapper>
  );
};

SearchAnime.propTypes = {
  SearchAnimeQuery: PropTypes.object,
  navigation: PropTypes.object,
};

export default SearchAnime;
