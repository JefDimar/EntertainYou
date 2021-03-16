import React from "react";
import { useReactiveVar } from "@apollo/client";
import { favoritesVar } from "../graphql/vars";
import { Card, Container, Header } from "semantic-ui-react";
import CardItem from "../components/CardItem"

export default function FavoritePage() {
  const favorites = useReactiveVar(favoritesVar);

  console.log(favorites);
  return (
    <div>
      <Container>
        <Header size="huge" dividing>Favorites</Header>
        <Card.Group itemsPerRow={4}>
          {
            favorites.map(data => {
              return <CardItem data={data} key={data._id} />
            })
          }
        </Card.Group>
      </Container>
    </div>
  );
}
