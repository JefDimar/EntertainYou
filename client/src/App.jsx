import "./App.css";
import { Container, Form, Button } from "semantic-ui-react";
import { useMutation, gql } from "@apollo/client";
import { useState } from "react";
import { Switch, Route } from "react-router-dom";
import Navigation from "./components/Navbar";
import HomePage from "./views/HomePage";
import MoviePage from "./views/MoviePage";
import SeriePage from "./views/SeriePage";
import FavoritePage from "./views/FavoritePage";

// const CREATE_MOVIES = gql`
//   mutation createMovie($input: MovieInput) {
//     createMovie(input: $input) {
//       _id
//       title
//       overview
//       poster_path
//       popularity
//       tags
//     }
//   }
// `;
function App() {
  // const [createMovie, { data: newMovie }] = useMutation(CREATE_MOVIES);

  // const [newData, setNewData] = useState({
  //   title: "",
  //   overview: "",
  //   popularity: 0,
  //   poster_path: "",
  //   tags: [],
  // });
  // function handleForm(e) {
  //   const value = e.target.value;
  //   setNewData({
  //     ...newData,
  //     [e.target.name]: value,
  //   });
  // }
  // function addMovie(e) {
  //   e.preventDefault();
  //   console.log("kepencet", newData);
  //   // createMovie({ variables: { input: newData } });
  // }
  return (
    <div className="App">
      <Navigation />
      <Container>
        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>
          <Route path="/movie">
            <MoviePage />
          </Route>
          <Route path="/serie">
            <SeriePage />
          </Route>
          <Route path="/favorite">
            <FavoritePage />
          </Route>
          <Route path="/details/:id"></Route>
        </Switch>

        {/* <Form>
          <Form.Group>
            <Form.Field>
              <label>Title:</label>
              <input
                name="title"
                placeholder="Title movie/series..."
                onChange={handleForm}
              />
            </Form.Field>
            <Form.TextArea
              name="overview"
              label="Overview:"
              placeholder="Write your synopsis here..."
              onChange={handleForm}
            />
            <Form.Field>
              <label>Popularity:</label>
              <input
                name="popularity"
                type="number"
                min="0"
                max="10"
                step="0.1"
                onChange={handleForm}
              />
            </Form.Field>
            <Form.Field>
              <label>Poster Image:</label>
              <input
                name="poster_path"
                placeholder="Link Url for poster..."
                onChange={handleForm}
              />
            </Form.Field>
            <Form.Field>
              <label>Tags:</label>
              <select name="tags" id="" onChange={handleForm}>
                <option value="Romance">Romance</option>
                <option value="Action">Action</option>
                <option value="Horor">Horor</option>
                <option value="Animation">Animation</option>
              </select>
            </Form.Field>
            <Button color="black" onClick={addMovie}>
              Submit
            </Button>
          </Form.Group>
        </Form> */}
      </Container>
    </div>
  );
}

export default App;
