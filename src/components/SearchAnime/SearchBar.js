import React, { Component } from 'react';
import { debounce } from 'lodash';

import Icon from '../../widget/Icon';
import {
  MainScreenView,
  BackgroundImage,
  LabelText,
  SearchBarWrapper,
  TextInputWrapper,
  ButtonIcon,
  ButtonText,
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
    
    
  }
  render() {
    const { title, handleInputChange } = this.props;
    const { value } = this.state;
    return (
      <MainScreenView>
        <BackgroundImage imageStyle={{ opacity: 0.1 }} source={require('../../../assets/images/logo.png')} >
          <LabelText>{title || 'Search Anime'}</LabelText>
          <SearchBarWrapper>
            <TextInputWrapper
              value={value}
              onChangeText={this.handleText}
              placeholder={'Search here'}
              placeholderTextColor='#fff'
            />
            <ButtonIcon onPress={() => handleInputChange(value)}>
              <ButtonText>Otaku</ButtonText>
              <Icon name='search' color='#fff' size={10} style={{ alignSelf: 'center', marginLeft: 5 }} />
            </ButtonIcon>
          </SearchBarWrapper>
        </BackgroundImage>
      </MainScreenView>
    )
  }
}
