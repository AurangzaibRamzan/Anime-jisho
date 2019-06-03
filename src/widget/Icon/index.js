/**
 *
 * Icon
 *
 */

import React from 'react';
import PropTypes from 'prop-types';

import findIconSrc from './icons';
import { StyledIconImage } from './styles';

function Icon(props) {
  const { name, ...restProps } = props;
  if (!name) return null;

  const iconSrc = findIconSrc(name);
  if (!iconSrc) return null;
  return (
    <StyledIconImage {...restProps} source={iconSrc} resizeMode="contain" />
  );
}

Icon.propTypes = {
  name: PropTypes.string.isRequired,
};

Icon.defaultProps = {
  size: 20,
};

export default Icon;
