import React from "react";
import styles from "../styles/frontPage.module.css";

import PageSwitch from "./pageSwitch";
import { Icons } from "./staticUtilities";
import { SwitchPage } from "./engine";

export default function frontPage() {
  const s = styles;

  return (
    <>
      <div className={s.wrapper}>
        <p className={s.introText}>showcasing the finest talent across Kenya</p>
        <button
          onClick={SwitchPage}
          className={`${s.button} ${s.homeButtonBig}`}
        >
          See the Talent
        </button>
        <div>
          <button className={`${s.button} ${s.homeButtonNormal}`}>
            Sign-in &nbsp;
            <Icons.Lock size="23" />
          </button>
          <button className={`${s.button} ${s.homeButtonSignUp}`}>
            Sign-up &nbsp;
            <Icons.LockOpen size="23" />
          </button>
        </div>
      </div>
      <PageSwitch />
    </>
  );
}
