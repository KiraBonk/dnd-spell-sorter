import { Fragment } from "react";

import classes from "./App.css";
import Header from "./components/Header/Header";
import SpellList from './components/Spells/SpellList'

const App = () => {
  return (
    <Fragment>
      <Header />
      <main className={classes.test}>
        <h1>test</h1>
        <SpellList />
      </main>
    </Fragment>
  );
};

export default App;
