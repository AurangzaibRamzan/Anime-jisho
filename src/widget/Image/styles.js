import styled from 'styled-components';
import { Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

export const ImageWrapper = styled.Image`
  position: ${props => props.position || 'relative'};
  width: ${props => props.width || 100};
  height: ${props => props.height || 100};
`;

export const ImageBackgroundWrapper = styled.Image`
  position: absolute;
  width: ${width};
  height: 100%;
`;
