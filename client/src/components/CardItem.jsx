import React from "react";
import { Button, Card, Icon, Image } from "semantic-ui-react";
// import { useMutation, gql } from "@apollo/client";

// const DELETE_MOVIES = gql`
//   mutation deleteMovie {
//     deleteMovie(id)
//   }
// `;

export default function CardItem(props) {
  // const [deleteItem, { data }] = useMutation(DELETE_MOVIES);

  return (
    <>
      <Card color="blue">
        <Image
          src={`https://image.tmdb.org/t/p/w500${props.movies.poster_path}`}
        />
        <Card.Content>
          <Card.Header>{props.movies.title}</Card.Header>
          <Card.Meta>
            <span>{props.movies.popularity}</span>
          </Card.Meta>
          <Card.Description>{props.movies.overview}</Card.Description>
        </Card.Content>
        <Card.Content extra>
          <p>
            <Icon name="star" />
            {props.movies.tags.join(" | ")}
          </p>
          <Button.Group floated="left">
            <Button color="yellow" icon>
              <Icon name="pencil" />
            </Button>
            <Button
              color="red"
              icon
              // onClick={deleteItem({ id: props.movies.id })}
            >
              <Icon name="trash" />
            </Button>
            <Button color="pink" icon>
              <Icon name="like" />
            </Button>
          </Button.Group>
        </Card.Content>
      </Card>
    </>
  );
}
