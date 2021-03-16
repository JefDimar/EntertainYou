import React from 'react'
import { useQuery, gql } from "@apollo/client"
import { Dimmer, Loader, Container, Header, Card } from 'semantic-ui-react'
import CardItem from '../components/CardItem'

const GET_SERIES = gql`
  query entertainme {
    response {
      series {
        _id
        title
        overview
        popularity
        poster_path
      }
    }
  }
`

export default function SeriePage() {
  const { loading, error, data} = useQuery(GET_SERIES)

  if (loading) {
    return (
      <Dimmer active>
        <Loader size="massive">Please wait...</Loader>
      </Dimmer>
    )
  } else if (error) {
    return <div>{error.message}</div>
  }
  return (
    <Container>
        <Header size="huge" dividing>Series</Header>
        <Card.Group itemsPerRow={4}>
          {
            data.response.series.map((data) => {
              return <CardItem data={data} key={data._id}/>
            })
          }
        </Card.Group>
      </Container>
  )
}
