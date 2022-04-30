import "./SpellItem.css";

const SpellItem = (props) => {
  return (
    <li>
      <div>
        <h3 class="spell">{props.name}</h3>
        <div class="level">Level - {props.level}</div>
        <p>{props.description}</p>
      </div>
    </li>
  );
};

export default SpellItem;
