import "./App.css";
import { Card, Container, Dimmer, Loader } from "semantic-ui-react";
import { useQuery, gql } from "@apollo/client";
import CardItem from "./components/CardItem";
import Navigation from "./components/Navbar";

const GET_MOVIES = gql`
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
    }
  }
`;
function App() {
  const { loading, error, data } = useQuery(GET_MOVIES);
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
    <div className="App">
      <Navigation />

      <Container>
        <h1>Testing semantic ui on new porto</h1>
        <Card.Group itemsPerRow={4}>
          {data.response.movies.map((movies) => {
            return <CardItem movies={movies} key={movies.id} />;
          })}
        </Card.Group>
      </Container>
    </div>
  );
}

export default App;
