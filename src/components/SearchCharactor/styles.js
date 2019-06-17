import styled from 'styled-components/native';

import Image from '../../widget/Image';
import Text from '../../widget/Text';

export const MainWrapperView = styled.TouchableOpacity`
  background-Color: #004f4f;
  flex-Direction: row;
  paddingHorizontal: 15;
  paddingVertical: 5;
  border-Bottom-Color: #ff8f1f;
  border-Bottom-Width: 0.5;
`;

export const TextWrapper = styled.View`
  flex-Direction: column;
  justify-content:center;
  align-content: center;
`;

export const CoverLabel = styled(Text).attrs({
  fontWeight: 'bold',
})`
  padding-top: 5;
  font-size: 13;
  padding-left: 3;
  line-height: 13;
  color:#D8D8D8;
`;

export const CharacterImage = styled(Image)`
  border-Radius: 35;
`;

export const MainView = styled.View`
  background-Color: #004f4f; 
  flex: 1;
`;
