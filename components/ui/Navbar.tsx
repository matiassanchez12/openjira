import React from "react";
import NextLink from "next/link";

import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import { AppBar, IconButton, Link, Toolbar, Typography } from "@mui/material";

import { UIContext } from "../../context/ui";

export const Navbar = () => {
  const { openSideMenu } = React.useContext(UIContext);

  return (
    <AppBar position="sticky">
      <Toolbar>
        <IconButton size="large" edge="start" onClick={openSideMenu}>
          <MenuOutlinedIcon />
        </IconButton>

        <NextLink href="/">
          <Link underline="none" color="white" sx={{ cursor: "pointer" }}>
            <Typography variant="h6">OpenJira</Typography>
          </Link>
        </NextLink>
      </Toolbar>
    </AppBar>
  );
};
