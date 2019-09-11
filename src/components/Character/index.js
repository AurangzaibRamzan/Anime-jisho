import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, TouchableOpacity, RefreshControl } from 'react-native';
import { get } from 'lodash';

import NetWorkError from '../../widget/NetworkError';

import {
  MainScreenView,
  LabelText,
  BackgroundImage,
  CoverLabel,
  LoadingWrapper,
  IconWrapper,
  ImageWrapper,
} from './styles';

const Character = ({
  CharacterDetails,
  navigation,
}) => {
  const refetchDataList = () => CharacterDetails.refetch();

  if (CharacterDetails.networkStatus === 8) {
    return (
      <MainScreenView
        refreshControl={
          <RefreshControl
            refreshing={CharacterDetails.networkStatus === 4}
            onRefresh={refetchDataList}
          />
        }
      >
        <NetWorkError />
      </MainScreenView>
    );
  }

  if (CharacterDetails.loading) return <LoadingWrapper />;

  const details = get(CharacterDetails, 'Character.description', '');
  const CharacterImage = get(CharacterDetails, 'Character.image.large', 'https://i.pinimg.com/474x/11/da/6c/11da6c29f4ad4236431d0f45ac47c2c2.jpg');
  const name = `${get(CharacterDetails, 'Character.name.first', '')}  ${get(CharacterDetails, 'Character.name.last', '') ? get(CharacterDetails, 'Character.name.last', '') : ''}`;
  const nameNative = get(CharacterDetails, 'Character.name.native', '');
  const backgroundImageStyle = { opacity: 0.1 };

  return (
    <MainScreenView
      refreshControl={
        <RefreshControl
          refreshing={CharacterDetails.networkStatus === 4}
          onRefresh={refetchDataList}
        />}>
      <BackgroundImage imageStyle={backgroundImageStyle} source={CharacterImage ? { uri: CharacterImage } : require('../../../assets/images/logo.png')} >
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <IconWrapper color="#fff" name="left-arrow" size={30} />
        </TouchableOpacity>
        <LabelText>{name}</LabelText>
        <LabelText>{nameNative}</LabelText>
        <View >
          <ImageWrapper source={{ uri: CharacterImage }} size={300} />
        </View>
        <CoverLabel>{details}</CoverLabel>
      </BackgroundImage>
    </MainScreenView>
  );
};

Character.propTypes = {
  CharacterDetails: PropTypes.object,
  navigation: PropTypes.object,
};

export default Character;
