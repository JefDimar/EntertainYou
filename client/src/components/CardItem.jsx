import React from "react";
import { Card, Icon, Image } from "semantic-ui-react";

export default function CardItem(props) {
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
          <Card.Content extra>
            <a>
              <Icon name="star" />
              {props.movies.tags.join(' | ')}
            </a>
          </Card.Content>
        </Card.Content>
      </Card>
    </>
  );
}
