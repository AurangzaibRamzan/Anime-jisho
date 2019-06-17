import React, { Component } from 'react';

import {
  MainWrapper,
  IconWrapper,
  TextWrapper,
} from './styles';

export default class index extends Component {
  render() {
    return (
      <MainWrapper>
        <IconWrapper color='#fff' name='wifi' size={180} />
        <TextWrapper >Swipe Down to Referesh</TextWrapper>
      </MainWrapper>
    );
  }
}
