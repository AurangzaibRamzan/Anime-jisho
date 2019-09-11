import React from 'react';
import PropTypes from 'prop-types';
import { IconWrapper, IconView, TextWrapper } from './styles';

const TabIcons = ({
  iconName,
  tintColor,
}) => {
  const TextShow = iconName === 'SearchAnime';
  return (
    <IconWrapper>
      <IconView color={tintColor} size={TextShow ? 30 : 19} name={iconName} />
      {TextShow && <TextWrapper textColor={tintColor} >{'Search Anime'}</TextWrapper>}
    </IconWrapper>
  );
};

TabIcons.propTypes = {
  iconName: PropTypes.string,
  tintColor: PropTypes.string,
};

export default TabIcons;
