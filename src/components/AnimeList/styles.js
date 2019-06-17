import styled from 'styled-components/native';
import { TouchableOpacity } from 'react-native';

import Text from '../../widget/Text';
import Icon from '../../widget/Icon';


export const MainScreenView = styled.ScrollView`
  background-color : ${props => props.theme.color.pirmary};
  paddingVertical: 10;
  paddingBottom: 40;
`;

export const BackgroundImage = styled.ImageBackground`
  width: 100%; 
  height: 100%;
`;

export const CoverLabel = styled(Text).attrs({
  fontWeight: 'normal',
})`
  padding-top: 5;
  font-size: 13;
  padding-left: 3;
  line-height: 13;
  color:#D8D8D8;
`;
export const LabelText = styled(Text).attrs({
  fontWeight: 'bold',
  fontSize: 20,
})`
  letter-spacing: 0.2;
  paddingHorizontal : 20;
  color: #fff;
  font-style: italic;
  padding-bottom: 20;
`;

export const TouchableCover = styled(TouchableOpacity)`
  background-Color: #004f4f;
  flex-Direction: row;
  paddingHorizontal: 20;
  paddingVertical: 5; 
  border-Bottom-Color: #ff8f1f; 
  border-Bottom-Width: 0.5; 
`;

export const LabelWrappper = styled.View`
  flex-Direction: column;
`;

export const MainWrapper = styled.View`
  flex: 1; 
  background-Color: #004f4f;
`;

export const IconWrapper = styled(Icon)`
  margin-Left: 20;
  margin-Top: 20;
  margin-Bottom: 20;
`;
