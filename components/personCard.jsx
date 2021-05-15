import React from "react";
import styles from "../styles/personCard.module.css";
import Avatar from "./avatar";

export default function personCards() {
  const s = styles;

  return (
    <>
      <div className={s.wrapper}>
        <Avatar className={s.avatar} alt="person avatar" />
        <h3>James Justin</h3>
        R - 8.5 <br /> E - 7.6 <br /> S - 3.4 <br />C - 9.1
      </div>
    </>
  );
}
