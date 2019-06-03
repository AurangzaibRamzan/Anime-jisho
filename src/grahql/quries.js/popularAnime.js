import gql from 'graphql-tag';

export const popularAnime = gql`
query($perPage: Int, $page : Int){
  Page(perPage: $perPage, page: $page) {
    media(type: ANIME, seasonYear: 2019, status: RELEASING, isAdult: false, sort: POPULARITY_DESC) {
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

export default popularAnime;
