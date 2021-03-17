import React from "react";
import { useParams } from "react-router-dom";
import {
  Card,
  Image,
  Dimmer,
  Loader,
  Header,
  Segment,
  Grid,
  Rating,
} from "semantic-ui-react";
import { useQuery } from "@apollo/client";
import { GET_DETAIL } from "../graphql/index";

export default function DetailPage() {
  const { id } = useParams();
  const { loading, error, data } = useQuery(GET_DETAIL, { variables: { id } });

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
      <Header size="huge">{data.findMovie.title}</Header>
      <Segment>
        <Grid>
          <Grid.Row columns={2}>
            <Grid.Column>
              <Image
                src={`https://image.tmdb.org/t/p/w500${data.findMovie.poster_path}`}
              />
            </Grid.Column>
            <Grid.Column>
              <Card fluid>
                <Card.Content>
                  <Card.Header as="h1">Synopsis</Card.Header>
                  <Card.Description as="h3">
                    {data.findMovie.overview}
                  </Card.Description>
                </Card.Content>
                <Card.Content>
                  <Card.Header as="h1">Popularity</Card.Header>
                  <Rating
                    icon="start"
                    rating={data.findMovie.popularity}
                    maxRating={10}
                  />
                </Card.Content>
                <Card.Content>
                  <Card.Header as="h1">Tags</Card.Header>
                  <Card.Description>{data.findMovie.tags}</Card.Description>
                </Card.Content>
              </Card>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>
    </>
  );
}
