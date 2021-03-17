import React from 'react'
import { Header, Segment, Grid, Image, Card, Rating } from "semantic-ui-react"

export default function DetailItemMovie(props) {
  return (
    <>
      <Header size="huge">{props.data.findMovie.title}</Header>
      <Segment>
        <Grid>
          <Grid.Row columns={2}>
            <Grid.Column>
              <Image
                src={`https://image.tmdb.org/t/p/w500${props.data.findMovie.poster_path}`}
              />
            </Grid.Column>
            <Grid.Column>
              <Card fluid>
                <Card.Content>
                  <Card.Header as="h1">Synopsis</Card.Header>
                  <Card.Description as="h3">
                    {props.data.findMovie.overview}
                  </Card.Description>
                </Card.Content>
                <Card.Content>
                  <Card.Header as="h1">Popularity</Card.Header>
                  <Rating
                    icon="start"
                    rating={props.data.findMovie.popularity}
                    maxRating={10}
                  />
                </Card.Content>
                <Card.Content>
                  <Card.Header as="h1">Tags</Card.Header>
                  <Card.Description>{props.data.findMovie.tags}</Card.Description>
                </Card.Content>
              </Card>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>
    </>
  )
}
