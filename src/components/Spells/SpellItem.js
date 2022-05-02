import classes from "./SpellItem.module.css";

const SpellItem = (props) => {
  return (
    <li className={classes.spell}>
      <div>
        <h3>{props.name}</h3>
        <p>Level {props.level}</p>
      </div>
    </li>
  );
};

export default SpellItem;
