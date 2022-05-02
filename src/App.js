import { Fragment } from "react";

import classes from "./App.module.css";
import Header from "./components/Header/Header";
import SpellList from "./components/Spells/SpellList";

const App = () => {
  return (
    <Fragment>
      <Header />
      <main className={classes.test}>
        <SpellList />
      </main>
    </Fragment>
  );
};

export default App;
