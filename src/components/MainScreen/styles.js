import styled from 'styled-components/native';
import { FlatList } from 'react-native';

import Text from '../../widget/Text';
import ActivityIndicator from '../../widget/Loading';

export const MainScreenView = styled.ScrollView`
  background-color : ${props => props.theme.color.pirmary};
  flex:1;
  paddingVertical: 10;
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


export const DiscoverLabel = styled(Text).attrs({
  fontWeight: 'bold',
  fontSize: 15,
})`
  padding-top: 25;
  padding-bottom: 20;
  paddingHorizontal : 20;
  letter-spacing: 0.2;
  color: #D8D8D8;
  font-style: italic;
`;

export const ClickableLabel = styled(Text).attrs({
  fontSize: 16,
})`
  color: #265FBC;
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

export const CoverTouchable = styled.TouchableOpacity`
   width: 95; 
   marginRight: 10;
`;

export const LoadingPage = styled(ActivityIndicator)`
  height: 205; 
`;

export const FlatListWrapper = styled(FlatList)`
  paddingLeft: 20;
`;
