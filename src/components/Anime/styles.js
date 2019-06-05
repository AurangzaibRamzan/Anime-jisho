import styled from 'styled-components/native';
import Text from '../../widget/Text';

export const MainScreenView = styled.ScrollView`
  background-color : ${props => props.theme.color.pirmary};
  paddingVertical: 10;
`;

export const BackgroundImage = styled.ImageBackground`
  width: 100%; 
  height: 100%;
  paddingHorizontal: 20;
  paddingVertical: 20 ;
`;

export const CoverLabel = styled(Text).attrs({
  fontWeight: 'normal',
})`
  padding-top: ${props => props.paddingTop || 5};;
  font-size: 16;
  padding-left: ${props => props.paddingLeft || 10};
  line-height: 17;
  color:#D8D8D8;
`;

export const DecriptionLabel = styled(Text).attrs({
  fontWeight: 'bold',
})`
  padding-top: ${props => props.paddingTop || 5};;
  font-size: 16;
  padding-left: ${props => props.paddingLeft || 10};
  line-height: 17;
  color:#D8D8D8;
`;

export const Label = styled(Text).attrs({
})`
  color: #fff;
  backgroundColor: #ff8f1f; 
  paddingVertical: 4;
  font-size: 13;
  paddingHorizontal: 4;
  marginVertical: 5; 
  marginHorizontal: 5; 
  borderRadius: 8;
`;