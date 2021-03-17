import React from "react";
import { useParams } from "react-router-dom";
import { Card, Container, Image } from "semantic-ui-react";
// import { gql, useQuery } from "@apollo/client"

// const GET_DETAIL = gql`

// `

export default function DetailPage() {
  const { id } = useParams();
  const image = "";
  
  return (
    <>
      <p>Ini detail page id: {id}</p>
      <Container>
        <Image src={`https://image.tmdb.org/t/p/w500${image}`} />
        <Card fluid>
          <Card.Content>
            <Card.Header>Testing</Card.Header>
          </Card.Content>
          <Card.Description>
            lorem ipsum dolor sit amet, consectetur adipis
          </Card.Description>
        </Card>
      </Container>
    </>
  );
}
