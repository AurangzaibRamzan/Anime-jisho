import gql from 'graphql-tag';

export const AnimeDetails = gql`
query($id: Int){
  Media(type: ANIME, id: $id) {
    id
    title {
      english
      native
    }
    description
    chapters
    status
    startDate {
      year
      month
      day
    }
    coverImage {
      medium
      large
    }
    genres

    characters{
      nodes{
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
    tags{
      id
      name
      rank
    }
    startDate{
      day
      year
    }
    format
    trailer {
      id
      site
      thumbnail
    }
    bannerImage
    season

    averageScore
    episodes

  }
}
`;

export default AnimeDetails;
