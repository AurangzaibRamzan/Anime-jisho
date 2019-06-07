import React, { Component } from 'react';
import { RefreshControl } from 'react-native';
import AnimeSlider from './AnimeSlider';
import { MainScreenView, LabelText, BackgroundImage, DiscoverLabel,ClickableLabel } from './styles';

export default class MainScreen extends Component {
  refetchDataList = () => {
    const { popularAnime, highlyAnticipated, highestRated, allTimePopular } = this.props;
    popularAnime.refetch();
    highlyAnticipated.refetch();
    highestRated.refetch();
    allTimePopular.refetch();
  }
  render() {
    const { popularAnime, highlyAnticipated, highestRated, allTimePopular, navigation } = this.props;
    const refershing = popularAnime.networkStatus === 4 || highlyAnticipated.networkStatus === 4 || highestRated.networkStatus === 4 ||
      allTimePopular.networkStatus === 4;
    return (
      <MainScreenView
        refreshControl={
          <RefreshControl
            refreshing={refershing}
            onRefresh={this.refetchDataList}
          />
        }>
        <BackgroundImage imageStyle={{ opacity: 0.1 }} source={require('../../../assets/images/logo.png')} >
          <LabelText> Anime Jisho </LabelText>
          <DiscoverLabel onPress={() => navigation.navigate('PopularAnime')}> Popular Anime<ClickableLabel> >>> </ClickableLabel>  </DiscoverLabel>
          <AnimeSlider AnimeObj={popularAnime} navigation={navigation} />
          <DiscoverLabel onPress={() => navigation.navigate('HighlyAnticipated')}> Highly Anticipated Anime<ClickableLabel> >>> </ClickableLabel></DiscoverLabel>
          <AnimeSlider AnimeObj={highlyAnticipated} navigation={navigation} />
          <DiscoverLabel onPress={() => navigation.navigate('HighestRated')}> Highest Rated Anime<ClickableLabel> >>> </ClickableLabel></DiscoverLabel>
          <AnimeSlider AnimeObj={highestRated} navigation={navigation} />
          <DiscoverLabel onPress={() => navigation.navigate('AllTimePopular')}> All Time Popular<ClickableLabel> >>> </ClickableLabel></DiscoverLabel>
          <AnimeSlider AnimeObj={allTimePopular} navigation={navigation} />

        </BackgroundImage>
      </MainScreenView>
    )
  }
}
