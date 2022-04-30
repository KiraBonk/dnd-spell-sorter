import SpellItem from "./SpellItem";
import "./SpellList.css";
import Card from "../UI/Card";

const DUMMY_SPELLS = [
  {
    id: "s1",
    name: "Eldritch Blast",
    level: "Cantrip",
    description:
      "A beam of crackling energy streaks toward a creature within range. Make a ranged spell attack against the target. On a hit, the target takes 1d10 force damage. The spell creates more than one beam when you reach higher levels: two beams at 5th level, three beams at 11th level, and four beams at 17th level. You can direct the beams at the same target or at different ones. Make a separate attack roll for each beam.",
  },
  {
    id: "s2",
    name: "Fireball",
    level: "3",
    description:
      "A bright streak flashes from your pointing finger to a point you choose within range and then blossoms with a low roar into an explosion of flame. Each creature in a 20-foot-radius sphere centered on that point must make a Dexterity saving throw. A target takes 8d6 fire damage on a failed save, or half as much damage on a successful one. The fire spreads around corners. It ignites flammable objects in the area that aren't being worn or carried. At Higher Levels. When you cast this spell using a spell slot of 4th level or higher, the damage increases by 1d6 for each slot level above 3rd.",
  },
];

const SpellList = () => {
  const spellsList = DUMMY_SPELLS.map((spell) => (
    <SpellItem
      key={spell.id}
      id={spell.id}
      name={spell.name}
      level={spell.level}
      description={spell.description}
    />
  ));

  return (
    <section class="spells">
      <Card>
        <ul>{spellsList}</ul>
      </Card>
    </section>
  );
};

export default SpellList;
