import React, { Component } from 'react'

import { IconWrapper, IconView, TextWrapper } from './styles';

export default class TabIcons extends Component {
  render() {
    const { iconName, tintColor } = this.props;
    const TextShow = iconName === 'SearchAnime';
    return (
      <IconWrapper>
        <IconView color={tintColor} size={TextShow ? 30 : 19} name={iconName} />
        {TextShow && <TextWrapper textColor={tintColor} >Search Anime</TextWrapper>}
      </IconWrapper>
    );
    return null
  }
}