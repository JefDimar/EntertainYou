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
  Divider,
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
              <Card>
                <Card.Content>
                  <Card.Header>{data.findMovie.title}</Card.Header>
                </Card.Content>
                <Card.Description>{data.findMovie.overview}</Card.Description>
                <Card.Description>{data.findMovie.popularity}</Card.Description>
                <Card.Description>{data.findMovie.tags}</Card.Description>
              </Card>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>
    </>
  );
}
