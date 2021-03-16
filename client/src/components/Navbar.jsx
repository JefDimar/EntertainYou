import React from "react";
import { Segment, Menu } from "semantic-ui-react";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <>
      <Segment inverted>
        <Menu inverted pointing secondary>
          <NavLink to="/">
            <Menu.Item as="a" name="Home" />
          </NavLink>
          <NavLink to="/movie">
            <Menu.Item as="a" name="Movie" />
          </NavLink>
          <NavLink to="/serie">
            <Menu.Item as="a" name="Serie" />
          </NavLink>
          <NavLink to="/favorite">
            <Menu.Item as="a" name="Favorite" />
          </NavLink>
        </Menu>
      </Segment>
    </>
  );
}
