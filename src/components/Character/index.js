import React, { Component } from 'react';
import { View, TouchableOpacity, RefreshControl } from 'react-native';
import { get, isEmpty } from 'lodash';
import Loading from '../../widget/Loading';
import Image from '../../widget/Image';
import Icon from '../../widget/Icon';
import NetWorkError from '../../widget/NetworkError';

import { MainScreenView, LabelText, BackgroundImage, CoverLabel } from './styles';

export default class Character extends Component {
  refetchDataList = () => this.props.CharacterDetails.refetch();

  render() {
    const { CharacterDetails, navigation } = this.props;
    if (CharacterDetails.networkStatus === 8)
      return <MainScreenView
        refreshControl={
          <RefreshControl
            refreshing={CharacterDetails.networkStatus === 4}
            onRefresh={this.refetchDataList}
          />
        }
      > <NetWorkError /></MainScreenView>
    if (CharacterDetails.loading) return <Loading style={{ flex: 1, backgroundColor: '#004f4f' }} />;
    const details = get(CharacterDetails, 'Character.description', '');
    const CharacterImage = get(CharacterDetails, 'Character.image.large', 'https://i.pinimg.com/474x/11/da/6c/11da6c29f4ad4236431d0f45ac47c2c2.jpg');
    const name = get(CharacterDetails, 'Character.name.first', '') + ` ${get(CharacterDetails, 'Character.name.last', '') ? get(CharacterDetails, 'Character.name.last', '') : ''}`;
    const nameNative = get(CharacterDetails, 'Character.name.native', '');
    return (
      <MainScreenView
        refreshControl={
          <RefreshControl
            refreshing={CharacterDetails.networkStatus === 4}
            onRefresh={this.refetchDataList}
          />}>
        <BackgroundImage imageStyle={{ opacity: 0.1 }} source={CharacterImage ? { uri: CharacterImage } : require('../../../assets/images/logo.png')} >
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Icon style={{ marginLeft: 20, marginTop: 5 }} color="#fff" name="left-arrow" size={30} />
          </TouchableOpacity>
          <LabelText>{name}</LabelText>
          <LabelText>{nameNative}</LabelText>
          <View >
            <Image style={{ alignSelf: 'center' }} source={{ uri: CharacterImage }} size={300} />
          </View>
          <CoverLabel>{details}</CoverLabel>
        </BackgroundImage>
      </MainScreenView>
    )
  }
}
