import { Avatar, Typography } from "@mui/material";
import { Stack } from "@mui/system";
import React from "react";

const Media = () => {
  return (
    <div style={{ paddingLeft: "25px" }}>
      <Typography variant="h6">Media</Typography>
      <Stack flexDirection="row" sx={{ gap: "16px", marginTop: "10px" }}>
        <Avatar
          alt="Remy Sharp"
          width="24px"
          height="24px"
          src="https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8YXZhdGFyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
        />
        <Avatar
          width="24px"
          height="24px"
          alt="Travis Howard"
          src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8YXZhdGFyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
        />
        <Avatar
          width="24px"
          height="24px"
          alt="Cindy Baker"
          src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8YXZhdGFyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
        />
      </Stack>
    </div>
  );
};

export default Media;
