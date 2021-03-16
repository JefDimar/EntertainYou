import React from "react";
import { useQuery, gql } from "@apollo/client";
import { Card, Container, Dimmer, Header, Loader } from "semantic-ui-react";
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

export default function MoviePage() {
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
    <div>
      <Container>
        <Header size="huge" dividing>Movies</Header>
        <Card.Group itemsPerRow={4}>
          {
            data.response.movies.map((data) => {
              return <CardItem data={data} key={data._id}/>
            })
          }
        </Card.Group>
      </Container>
    </div>
  );
}
