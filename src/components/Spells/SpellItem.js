import classes from "./SpellItem.css";

const SpellItem = (props) => {
  return (
    <li>
      <div>
        <h3 className={classes.name}>{props.name}</h3>
        {/* <div className={classes.level}>Level - {props.level}</div> */}
      </div>
    </li>
  );
};

export default SpellItem;
