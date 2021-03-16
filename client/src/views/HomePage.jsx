import React from "react";
import { Container, Card, Dimmer, Loader } from "semantic-ui-react";
import { useQuery, gql } from "@apollo/client";
import CardItem from "../components/CardItem";

const GET_MOVIES = gql`
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
    }
  }
`;
export default function HomePage() {
  const { loading, error, data } = useQuery(GET_MOVIES);

  if (loading) {
    return (
      <Dimmer active>
        <Loader size="massive">Please wait...</Loader>
      </Dimmer>
    );
  } else if (error) {
    return <div>{error.message}</div>;
  }
  return (
    <>
      <Container>
        <Card.Group itemsPerRow={4}>
          {data.response.movies.map((movies) => {
            return <CardItem movies={movies} key={movies.id} />;
          })}
        </Card.Group>
      </Container>
    </>
  );
}
