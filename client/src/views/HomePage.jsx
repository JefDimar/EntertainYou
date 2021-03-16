import React from "react";
import { Container, Card, Dimmer, Loader, Header } from "semantic-ui-react";
import { useQuery, gql } from "@apollo/client";
import CardItem from "../components/CardItem";

const GET_DATA_MOVIESSERIES = gql`
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
      }
    }
  }
`;
export default function HomePage() {
  const { loading, error, data } = useQuery(GET_DATA_MOVIESSERIES);

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
        <Header size="huge" dividing>Movies</Header>
        <Card.Group itemsPerRow={4}>
          {data.response.movies.map((data) => {
            return <CardItem data={data} key={data._id} />;
          })}
        </Card.Group>

        <Header size="huge" dividing>Series</Header>
        <Card.Group itemsPerRow={4}>
          {data.response.series.map((data) => {
            return <CardItem data={data} key={data._id} />;
          })}
        </Card.Group>
      </Container>
    </>
  );
}
