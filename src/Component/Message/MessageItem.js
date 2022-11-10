import { Avatar } from "@mui/material";
import React from "react";

const MessageItem = ({ owner, img, text }) => {
  return (
    <div className={owner ? "msg-item owner" : "msg-item"}>
      <div className={owner ? "msg-text owner" : "msg-text other"}>{text}</div>
      <span className="msg-avatar">
        <Avatar alt="Remy Sharp" src={img} />
      </span>
    </div>
  );
};

export default MessageItem;
