import React from "react";
import { Segment, Menu } from "semantic-ui-react"

export default function Navbar() {
  return (
    <>
      <Segment inverted>
        <Menu inverted pointing secondary>
          <Menu.Item as="a" name="Home" />
          <Menu.Item as="a" name="Movie" />
          <Menu.Item as="a" name="Serie" />
          <Menu.Item as="a" name="Favorite" />
        </Menu>
      </Segment>
    </>
  );
}
