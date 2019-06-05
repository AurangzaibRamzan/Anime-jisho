import React, { Component } from 'react';
import { get, isEmpty } from 'lodash';
import { View, FlatList, TouchableOpacity } from 'react-native';

import Image from '../../widget/Image';
import Loading from '../../widget/Loading';
import Icon from '../../widget/Icon';
import {
  MainScreenView,
  BackgroundImage,
  CoverLabel,
  DecriptionLabel,
  Label,
} from './styles';

export default class Anime extends Component {

  renderCharacter = ({ item, index }) => {
    const { navigation } = this.props;
    const name = get(item, 'name.first', '') + ` ${get(item, 'name.last', '') ? get(item, 'name.last', '') : ''}`;
    const nameNative = get(item, 'name.native', '');
    const id = get(item, 'id', '');
    const coverImage = get(item, 'image.medium', 'https://i.pinimg.com/474x/11/da/6c/11da6c29f4ad4236431d0f45ac47c2c2.jpg')
    return <TouchableOpacity onPress={() => id && navigation.navigate('Character', { id: id })} style={{ width: 100, marginRight: 20 }}>
      <Image style={{ borderRadius: 3 }} source={{ uri: coverImage }} width={100} height={150} />
      {name && <CoverLabel paddingLeft={2}>{`${name.slice(0, 25)}`}</CoverLabel>}
      {nameNative && <CoverLabel paddingLeft={2}>{`${nameNative.slice(0, 25)}`}</CoverLabel>}
    </TouchableOpacity>
  }

  render() {
    const { AnimeDetails, navigation } = this.props;
    if (AnimeDetails.loading || isEmpty(AnimeDetails)) return <Loading style={{ flex: 1, backgroundColor: '#004f4f' }} />;
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
    return (
      <MainScreenView>
        <BackgroundImage imageStyle={{ opacity: 0.1 }} source={{ uri: bannerImage }} >
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Icon style={{ marginLeft: 0, marginTop: 5 }} color="#fff" name="left-arrow" size={30} />
          </TouchableOpacity>
          <View style={{ flexDirection: 'row', paddingTop: 20 }}>
            <Image source={{ uri: cover }} width={140} height={200} />
            <View style={{ flexDirection: 'column',width: '60%' }}>
              {titleEng && <DecriptionLabel>{titleEng}</DecriptionLabel>}
              {titleNative && <DecriptionLabel>{titleNative}</DecriptionLabel>}
              {episodes && <CoverLabel>{`Episodes: ${episodes}`}</CoverLabel>}
              {averageScore && <CoverLabel>{`Score: ${averageScore}%`}</CoverLabel>}
              {format && <CoverLabel>{`Format: ${format}`}</CoverLabel>}
              {season && <CoverLabel>{`Season: ${season}`}</CoverLabel>}
              {date && <CoverLabel>{`Starting Date: ${date}`}</CoverLabel>}
            </View>
          </View>
          <DecriptionLabel paddingTop={20} paddingLeft={0.1}>{'Description : '}</DecriptionLabel>
          <CoverLabel paddingTop={0} paddingLeft={0.1}>{`${description}`}</CoverLabel>
          <DecriptionLabel paddingTop={20} paddingLeft={0.1}>{'Genre : '}</DecriptionLabel>
          <View style={{ flexDirection: 'row' }}>
            {genres.map((item, index) =>
              <Label key={index}>{item}</Label>)
            }
          </View>
          <DecriptionLabel paddingTop={20} paddingLeft={0.1}>{'Characters : '}</DecriptionLabel>
          <FlatList
            style={{ marginVertical: 15 }}
            keyExtractor={(item, index) => index.toString()}
            data={Characters}
            showsHorizontalScrollIndicator={false}
            horizontal={true}
            renderItem={this.renderCharacter}
          />
        </BackgroundImage>
      </MainScreenView>
    )
  }
}
