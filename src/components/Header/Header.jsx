import classes from "./Header.module.css";
import { useState } from "react";

export default function Header() {
  const [HeaderClass, setHeaderClass] = useState(classes.header);
  window.addEventListener("scroll", () => {
    const scrollY = window.scrollY;
    if (scrollY <= 20) {
      setHeaderClass(classes.header);
    } else {
      setHeaderClass(`${classes.header} ${classes.fixed}`);
    }
  });

  return (
    <header className={HeaderClass}>
      <h1 className={classes.head}>Абалдуи</h1>
    </header>
  );
}

// window.addEventListener("scroll", () => {
//   const scrollY = window.scrollY || window.pageYOffset;
//   console.log("Позиция скролла:", scrollY);
// });
