import styled from 'styled-components/native';
import Normalization from './normalize';

export const TextWrapper = styled.Text`
  letter-spacing: ${props => (props.letterSpacing || 0)};
  ${props => ((props.fontColor || props.color) ? { color: (props.fontColor || props.color) } : null)};
  
  font-style: ${() => (/* props.fontWeight || */ 'normal')};
  font-size: ${props => Normalization(props.fontSize || props.theme.fontSize)};
  font-weight: ${(props) => {
    if (props.fontWeight === 'light') return 200;
    if (props.fontWeight === 'semiLight') return 300;
    if (props.fontWeight === 'normal') return 400;
    if (props.fontWeight === 'semiBold') return 600;
    if (props.fontWeight === 'bold') return 700;
    return 400;
  }};
`;

export const TextWrapperAndroid = styled.Text`
  letter-spacing: ${props => (props.letterSpacing || 0)};
  ${props => ((props.fontColor || props.color) ? { color: (props.fontColor || props.color) } : null)};
  
  font-style: ${() => (/* props.fontWeight || */ 'normal')};
  font-size: ${props => Normalization(props.fontSize || props.theme.fontSize)};
  font-weight: ${(props) => {
    if (props.fontWeight === 'normal') return 'normal';
    if (props.fontWeight === 'bold') return 'bold';
    return 'normal';
  }};
`;
