import React from "react";
import styles from "../styles/frontPageCards.module.css";

import Card from "./personCard";
import SideBar from "./sideBar";

export default function frontPageCards() {
  const s = styles;

  return (
    <>
      <div className={s.wrapper}>
        <div className={s.cardSection}>
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </div>
    </>
  );
}
