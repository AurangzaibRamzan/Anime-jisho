import styled from 'styled-components/native';
import { TouchableOpacity, FlatList } from 'react-native';

import Image from '../../widget/Image';
import Text from '../../widget/Text';
import Loading from '../../widget/Loading';
import Icon from '../../widget/Icon';


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

export const ImageWrapper = styled(Image)`
  border-Radius: 3;
`;

export const TouchableCard = styled(TouchableOpacity)`
  width: 100; 
  margin-Right: 20;
`;

export const LoadingWrapper = styled(Loading)`
  flex: 1; 
  backgroundColor: #004f4f;
`;

export const IconWrapper = styled(Icon)`
  marginLeft: 0; 
  marginTop: 5;
`;


export const ImageOuterWrapper = styled.View`
  flexDirection: row;
  paddingTop: 20;
`;

export const LableWrapper = styled.View`
  flexDirection: column;
  width: 60%;
`;

export const GenreWrapper = styled.View`
  flexDirection: row;
`;


export const FlatListWrapper = styled(FlatList)`
  marginVertical: 15;
`;
