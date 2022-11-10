import React from "react";
import { Divider, Icon, Paper, Stack, Typography } from "@mui/material";
import CallOutlinedIcon from "@mui/icons-material/CallOutlined";
import MissedVideoCallOutlinedIcon from "@mui/icons-material/MissedVideoCallOutlined";
export default function HeaderMsg({}) {
  return (
    <Stack
      flexDirection={"row"}
      justifyContent="space-between"
      alignItems={"center"}
      sx={{
        padding: "15px 20px",
      }}
    >
      <Typography
        variant="h5"
        sx={{
          fontWeight: "bold",
        }}
      >
        ElizaBeth NelSon
      </Typography>
      <Stack
        flexDirection={"row"}
        alignItems={"center"}
        sx={{
          gap: "20px",
        }}
      >
        <div className="buttonRadius">
          <Icon color="primary">
            <CallOutlinedIcon />
          </Icon>
        </div>
        <div className="buttonRadius">
          <Icon color="primary">
            <MissedVideoCallOutlinedIcon />
          </Icon>
        </div>
      </Stack>
    </Stack>
  );
}
