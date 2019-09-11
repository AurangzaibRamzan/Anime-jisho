import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { TouchableOpacity } from 'react-native';
import { get } from 'lodash';

import Image from '../../widget/Image';
import FlatList from '../../widget/FlatList';

import {
  CoverLabel,
  LabelText,
  TouchableCover,
  LabelWrappper,
  MainWrapper,
  IconWrapper,
} from './styles';

const AnimeList = ({
  popularAnime,
  title,
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
      <TouchableCover onPress={() => id && navigation.navigate('Anime', { id })} >
        <Image source={{ uri: cover }} width={100} height={135} />
        <LabelWrappper>
          {titleEng && <CoverLabel>{titleEng}</CoverLabel>}
          {titleNative && <CoverLabel>{titleNative}</CoverLabel>}
          {episodes && <CoverLabel>{`Episodes: ${episodes}`}</CoverLabel>}
          {averageScore && <CoverLabel>{`Score: ${averageScore}`}</CoverLabel>}
          {format && <CoverLabel>{`Format: ${format}`}</CoverLabel>}
          {season && <CoverLabel>{`Season: ${season}`}</CoverLabel>}
          {date && <CoverLabel>{`Starting Date: ${date}`}</CoverLabel>}
        </LabelWrappper>
      </TouchableCover>
    );
  };

  return (
    <MainWrapper >
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <IconWrapper color="#fff" name="left-arrow" size={30} />
      </TouchableOpacity>
      <LabelText>{title || 'Anime List'}</LabelText>
      <FlatList
        data={popularAnime}
        renderItem={renderItem}
      />
    </MainWrapper>
  );
};

AnimeList.propTypes = {
  popularAnime: PropTypes.object,
  title: PropTypes.string,
  navigation: PropTypes.object,
};

export default AnimeList;
