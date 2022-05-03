import classes from "./SpellItem.module.css";
import Card from "../UI/Card";

const SpellItem = (props) => {
  return (
    <Card>
      <li className={classes.spell}>
        <div>
          <h3>{props.name}</h3>
          <h4>Level {props.level}</h4>
          <p>{props.description}</p>
          <p>{props.higherlvldesc}</p>
        </div>
      </li>
    </Card>
  );
};

export default SpellItem;
