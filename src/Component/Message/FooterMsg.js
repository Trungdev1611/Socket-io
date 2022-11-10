import React, { useEffect, useState } from "react";
import SendIcon from "@mui/icons-material/Send";

const FooterMsg = ({ socket, getMsg }) => {
  const [message, setMessage] = useState("");

  function handleSubmit(e) {
    if (message) {
      getMsg(message);
      console.log("mes:::", 2222);
      socket.emit("sendDataClient", { username: "trung", message });
      setMessage("");
    }
  }
  function handleChange(e) {
    setMessage(e.target.value);
  }
  function handleKeyDown(event) {
    if (event.key === "Enter") {
      handleSubmit();
    }
  }
  return (
    <div className="footerMsg">
      <input
        type="text"
        className="footerMsg-input"
        placeholder="Type your message..."
        onChange={handleChange}
        onKeyDown={handleKeyDown}
        value={message}
      />
      <span className="iconsend">
        <SendIcon
          className="buttonsend"
          color="primary"
          onClick={handleSubmit}
        />
      </span>
    </div>
  );
};

export default FooterMsg;
