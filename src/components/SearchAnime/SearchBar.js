import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { debounce } from 'lodash';

import {
  MainScreenView,
  BackgroundImage,
  LabelText,
  SearchBarWrapper,
  TextInputWrapper,
  ButtonIcon,
  ButtonText,
  IconWrapper,
} from './styles';

const SearchAnime = ({
  handleInputChange,
  title,
}) => {
  const [value, setValue] = useState('');

  const handleText = (text) => {
    setValue(text);
    debounce(() => {
      handleInputChange(text);
    }, 500)();
  };

  const backgroundImageStyle = { opacity: 0.1 };

  return (
    <MainScreenView>
      <BackgroundImage
        imageStyle={backgroundImageStyle}
        source={require('../../../assets/images/logo.png')}
      >
        <LabelText>{title || 'Search Anime'}</LabelText>
        <SearchBarWrapper>
          <TextInputWrapper
            value={value}
            onChangeText={handleText}
            placeholder={'Search here'}
            placeholderTextColor='#fff'
          />
          <ButtonIcon onPress={() => handleInputChange(value)}>
            <ButtonText>{'Otaku'}</ButtonText>
            <IconWrapper
              name='search'
              color='#fff'
              size={10}
            />
          </ButtonIcon>
        </SearchBarWrapper>
      </BackgroundImage>
    </MainScreenView>
  );
};

SearchAnime.propTypes = {
  handleInputChange: PropTypes.func,
  title: PropTypes.string,
};

export default SearchAnime;
