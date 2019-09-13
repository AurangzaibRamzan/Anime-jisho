import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { get } from 'lodash';
import {
  RefreshControl,
  TouchableOpacity,
} from 'react-native';

import Image from '../../widget/Image';
import NetWorkError from '../../widget/NetworkError';
import {
  MainScreenView,
  BackgroundImage,
  CoverLabel,
  DecriptionLabel,
  Label,
  ImageWrapper,
  TouchableCard,
  LoadingWrapper,
  IconWrapper,
  ImageOuterWrapper,
  LableWrapper,
  GenreWrapper,
  FlatListWrapper,
} from './styles';

const Anime = ({
  AnimeDetails,
  navigation,
}) => {
  const refetchDataList = () => AnimeDetails.refetch();

  const renderCharacter = ({ item }) => {
    const name = `${get(item, 'name.first', '')} ${get(item, 'name.last', '') ? get(item, 'name.last', '') : ''}`;
    const nameNative = get(item, 'name.native', '');
    const id = get(item, 'id', '');
    const coverImage = get(item, 'image.medium', 'https://i.pinimg.com/474x/11/da/6c/11da6c29f4ad4236431d0f45ac47c2c2.jpg');
    return (
      <TouchableCard onPress={() => id && navigation.navigate('Character', { id })} >
        <ImageWrapper source={{ uri: coverImage }} width={100} height={150} />
        {name && <CoverLabel paddingLeft={2}>{`${name.slice(0, 25)}`}</CoverLabel>}
        {nameNative && <CoverLabel paddingLeft={2}>{`${nameNative.slice(0, 25)}`}</CoverLabel>}
      </TouchableCard>
    );
  };


  if (AnimeDetails.networkStatus === 8) {
    return (
      <MainScreenView
        refreshControl={
          <RefreshControl
            refreshing={AnimeDetails.networkStatus === 4}
            onRefresh={refetchDataList}
          />
        }
      >
        <NetWorkError />
      </MainScreenView>
    );
  }

  if (AnimeDetails.loading) return <LoadingWrapper />;

  const cover = get(AnimeDetails, 'Media.coverImage.large', 'https://data.whicdn.com/images/153106009/large.jpg');
  const bannerImage = get(AnimeDetails, 'Media.bannerImage', 'https://data.whicdn.com/images/153106009/large.jpg');
  const titleEng = get(AnimeDetails, 'Media.title.english', '');
  const titleNative = get(AnimeDetails, 'Media.title.native', '');
  const episodes = get(AnimeDetails, 'Media.episodes', '');
  const format = get(AnimeDetails, 'Media.format', '');
  const season = get(AnimeDetails, 'Media.season', '');
  const averageScore = get(AnimeDetails, 'Media.averageScore', 0);
  const date = `${get(AnimeDetails, 'Media.startDate.day', '')}/${get(AnimeDetails, 'Media.startDate.month', '')}/${get(AnimeDetails, 'Media.startDate.year', '')}`;
  const description = get(AnimeDetails, 'Media.description', '');
  const Characters = get(AnimeDetails, 'Media.characters.nodes', []).slice(0, 15);
  const genres = get(AnimeDetails, 'Media.genres', []).slice(0, 10);
  const backgroundImageStyle = { opacity: 0.1 };
  return (
    <MainScreenView
      refreshControl={
        <RefreshControl
          refreshing={AnimeDetails.networkStatus === 4}
          onRefresh={refetchDataList}
        />
      }
    >
      <BackgroundImage imageStyle={backgroundImageStyle} source={{ uri: bannerImage }} >
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <IconWrapper color="#fff" name="left-arrow" size={30} />
        </TouchableOpacity>
        <ImageOuterWrapper>
          <Image source={{ uri: cover }} width={140} height={200} />
          <LableWrapper >
            {titleEng && <DecriptionLabel>{titleEng}</DecriptionLabel>}
            {titleNative && <DecriptionLabel>{titleNative}</DecriptionLabel>}
            {episodes && <CoverLabel>{`Episodes: ${episodes}`}</CoverLabel>}
            {averageScore && <CoverLabel>{`Score: ${averageScore}%`}</CoverLabel>}
            {format && <CoverLabel>{`Format: ${format}`}</CoverLabel>}
            {season && <CoverLabel>{`Season: ${season}`}</CoverLabel>}
            {date && <CoverLabel>{`Starting Date: ${date}`}</CoverLabel>}
          </LableWrapper>
        </ImageOuterWrapper>
        <DecriptionLabel paddingTop={20} paddingLeft={0.1}>{'Description : '}</DecriptionLabel>
        <CoverLabel paddingTop={0} paddingLeft={0.1}>{`${description}`}</CoverLabel>
        <DecriptionLabel paddingTop={20} paddingLeft={0.1}>{'Genre : '}</DecriptionLabel>
        <GenreWrapper>
          {genres.map((item, index) => <Label key={index}>{item}</Label>)
          }
        </GenreWrapper>
        <DecriptionLabel paddingTop={20} paddingLeft={0.1}>{'Characters : '}</DecriptionLabel>
        <FlatListWrapper
          keyExtractor={(item, index) => index.toString()}
          data={Characters}
          showsHorizontalScrollIndicator={false}
          horizontal={true}
          renderItem={renderCharacter}
        />
      </BackgroundImage>
    </MainScreenView>
  );
};

Anime.propTypes = {
  AnimeDetails: PropTypes.object,
  navigation: PropTypes.object,
  gur: PropTypes.number,
};

export default Anime;
