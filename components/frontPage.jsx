import React from "react";
import styles from "../styles/frontPage.module.css";
import { useApp } from "./appContext";

import { Icons } from "./staticUtilities";
import { SwitchPage } from "./engine";

export default function frontPage() {
  const app = useApp();
  const s = styles;

  function handleSwitchView() {
    SwitchPage();
    // the delay waits until the switch page animation is
    // covering the screen before changing the view
    // the sweet spot is(double || +> 300) the delay value
    // in "../styles/pageSwitch.module.css" ->> .layer ->> transition delay
    setTimeout(() => app.switchHomeView(), 600);
  }

  return (
    <>
      <div className={s.wrapper}>
        <p className={s.introText}>showcasing the finest talent across Kenya</p>
        <button
          onClick={handleSwitchView}
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
    </>
  );
}
