/**
 *
 * Text
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { isString } from 'lodash';
import { Platform } from 'react-native';
import { TextWrapperAndroid, TextWrapper } from './styles';

const Text = ({
  children,
  textTransform,
  ...restProps
}) => {
  const TextStyling = Platform.OS === 'ios' ? TextWrapper : TextWrapperAndroid;
  let textToDisplay = children;
  if (isString(children) && !!textTransform) {
    if (textTransform === 'uppercase') textToDisplay = children.toUpperCase();
    if (textTransform === 'lowercase') textToDisplay = children.toLowerCase();
  }

  return <TextStyling {...restProps}>{textToDisplay}</TextStyling>;
};

Text.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
  textTransform: PropTypes.oneOf(['uppercase', 'lowercase', 'normal']),
};

Text.defaultProps = {
  textTransform: 'normal',
};

export default Text;
