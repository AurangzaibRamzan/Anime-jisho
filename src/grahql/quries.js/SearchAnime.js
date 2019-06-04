import gql from 'graphql-tag';

export const SearchAnime = gql`
query($perPage: Int, $page : Int,$search : String){
  Page(perPage: $perPage, page: $page) {
    media(type: ANIME,search: $search ,sort: POPULARITY_DESC) {
      id
      title {
        english
        native
      }
      
      coverImage {
        medium
      }
      startDate{
        day
        year
        month
      }
      format
      season
      
      averageScore
      episodes
    }
  }
}
`;

export default SearchAnime;
