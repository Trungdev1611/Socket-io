import React from "react";
import { Divider } from "@mui/material";
import { useState, useEffect } from "react";
import HeaderMsg from "./HeaderMsg";
import MessageItem from "./MessageItem";
import io from "socket.io-client";
import MessageAll from "./MessageAll";
import FooterMsg from "./FooterMsg";

const Message = () => {
  const [listMessage, setListMessage] = useState([]);
  const socket = io.connect("http://localhost:3001");

  useEffect(() => {
    socket.on("sendDataServer", (data) => {
      console.log("datanhanlai", data);
      setListMessage([...listMessage, data]);
    });
    // Remove event listener on component unmount
    return () => socket.off("sendDataServer");
  }, [socket, listMessage]);
  console.log("message", listMessage);

  function getMsg(message) {
    setListMessage([...listMessage, { message }]);
  }
  return (
    <div className="msg">
      <HeaderMsg />
      <Divider />
      <MessageAll listMessage={listMessage} />
      <Divider />
      <FooterMsg socket={socket} getMsg={getMsg} />
    </div>
  );
};

export default Message;
