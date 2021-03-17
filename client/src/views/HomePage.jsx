import React, { useState } from "react";
import {
  Container,
  Card,
  Dimmer,
  Loader,
  Header,
  Button,
  Modal,
  Form,
} from "semantic-ui-react";
import { useQuery, useMutation } from "@apollo/client";
import CardItem from "../components/CardItem";
import { GET_DATA_MOVIESSERIES, CREATE_MOVIES, CREATE_SERIES } from "../graphql/index"

export default function HomePage() {
  const { loading, error, data } = useQuery(GET_DATA_MOVIESSERIES);
  const [open, setOpen] = useState(false);
  // eslint-disable-next-line
  const [createMovie, { data: newMovie }] = useMutation(CREATE_MOVIES);
  // eslint-disable-next-line
  const [createSerie, { data: newSerie }] = useMutation(CREATE_SERIES);

  const [newData, setNewData] = useState({
    title: "",
    overview: "",
    popularity: 0,
    poster_path: "",
    tags: [],
  });
  function handleForm(e) {
    const value = e.target.value;
    if (e.target.name === "popularity") {
      setNewData({ ...newData, popularity: parseFloat(e.target.value) });
    } else if (e.target.name === "tags") {
      setNewData({ ...newData, tags: [value] });
    } else {
      setNewData({ ...newData, [e.target.name]: value });
    }
  }
  function addMovie(e) {
    e.preventDefault();
    createMovie({
      variables: { input: newData },
      refetchQuery: [{ query: GET_DATA_MOVIESSERIES }],
    });
    setNewData({
      title: "",
      overview: "",
      popularity: 0,
      tags: [],
    });
    setOpen(false);
  }
  function addSerie(e) {
    e.preventDefault();
    createSerie({
      variables: { input: newData },
      refetchQuery: [{ query: GET_DATA_MOVIESSERIES }],
    });
    setNewData({
      title: "",
      overview: "",
      popularity: 0,
      tags: [],
    });
    setOpen(false);
  }
  // console.log(newMovie);
  // console.log(newSerie);
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
      <Container>
        <Modal
          onClose={() => setOpen(false)}
          onOpen={() => setOpen(true)}
          open={open}
          trigger={
            <Button floated="left" color="facebook">
              Add Movie
            </Button>
          }
        >
          <Modal.Header>Add Movie</Modal.Header>
          <Modal.Content>
            <Form>
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
              </Form.Group>
            </Form>
          </Modal.Content>
          <Modal.Actions>
            <Button color="black" onClick={() => setOpen(false)}>
              Nope
            </Button>
            <Button
              content="Submit"
              labelPosition="right"
              icon="checkmark"
              onClick={addMovie}
              positive
            />
          </Modal.Actions>
        </Modal>

        <Modal
          onClose={() => setOpen(false)}
          onOpen={() => setOpen(true)}
          open={open}
          trigger={
            <Button floated="left" color="facebook">
              Add Serie
            </Button>
          }
        >
          <Modal.Header>Add Serie</Modal.Header>
          <Modal.Content>
            <Form>
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
              </Form.Group>
            </Form>
          </Modal.Content>
          <Modal.Actions>
            <Button color="black" onClick={() => setOpen(false)}>
              Nope
            </Button>
            <Button
              content="Submit"
              labelPosition="right"
              icon="checkmark"
              onClick={addSerie}
              positive
            />
          </Modal.Actions>
        </Modal>
        {/* Movie */}
        <Header size="huge" dividing>
          Movies
        </Header>
        <Card.Group itemsPerRow={4}>
          {data.response.movies.map((data) => {
            return <CardItem data={data} key={data._id} />;
          })}
        </Card.Group>
        {/* Series */}
        <Header size="huge" dividing>
          Series
        </Header>
        <Card.Group itemsPerRow={4}>
          {data.response.series.map((data) => {
            return <CardItem data={data} key={data._id} />;
          })}
        </Card.Group>
      </Container>
    </>
  );
}
