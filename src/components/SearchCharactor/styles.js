import styled from 'styled-components/native';
import Text from '../../widget/Text';

export const MainWrapperView = styled.View`
  backgroundColor: #004f4f;
  flexDirection: row;
  paddingHorizontal: 15;
  paddingVertical: 5;
  borderBottomColor: #ff8f1f;
  borderBottomWidth: 0.5;
`;

export const TextWrapper = styled.View`
  flexDirection: column;
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

