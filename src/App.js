import { Fragment } from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import Select from "react-select";

import classes from "./App.module.css";
import Header from "./components/Header/Header";
import SpellList from "./components/Spells/SpellList";
import Card from "./components/UI/Card";

const options = [
  { value: -1, label: "All" },
  { value: 0, label: "Cantrip" },
  { value: 1, label: "1" },
  { value: 2, label: "2" },
  { value: 3, label: "3" },
  { value: 4, label: "4" },
  { value: 5, label: "5" },
  { value: 6, label: "6" },
  { value: 7, label: "7" },
  { value: 8, label: "8" },
  { value: 9, label: "9" },
];

const App = () => {
  const [spells, setSpells] = useState([]);
  const [error, setError] = useState(null);
  const [spellLevel, setSpellLevel] = useState(-1);
  const [isLoading, setIsLoading] = useState(false);

  const changeHandler = (selectedLevel) => {
    setSpellLevel(selectedLevel.value);
  };

  const fetchSpellsHandler = async () => {
    setIsLoading(true);
    setError(null);
    try {
      const arrayOfSpells = await axios.get(
        "https://www.dnd5eapi.co/api/spells"
      );

      const arrayOfPromises = await Promise.allSettled(
        arrayOfSpells.data.results.map((spellData) => {
          return axios.get(`https://www.dnd5eapi.co${spellData.url}`);
        })
      );

      setSpells(
        arrayOfPromises.map((spellData) => {
          return spellData.value.data;
          
        })
      );
    } catch (error) {
      setError(error.message);
    }
    setIsLoading(false);
  };

  useEffect(() => {
    fetchSpellsHandler();
  }, []);

  

  return (
    <div
      className={classes.style}
      style={{
        backgroundImage: `url(https://c4.wallpaperflare.com/wallpaper/106/109/184/dungeons-and-dragons-jedd-chevrier-dungeons-and-dragons-curse-of-strahd-tabletop-role-playing-game-in-the-fantasy-genre-hd-wallpaper-preview.jpg)`,
        backgroundAttachment: "fixed",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        minHeight: "100vh",
      }}
    >
      <Fragment>
        <Header />
        <main className={classes.test}>
          <section className={classes.spells}>
            <Select options={options} onChange={changeHandler} />
            <Card>
              {!isLoading && <SpellList props={spells} />}
              {isLoading && <p>Loading...</p>}
            </Card>
            {error}
          </section>
        </main>
      </Fragment>
    </div>
  );
};

export default App;
