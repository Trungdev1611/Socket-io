import { AvatarInfo } from "./AvatarInfo";
import React from "react";
import ListItemUser from "./ListItem";
import Media from "./Media";

const UserChat = () => {
  return (
    <>
      <AvatarInfo />
      <ListItemUser />
      <Media />
    </>
  );
};
export default UserChat;
