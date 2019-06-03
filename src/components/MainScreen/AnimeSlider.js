import React, { Component } from 'react';
import { View, FlatList } from 'react-native';
import { get } from 'lodash';

import ActivityIndicator from '../../widget/Loading';
import NetWorkError from '../../widget/NetworkError';
import Image from '../../widget/Image';

import { CoverLabel } from './styles';
export default class SliderAnime extends Component {
  renderCard = ({ item, index }) => {
    const cover = get(item, 'coverImage.medium', 'https://data.whicdn.com/images/153106009/large.jpg');
    const titleEng = get(item, 'title.english', '');
    const titleNative = get(item, 'title.native', '');
    return <View style={{ width: 95, marginRight: 10 }}>
      <Image source={{ uri: cover }} width={100} height={135} />
      {titleEng && <CoverLabel>{`${titleEng.slice(0, 25)}${titleEng.length > 25 ? '...' : ''}`}</CoverLabel>}
      {titleNative && <CoverLabel>{`${titleNative.slice(0, 25)}${titleNative.length > 25 ? '...' : ''}`}</CoverLabel>}
    </View>

  }

  render() {
    const { AnimeObj } = this.props;
    const { loading, networkStatus, Page } = AnimeObj;
    if (networkStatus === 8) return <NetWorkError />
    if (loading) return <ActivityIndicator style={{height: 205}} color={'#fff'} />
    const media = get(Page, 'media', []);
    return (
      <FlatList
        data={media}
        horizontal={true}
        contentContainerStyle={{ paddingLeft: 20 }}
        showsHorizontalScrollIndicator={false}
        renderItem={this.renderCard}
        keyExtractor={(item, index) => (index.toString())}
      />
    )
  }
}
