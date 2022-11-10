import { useState } from "react";
import { io } from "socket.io-client";
import ChatContent from "./Chatv1";
const socket = io.connect("http://localhost:3001")


function ChatV1() {
    const [username, setUsername] = useState("")
    const [room, setRoom] = useState("")
  
    function joinRoom() {
      if(username && room) {
        socket.emit("join_room", room)
     
      }
    }
    return (
      <div>
     <h3>Join Chat</h3>
     <input type= "text" placeholder = "John..." onChange = {(e) => setUsername(e.target.value)}/>
     <input type= "text" placeholder = "Room ID..." onChange = {(e) => setRoom(e.target.value)}/>
     <button onClick={joinRoom}>Join Room</button> 
     <ChatContent username={username} room = {room} socket = {socket}/>
      </div>
    );
  }

  export default ChatV1