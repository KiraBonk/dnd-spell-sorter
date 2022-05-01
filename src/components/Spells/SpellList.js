import { useState, useEffect, useCallback } from "react";
import axios from "axios";

import SpellItem from "./SpellItem";
import classes from "./SpellList.css";
import Card from "../UI/Card";

const SpellList = (props) => {
  const [spells, setSpells] = useState([]);
  const [error, setError] = useState(null);

  const fetchSpellsHandler = useCallback(async () => {
    setError(null);
    try {
      const arrayOfSpells = await axios.get(
        "https://www.dnd5eapi.co/api/spells"
      );

      const arrayOfPromises = await Promise.allSettled(
        arrayOfSpells.data.results.map((spellData) => {
          return axios.get(`https://dnd5eapi.co${spellData.url}`, {
            headers: {
                'Origin': '*'
            }
        });
        })
      );

      console.log(arrayOfPromises);
    //   const data2 = arrayOfPromises.map(async (foo) => {
    //     return await foo.value.json();
    //   });

      //console.log(data2);

      const transformedSpells = arrayOfSpells.data.map((spellData) => {
        return (
          <SpellItem
            key={spellData.index}
            name={spellData.name}
            // url={spellData.url}
          />
        );
      });

      setSpells(transformedSpells);
    } catch (error) {
      setError(error.message);
    }
  }, []);

  useEffect(() => {
    fetchSpellsHandler();
  }, [fetchSpellsHandler]);

  return (
    <div>
      <select>
        <option value="all">All</option>
        <option value="cantrip">Cantrip</option>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
        <option value="6">6</option>
        <option value="7">7</option>
        <option value="8">8</option>
        <option value="9">9</option>
      </select>
      <section className={classes.spells}>
        <Card>
          <ul>{spells}</ul>
        </Card>
        {error}
      </section>
    </div>
  );
};

export default SpellList;
