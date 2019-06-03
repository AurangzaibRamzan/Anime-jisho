import styled from 'styled-components';

import normalize from '../Text/normalize';

const getDynamicStyles = (props) => {
  const styleObj = {};

  if (props.size || props.size === 0) {
    styleObj.width = normalize(props.size);
    styleObj.height = normalize(props.size);
  }
  if (props.width || props.width === 0) styleObj.width = normalize(props.width);
  if (props.height || props.height === 0) styleObj.height = normalize(props.height);

  if (props.color) styleObj.tintColor = props.color;
  if (props.tintColor) styleObj.tintColor = props.tintColor;
  if (props.borderBottomColor) styleObj.borderBottomColor = props.borderBottomColor;

  return styleObj;
};

export const StyledIconImage = styled.Image`
  ${props => getDynamicStyles(props)};
`;

export default {
  StyledIconImage,
};
