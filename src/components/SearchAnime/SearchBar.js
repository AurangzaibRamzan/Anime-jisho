import React, { Component } from 'react';
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

export default class SearchAnime extends Component {
  state = {
    value: '',
  };

  handleText = (text) => {
    const { handleInputChange } = this.props;
    this.setState({
      value: text,
    });
    debounce(() => {
      handleInputChange(text);
    }, 500)();
  };


  render() {
    const { title, handleInputChange } = this.props;
    const { value } = this.state;
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
              onChangeText={this.handleText}
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
  }
}

SearchAnime.prototypes = {
  handleInputChange: PropTypes.func,
  title: PropTypes.string,
};
