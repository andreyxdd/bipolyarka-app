import React from "react";
import { useMediaQuery } from "@react-hook/media-query";
// import styled from "@emotion/styled";
import {
  AppBar,
  Box,
  Toolbar,
  Typography,
  IconButton,
  Tooltip,
  Badge,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { GiDiamondHard, GiShoppingCart } from "react-icons/gi";
import NavLink from "./NavLink";
import ClientOnlyDiv from "./ClientOnlyDiv";
import { useContextTypes } from "../customHooks/useContextTypes";

const navLinks = [
  { navLinkId: "About us", scrollToId: "aboutUsSection" },
  { navLinkId: "Catalouge", scrollToId: "MerchSection" },
];

const Navbar: React.FC = () => {
  const matches: boolean = useMediaQuery("only screen and (min-width: 750px)");

  const { items } = useContextTypes();

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar style={{ position: "fixed" }}>
        <Toolbar>
          <GiDiamondHard size="2.5em" />
          <Typography variant="h6" component="div" sx={{ ml: 2 }}>
            <a
              href="https://www.instagram.com/biopolyarka.a/"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              BIOPOLYARKA
            </a>
          </Typography>

          <ClientOnlyDiv style={{ float: "none", marginLeft: "auto" }}>
            {matches && (
              <>
                {navLinks.map(({ navLinkId, scrollToId }) => (
                  <NavLink
                    key={`${navLinkId}-${scrollToId}`}
                    navLinkId={navLinkId}
                    scrollToId={scrollToId}
                  />
                ))}
              </>
            )}
          </ClientOnlyDiv>

          <ClientOnlyDiv style={{ marginLeft: "auto", paddingTop: "5px" }}>
            <Tooltip title="Корзина">
              <IconButton size="large" color="inherit" aria-label="cart">
                <Badge badgeContent={items.length} color="secondary" showZero>
                  <GiShoppingCart size="1.2em" />
                </Badge>
              </IconButton>
            </Tooltip>

            {!matches && (
              <Tooltip title="Меню">
                <IconButton
                  size="large"
                  edge="end"
                  color="inherit"
                  aria-label="menu"
                  sx={{ ml: 2 }}
                >
                  <MenuIcon />
                </IconButton>
              </Tooltip>
            )}
          </ClientOnlyDiv>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Navbar;
