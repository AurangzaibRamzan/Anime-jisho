import styled from 'styled-components/native';

import Icon from '../../widget/Icon';
import Text from '../../widget/Text';

export const MainScreenView = styled.ScrollView`
  background-color : ${props => props.theme.color.pirmary};
  paddingVertical: 10;
  padding-Bottom: 40;
`;

export const AnimeTouchble = styled.TouchableOpacity`
  background-Color: #004f4f;
  flex-Direction: row;
  paddingHorizontal: 20; 
  paddingVertical: 5; 
  border-Bottom-Color: #ff8f1f;
  border-Bottom-Width: 0.5;
`;

export const MainWrapper = styled.View`
  background-Color: #004f4f;
  flex:1;
`;

export const BackgroundImage = styled.ImageBackground`
  width: 100%; 
  height: 100%;
`;

export const LabelText = styled(Text).attrs({
  fontWeight: 'bold',
  fontSize: 20,
})`
  letter-spacing: 0.2;
  paddingHorizontal : 20;
  color: #fff;
  font-style: italic;
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


export const SearchBarWrapper = styled.View`
  flex-Direction: row;
  justify-content: space-between;
  paddingHorizontal: 5;
  paddingVertical: 5;
  background-Color: #000;
  marginHorizontal: 20;
  border-Radius: 30;
  margin-Top: 20; 
`;

export const TextInputWrapper = styled.TextInput`
  color: #fff;
  margin-Left: 10;
  border-Bottom-Color: #ff8f1f;
  border-Bottom-Width: 1;
  padding: 0;
  font-Size: 13;
  width: 75%;
`;

export const ButtonIcon = styled.TouchableOpacity`
  justify-content: center;
  flex-Direction: row;
  background-Color: #ff8f1f;
  paddingVertical: 7;
  paddingHorizontal: 10;
  border-Radius: 20;
`;

export const ButtonText = styled(Text)`
  color: #fff; 
  text-Align: center;
`;

export const LabelWrapper = styled.View`
  flex-direction:column;
`;

export const IconWrapper = styled(Icon)`
  align-Self: center;
  margin-Left: 5;
`;
