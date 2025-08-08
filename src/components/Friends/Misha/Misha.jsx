import classes from "./Misha.module.css";
import { useState } from "react";
import { namess } from "../../../../public/data/data.js";
const img = "images/Мишаня.png";

export default function Misha() {
  const names = namess.misha;
  const [Name, setName] = useState(names[0]);
  function Naming() {
    const ind = names.indexOf(Name);
    console.log(ind);
    if (ind + 1 === names.length) {
      setName(names[0]);
    } else {
      setName(names[ind + 1]);
    }
    console.log(Name);
  }
  return (
    <section className={classes.FriendBlock}>
      <h1 className={classes.name} onClick={() => Naming()}>
        {Name}
      </h1>

      <img src={img} alt="" className={classes.photo} />
    </section>
  );
}
