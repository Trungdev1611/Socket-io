import React, { useEffect } from "react";
import MessageItem from "./MessageItem";
import { useRef } from "react";
const MessageAll = ({ listMessage }) => {
  const bottomRefMsg = useRef(null);

  let img2 =
    "https://thumbs.dreamstime.com/b/l-ombre-pendillent-coiffure-courte-portrait-de-femme-aux-cheveux-et-les-ongles-manucur%C3%A9s-violets-blonds-maquillage-beaut%C3%A9-le-178637985.jpg";
  let img1 =
    "https://thumbs.dreamstime.com/b/beautiful-girl-curly-haired-girl-photo-your-design-attractive-girl-concept-avatar-social-network-beautiful-girl-curly-haired-108148727.jpg";
  const scrollToBottom = () => {
    bottomRefMsg.current?.scrollIntoView({ behavior: "smooth" });
  };
  useEffect(() => {
    if (bottomRefMsg.current) {
      scrollToBottom();
    }
  }, [listMessage]);
  return (
    <div className="box-chat">
      {listMessage.length > 0 &&
        listMessage.map((item, index) => {
          return (
            <MessageItem
              key={Math.random()}
              img={item.username ? img1 : img2}
              owner={Boolean(item.username)}
              text={item.message}
            />
          );
        })}
      <div className="scrollbottom" ref={bottomRefMsg}></div>
    </div>
  );
};

export default MessageAll;
