import { Grid, Paper, Stack } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import InputField from "../Common/InputField/InputField";
import ListFriends from "../ListFriends/ListFriends";
import Message from "../Message/Message";
import Navbar from "../Navbar/Navbar";
import UserChat from "../UserChat/Userchat";

const Chatv2 = () => {
  return (
    <>
      <Navbar />
      <Grid container spacing={2}>
        <Grid
          item
          md={3}
          sx={{
            display: { sm: "none", md: "block" },
          }}
        >
          <Paper
            sx={{
              height: "100vh",
              maxWidth: "100%",
              position: "fixed",
              top: "64px",
              width: "300px",
            }}
            elevation={1}
          >
            <InputField
              type="search"
              label="Search for friends"
              variant="standard"
              sx={{
                width: "80%",
                marginBottom: "15px",
                marginLeft: "24px",
                marginRight: "30px",
              }}
            />
            <ListFriends />
          </Paper>
        </Grid>
        <Grid item md={6} className="girdxs-6" sm={9}>
          <div className="test">
            <Message />
          </div>
        </Grid>
        <Grid item xs={3} sx={{}}>
          <Paper
            elevation={1}
            sx={{
              height: "100vh",
              top: "64px",
              position: "fixed",
              width: "300px",
              right: "0",
            }}
          >
            <UserChat />
          </Paper>
        </Grid>
      </Grid>
    </>
  );
};

export default Chatv2;
