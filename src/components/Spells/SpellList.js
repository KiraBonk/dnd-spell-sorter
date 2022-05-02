import SpellItem from "./SpellItem";
import classes from "./SpellList.module.css";

const SpellList = (props) => {
  return (
    <div className={classes.spells}>
      <ul>
        {props.spells.map((spell) => (
          <SpellItem key={spell.index} name={spell.name} level={spell.level} />
        ))}
      </ul>
    </div>
  );
};

export default SpellList;
