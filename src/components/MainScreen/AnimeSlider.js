import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { get } from 'lodash';

import NetWorkError from '../../widget/NetworkError';
import Image from '../../widget/Image';

import {
  CoverLabel,
  CoverTouchable,
  LoadingPage,
  FlatListWrapper,
} from './styles';

export default class SliderAnime extends Component {
  renderCard = ({ item }) => {
    const { navigation } = this.props;

    const cover = get(item, 'coverImage.medium', 'https://data.whicdn.com/images/153106009/large.jpg');
    const titleEng = get(item, 'title.english', '');
    const titleNative = get(item, 'title.native', '');
    const id = get(item, 'id');

    return (<CoverTouchable onPress={() => id && navigation.navigate('Anime', { id })} >
      <Image source={{ uri: cover }} width={100} height={135} />
      {titleEng && <CoverLabel>{`${titleEng.slice(0, 25)}${titleEng.length > 25 ? '...' : ''}`}</CoverLabel>}
      {titleNative && <CoverLabel>{`${titleNative.slice(0, 25)}${titleNative.length > 25 ? '...' : ''}`}</CoverLabel>}
    </CoverTouchable>);
  }

  render() {
    const { AnimeObj } = this.props;
    const { loading, networkStatus, Page } = AnimeObj;
    if (networkStatus === 8) { return (<NetWorkError />); }
    if (loading) return (<LoadingPage color={'#fff'} />);
    const media = get(Page, 'media', []);
    return (
      <FlatListWrapper
        data={media}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        renderItem={this.renderCard}
        keyExtractor={(item, index) => (index.toString())}
      />
    );
  }
}

SliderAnime.prototypes = {
  AnimeObj: PropTypes.object,
  navigation: PropTypes.object,
};
