import classes from "./Ilya.module.css";
import { useState } from "react";
import { namess } from "../../../../public/data/data";
const img = "images/Илюха.png";

export default function Ilya() {
  const names = namess.ilya;
  const [Name, setName] = useState(names[0]);
  function Naming() {
    const ind = names.indexOf(Name);
    console.log(ind);
    if (ind + 1 === names.length) {
      setName(names[0]);
    } else {
      setName(names[ind + 1]);
    }
  }
  return (
    <section className={classes.FriendBlock}>
      <h1 className={classes.name} onClick={() => Naming()}>
        {Name}
      </h1>

      <img src={img} alt="Илюха" className={classes.photo} />
    </section>
  );
}
