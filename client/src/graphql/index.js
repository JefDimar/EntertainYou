import { gql } from "@apollo/client"

export const GET_DATA_MOVIESSERIES = gql`
  query entertainme {
    response {
      movies {
        _id
        title
        overview
        popularity
        poster_path
        tags
      }
      series {
        _id
        title
        overview
        popularity
        poster_path
        tags
      }
    }
  }
`;

export const CREATE_MOVIES = gql`
  mutation createMovie($input: MovieInput) {
    createMovie(input: $input) {
      _id
      title
      overview
      poster_path
      popularity
      tags
    }
  }
`;

export const CREATE_SERIES = gql`
  mutation createSeries($input: SerieInput) {
    createSerie(input: $input) {
      _id
      title
      overview
      poster_path
      popularity
      tags
    }
  }
`;

export const DELETE_MOVIES = gql`
  mutation deleteMovie($id: ID) {
    deleteMovie(id: $id)
  }
`;

export const GET_DETAIL_MOVIE = gql`
  query movieDetail($id: ID) {
    findMovie(id: $id) {
      _id
      title
      overview
      poster_path
      popularity
      tags
    }
  }
`;