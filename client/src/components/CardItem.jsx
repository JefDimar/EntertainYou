import React from "react";
import { Button, Card, Icon, Image } from "semantic-ui-react";
import { favoritesVar } from "../graphql/vars"
// import { useMutation, gql } from "@apollo/client";

// const DELETE_MOVIES = gql`
//   mutation deleteMovie {
//     deleteMovie(id)
//   }
// `;

export default function CardItem(props) {
  // const [deleteItem, { data }] = useMutation(DELETE_MOVIES);
  function handleFavorite() {
    const existingFavorites = favoritesVar()

    const newData = {
      _id: props.movies._id,
      title: props.movies.title,
      overview: props.movies.overview,
      popularity: props.movies.popularity,
      tags: props.movies.tags,
      poster_path: props.movies.poster_path,
    }

    favoritesVar([newData, ...existingFavorites])
  }

  return (
    <>
      <Card color="blue">
        <Image
          src={`https://image.tmdb.org/t/p/w500${props.data.poster_path}`}
        />
        <Card.Content>
          <Card.Header>{props.data.title}</Card.Header>
          <Card.Meta>
            <span>{props.data.popularity}</span>
          </Card.Meta>
          <Card.Description>{props.data.overview}</Card.Description>
        </Card.Content>
        <Card.Content extra>
          <p>
            <Icon name="star" />
            {props.data.tags.join(" | ")}
          </p>
          <Button.Group floated="left">
            <Button color="yellow" icon>
              <Icon name="pencil" />
            </Button>
            <Button
              color="red"
              icon
              // onClick={deleteItem({ id: props.data.id })}
            >
              <Icon name="trash" />
            </Button>
            <Button color="pink" icon onClick={handleFavorite}>
              <Icon name="like" />
            </Button>
          </Button.Group>
        </Card.Content>
      </Card>
    </>
  );
}
