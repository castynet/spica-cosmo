import React from "react";
import styles from "../styles/frontPage.module.css";

export default function frontPage() {
  const s = styles;

  return (
    <>
      <div className={s.wrapper}>
        <p className={s.introText}>the finest talent across Kenya</p>
        <button className={s.button}>See the Talent</button>
        <div>
          <button className={s.button}>Login</button>
          <button className={s.button}>Signup</button>
        </div>
      </div>
    </>
  );
}
