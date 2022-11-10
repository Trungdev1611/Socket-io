import { Avatar, Typography } from "@mui/material";
import React from "react";
export function AvatarInfo({}) {
  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Avatar
          alt="Remy Sharp"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcToM3JCO4iE-dGbyQF11FxWRU2BEUH5a0qGHw&usqp=CAU"
          sx={{
            width: 150,
            height: 150,
            margin: "20px 0 10px 0",
          }}
        />

        <Typography gutterBottom variant="h6">
          ElizaBeth NelSon
        </Typography>
        <Typography
          sx={{ fontSize: "14px", color: "gray", textAlign: "center" }}
          gutterBottom
        >
          Founder CEO, Facebook
        </Typography>
        <Typography
          sx={{ fontSize: "14px", color: "gray", textAlign: "center" }}
        >
          Bachmannity
        </Typography>
      </div>
    </>
  );
}
