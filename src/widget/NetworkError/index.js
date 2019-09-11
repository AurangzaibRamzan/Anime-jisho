import React from 'react';

import {
  MainWrapper,
  IconWrapper,
  TextWrapper,
} from './styles';

const NetworkError = props => (
  <MainWrapper>
    <IconWrapper color='#fff' name='wifi' size={180} />
    <TextWrapper>Swipe Down to Referesh</TextWrapper>
  </MainWrapper>
);

export default NetworkError;
