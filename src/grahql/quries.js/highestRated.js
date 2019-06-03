import gql from 'graphql-tag';

export const highestRated = gql`
query($perPage: Int, $page : Int){
  Page(perPage: $perPage, page: $page) {
    media(type: ANIME, sort: SCORE_DESC) {
      id
      title {
        english
        native
      }
      coverImage {
        medium
      }
      format
      episodes

    }
  }
}
`;

export default highestRated;
