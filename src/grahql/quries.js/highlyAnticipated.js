import gql from 'graphql-tag';

export const popularAnime = gql`
query($perPage: Int, $page : Int){
  Page(perPage: $perPage, page: $page) {
    media(type: ANIME, season: SUMMER, startDate_like:"2019%",sort:POPULARITY_DESC) {
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
