import styled from 'styled-components/native';

import Loading from '../../widget/Loading';
import Text from '../../widget/Text';
import Icon from '../../widget/Icon';
import Image from '../../widget/Image';

export const MainScreenView = styled.ScrollView`
  background-color : ${props => props.theme.color.pirmary};
  paddingVertical: 10;
`;

export const BackgroundImage = styled.ImageBackground`
  width: 100%; 
  height: 100%;
`;

export const CoverLabel = styled(Text).attrs({
  fontWeight: 'normal',
})`
  padding-top: 5;
  padding-bottom: 50;
  font-size: 13;
  marginHorizontal: 20;
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
  align-self: center;
`;

export const LoadingWrapper = styled(Loading)`
  flex: 1; 
  background-Color: #004f4f ;
`;

export const IconWrapper = styled(Icon)`
  margin-Left: 20; 
  margin-Top: 5;
`;

export const ImageWrapper = styled(Image)`
  align-self: center;
`;
