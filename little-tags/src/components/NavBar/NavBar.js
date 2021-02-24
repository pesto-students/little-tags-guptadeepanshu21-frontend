import React from "react";
import Grid from "@material-ui/core/Grid";
import SearchSharpIcon from "@material-ui/icons/SearchSharp";
import FavoriteBorderSharpIcon from "@material-ui/icons/FavoriteBorderSharp";
import ShoppingBasketSharpIcon from "@material-ui/icons/ShoppingBasketSharp";
import PersonOutlineSharpIcon from "@material-ui/icons/PersonOutlineSharp";
import Menu from "../Menu/Menu";
import './NavBar.css';

const NavBar = () => {
  return (
    <div>
      <Grid container className="first-nav">
        <Grid item sm={3}></Grid>
        <Grid item sm={5}>
          <div>Clothes for a big planet</div>
        </Grid>
        <Grid item sm={4}>
          <span>
            <SearchSharpIcon />
          </span>
          <span>
            <Menu title="EN" />
          </span>
        </Grid>
      </Grid>
      <Grid container>
        <Grid item sm={3}>
          Little Tags
        </Grid>
        <Grid item sm={6}>
          <span>Men</span>
          <span>Women</span>
          <span>Kids</span>
          <span>Brands</span>
        </Grid>
        <Grid item sm={3}>
          <span>
            <PersonOutlineSharpIcon />
          </span>
          <span>
            <FavoriteBorderSharpIcon />
          </span>
          <span>
            <ShoppingBasketSharpIcon />
          </span>
        </Grid>
      </Grid>
    </div>
  );
};

export default NavBar;
