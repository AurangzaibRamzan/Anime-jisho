import styled from 'styled-components';

import Icon from '../../widget/Icon';
import Text from '../../widget/Text';

export const IconWrapper =styled.View`
  borderColor: #004f4f;
  borderWidth: 3;
  backgroundColor: #ff8f1f;
  paddingHorizontal: 20;
  borderRadius: 40;
  paddingVertical: 20;
`;

export const IconView =styled(Icon)`
  align-self: center;
`;

export const TextWrapper =styled(Text).attrs({
  fontSize: 11,
})`
  line-height: 15;
  color: ${props =>props.textColor|| '#fff'};
  marginBottom: 6;
`;