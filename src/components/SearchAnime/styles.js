import styled from 'styled-components/native';
import Text from '../../widget/Text';

export const MainScreenView = styled.ScrollView`
  background-color : ${props => props.theme.color.pirmary};
  paddingVertical: 10;
  paddingBottom: 40;
`;

export const AnimeTouchble = styled.TouchableOpacity`
  backgroundColor: #004f4f;
  flexDirection: row;
  paddingHorizontal: 20; 
  paddingVertical: 5; 
  borderBottomColor: #ff8f1f;
  borderBottomWidth: 0.5;
`;

export const MainWrapper = styled.View`
  backgroundColor: #004f4f;
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
  flexDirection: row;
  justify-content: space-between;
  paddingHorizontal: 5;
  paddingVertical: 5;
  backgroundColor: #000;
  marginHorizontal: 20;
  borderRadius: 30;
  marginTop: 20; 
`;

export const TextInputWrapper = styled.TextInput`
  color: #fff;
  marginLeft: 10;
  borderBottomColor: #ff8f1f;
  borderBottomWidth: 1;
  padding: 0;
  fontSize: 13;
  width: 75%;
`;

export const ButtonIcon = styled.TouchableOpacity`
  justify-content: center;
  flexDirection: row;
  backgroundColor: #ff8f1f;
  paddingVertical: 7;
  paddingHorizontal: 10;
  borderRadius: 20;
`;

export const ButtonText = styled(Text)`
  color: #fff; 
  textAlign: center;
`;
