import { useState, useEffect } from "react";
import axios from "axios";
import Select from "react-select";

import SpellItem from "./SpellItem";
import classes from "./SpellList.module.css";
import Card from "../UI/Card";

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

const SpellList = (props) => {
  const [spells, setSpells] = useState([]);
  const [error, setError] = useState(null);
  const [spellLevel, setSpellLevel] = useState(-1);

  const changeHandler = (selectedLevel) => {
    setSpellLevel(selectedLevel.value);
    // console.log(selectedLevel.value)
  };

  const fetchSpellsHandler = async () => {
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
  };

  useEffect(() => {
    fetchSpellsHandler();
  }, []);

  return (
    <div>
      <section className={classes.spells}>
        <Select options={options} onChange={changeHandler} />
        <Card>
          <ul>
            {spells.map((spellData) => {
              const { level, index, name } = spellData;
              if (spellLevel === -1) {
                return <SpellItem key={index} name={name} level={level} />;
              } else if (spellLevel === level) {
                return <SpellItem key={index} name={name} level={level} />;
              }
            })}
          </ul>
        </Card>
        {error}
      </section>
    </div>
  );
};

export default SpellList;
