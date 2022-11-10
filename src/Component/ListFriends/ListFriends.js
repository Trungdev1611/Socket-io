import { Box } from "@mui/material";
import React from "react";
import Friend from "./Friend";
import UseFetchData from "../../Hooks/UseFetchData";
const ListFriends = () => {
  const [data, isLoading] = UseFetchData("https://retoolapi.dev/zPOUTx/data");
  if (isLoading) {
    return <h3>Loading...</h3>;
  }
  return (
    <div
      style={{ overflow: "auto", maxHeight: "100%" }}
      className="listfriends"
    >
      <Box sx={{}}>
        {data.length > 0 &&
          data.map((friendItem, index) => {
            return (
              <Friend
                key={friendItem.id}
                username={friendItem.username}
                message={friendItem.desc}
              />
            );
          })}
      </Box>
    </div>
  );
};

export default ListFriends;
