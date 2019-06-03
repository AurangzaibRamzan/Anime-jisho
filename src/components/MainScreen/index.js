import React, { Component } from 'react';

import AnimeSlider from './AnimeSlider';
import { MainScreenView, LabelText, BackgroundImage, DiscoverLabel, SliderWrapper } from './styles';

export default class MainScreen extends Component {
  render() {
    const { popularAnime, highlyAnticipated, highestRated, allTimePopular } = this.props;
    return (
      <MainScreenView>
        <BackgroundImage imageStyle={{ opacity: 0.2 }} source={require('../../../asserts/images/logo.png')} >
          <LabelText> Anime Jisho </LabelText>
          <DiscoverLabel> Popular Anime >>> </DiscoverLabel>
          <AnimeSlider AnimeObj={popularAnime} />
          <DiscoverLabel> Highly Anticipated Anime >>> </DiscoverLabel>
          <AnimeSlider AnimeObj={highlyAnticipated} />
          <DiscoverLabel> Highest Rated Anime >>> </DiscoverLabel>
          <AnimeSlider AnimeObj={highestRated} />
          <DiscoverLabel> All Time Popular >>> </DiscoverLabel>
          <AnimeSlider AnimeObj={allTimePopular} />


        </BackgroundImage>
      </MainScreenView>
    )
  }
}
