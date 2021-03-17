import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import { Button, Card, Icon, Image, Popup } from "semantic-ui-react";
import { favoritesVar } from "../graphql/vars";
import Swal from "sweetalert2";
import { useMutation } from "@apollo/client";
import { GET_DATA_MOVIESSERIES, DELETE_MOVIES } from "../graphql/index"

export default function CardItem(props) {
  // eslint-disable-next-line
  const [deleteItem, { data }] = useMutation(DELETE_MOVIES);
  const location = useLocation();

  function handleFavorite() {
    const existingFavorites = favoritesVar();

    const newData = {
      _id: props.data._id,
      title: props.data.title,
      overview: props.data.overview,
      popularity: props.data.popularity,
      tags: props.data.tags,
      poster_path: props.data.poster_path,
    };

    favoritesVar([newData, ...existingFavorites]);

    Swal.fire({
      position: "top-end",
      title: "Success Add to Favorite",
      showConfirmButton: false,
      timer: 2000,
    });
  }
  function handleDelete() {
    Swal.fire({
      title: 'Do you want to delet movies',
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: `Save`,
      denyButtonText: `Don't save`,
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire('Saved!', '', 'success')
        deleteItem({
          variables: { id: props.data._id},
          refetchQueries: [{ query: GET_DATA_MOVIESSERIES }]
        })
      } else if (result.isDenied) {
        Swal.fire('Changes are not saved', '', 'info')
      }
    })
  }
  return (
    <>
      <Card color="blue">
        <NavLink to={`/details/${props.data._id}`}>
          <Image
            src={`https://image.tmdb.org/t/p/w500${props.data.poster_path}`}
          />
        </NavLink>
        <Card.Content>
          <Card.Header>{props.data.title}</Card.Header>
        </Card.Content>
        {location.pathname === "/favorite" ? (
          ""
        ) : (
          <Card.Content extra>
            <Button.Group floated="left">
              <Popup
                content="Edit"
                trigger={
                  <Button color="yellow" icon>
                    <Icon name="pencil" />
                  </Button>
                }
              />
              <Popup
                content="Delete"
                trigger={
                  <Button color="red" icon onClick={handleDelete}>
                    <Icon name="trash" />
                  </Button>
                }
              />
              <Popup
                content="Add to Favorite"
                trigger={
                  <Button color="pink" icon onClick={handleFavorite}>
                    <Icon name="like" />
                  </Button>
                }
              />
            </Button.Group>
          </Card.Content>
        )}
      </Card>
    </>
  );
}
