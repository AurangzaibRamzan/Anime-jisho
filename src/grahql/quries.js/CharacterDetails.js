import gql from 'graphql-tag';

export const CharacterDetails = gql`
query($id: Int){
  Character(id: $id){
    name {
      first
      last
      native
    }
    image {
      large
      medium
    }
    description
  }
}
`;

export default CharacterDetails;
