
import gql from 'graphql-tag';

const isUserActive = gql`
query{
  Character(search:"naruto"){
    id
    name{
      first
      last
    }
  }
}
`;

export default isUserActive;
