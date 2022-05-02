import { Fragment } from "react";

import classes from "./App.module.css";
import Header from "./components/Header/Header";
import SpellList from "./components/Spells/SpellList";

const App = () => {
  return (
    <div
      className={classes.style}
      style={{
        backgroundImage: `url(https://c4.wallpaperflare.com/wallpaper/106/109/184/dungeons-and-dragons-jedd-chevrier-dungeons-and-dragons-curse-of-strahd-tabletop-role-playing-game-in-the-fantasy-genre-hd-wallpaper-preview.jpg)`,
        backgroundAttachment: "fixed",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        minHeight: "100vh"
      }}
    >
      <Fragment>
        <Header />
        <main className={classes.test}>
          <SpellList />
        </main>
      </Fragment>
    </div>
  );
};

export default App;
