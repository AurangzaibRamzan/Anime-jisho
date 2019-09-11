import React from 'react';
import PropTypes from 'prop-types';
import { RefreshControl } from 'react-native';

import AnimeSlider from './AnimeSlider';
import {
  MainScreenView,
  LabelText,
  BackgroundImage,
  DiscoverLabel,
  ClickableLabel,
} from './styles';

const MainScreen = ({
  popularAnime,
  highlyAnticipated,
  highestRated,
  allTimePopular,
  navigation,
}) => {
  const refetchDataList = () => {
    popularAnime.refetch();
    highlyAnticipated.refetch();
    highestRated.refetch();
    allTimePopular.refetch();
  };

  const refershing = popularAnime.networkStatus === 4
    || highlyAnticipated.networkStatus === 4
    || highestRated.networkStatus === 4
    || allTimePopular.networkStatus === 4;

  const backgroundImageStyleing = { opacity: 0.1 };

  return (
    <MainScreenView
      refreshControl={
        <RefreshControl
          refreshing={refershing}
          onRefresh={refetchDataList}
        />
      }>
      <BackgroundImage imageStyle={backgroundImageStyleing} source={require('../../../assets/images/logo.png')} >
        <LabelText> Anime Jisho </LabelText>
        <DiscoverLabel onPress={() => navigation.navigate('PopularAnime')}> Popular Anime<ClickableLabel> {'>>>'} </ClickableLabel>  </DiscoverLabel>
        <AnimeSlider AnimeObj={popularAnime} navigation={navigation} />
        <DiscoverLabel onPress={() => navigation.navigate('HighlyAnticipated')}> Highly Anticipated Anime<ClickableLabel> {'>>>'} </ClickableLabel></DiscoverLabel>
        <AnimeSlider AnimeObj={highlyAnticipated} navigation={navigation} />
        <DiscoverLabel onPress={() => navigation.navigate('HighestRated')}> Highest Rated Anime<ClickableLabel> {'>>>'} </ClickableLabel></DiscoverLabel>
        <AnimeSlider AnimeObj={highestRated} navigation={navigation} />
        <DiscoverLabel onPress={() => navigation.navigate('AllTimePopular')}> All Time Popular<ClickableLabel> {'>>>'} </ClickableLabel></DiscoverLabel>
        <AnimeSlider AnimeObj={allTimePopular} navigation={navigation} />
      </BackgroundImage>
    </MainScreenView>
  );
};

MainScreen.propTypes = {
  popularAnime: PropTypes.object,
  highlyAnticipated: PropTypes.object,
  highestRated: PropTypes.object,
  allTimePopular: PropTypes.object,
  navigation: PropTypes.object,
};

export default MainScreen;
