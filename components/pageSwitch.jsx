import React from "react";
import styles from "../styles/pageSwitch.module.css";

export default function () {
  const s = styles;

  return (
    <>
      <div data-layer="0" className={s.layer}>
        <div data-layer="1" className={`${s.layer} ${s.layerOne}`}></div>
        <div data-layer="2" className={`${s.layer} ${s.layerTwo}`}></div>
      </div>
    </>
  );
}
