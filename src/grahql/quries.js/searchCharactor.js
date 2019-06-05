import gql from 'graphql-tag';

export const SearchCharactor = gql`
query($perPage: Int, $page : Int,$search : String){
  Page(perPage: $perPage, page: $page) {
    characters(sort:FAVOURITES_DESC,search:$search) {
      id
      name {
        first
        last
        native
      }
      image {
        large
        medium
      }

    }
  }
}
`;

export default SearchCharactor;
