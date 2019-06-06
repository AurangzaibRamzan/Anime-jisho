import React, { Component } from 'react';

import AnimeSlider from './AnimeSlider';
import { MainScreenView, LabelText, BackgroundImage, DiscoverLabel } from './styles';

export default class MainScreen extends Component {
  render() {
    const { popularAnime, highlyAnticipated, highestRated, allTimePopular, navigation } = this.props;
    return (
      <MainScreenView>
        <BackgroundImage imageStyle={{ opacity: 0.1 }} source={require('../../../assets/images/logo.png')} >
          <LabelText> Anime Jisho </LabelText>
          <DiscoverLabel onPress={()=>navigation.navigate('PopularAnime')}> Popular Anime >>> </DiscoverLabel>
          <AnimeSlider AnimeObj={popularAnime} navigation={navigation} />
          <DiscoverLabel onPress={()=>navigation.navigate('HighlyAnticipated')}> Highly Anticipated Anime >>> </DiscoverLabel>
          <AnimeSlider AnimeObj={highlyAnticipated} navigation={navigation} />
          <DiscoverLabel onPress={()=>navigation.navigate('HighestRated')}> Highest Rated Anime >>> </DiscoverLabel>
          <AnimeSlider AnimeObj={highestRated} navigation={navigation}/>
          <DiscoverLabel onPress={()=>navigation.navigate('AllTimePopular')}> All Time Popular >>> </DiscoverLabel>
          <AnimeSlider AnimeObj={allTimePopular} navigation={navigation} />

        </BackgroundImage>
      </MainScreenView>
    )
  }
}
