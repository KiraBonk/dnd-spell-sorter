import { Fragment } from "react";
import classes from "./Header.module.css";

const Header = () => {
  return (
    <Fragment>
      <header className={classes.header}>Kira's DnD 5e Spell Sorter</header>
    </Fragment>
  );
};

export default Header;
