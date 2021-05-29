import React from "react";
import styles from "../styles/login.module.css";

import { Icons } from "./staticUtilities";

export default function Login() {
  return (
    <>
      <div className={styles.wrapper}>
        <form className={styles.loginWrap}>
          <h2 className={styles.title}>Sign-in</h2>
          <label for="username" className={styles.lblUsername}>
            <span style={{ color: "red" }}>*</span> Username
          </label>
          <br />
          <input type="username" name="username" id="username" required className={styles.username} />
          <br />
          <label for="password" className={styles.lblPass}>
            <span style={{ color: "red" }}>*</span> Password
          </label>
          <br />
          <input type="password" name="password" id="password" required className={styles.pass} />

          {/* Add login button  */}

          <br />
          <br />
          <p className={styles.register}>Sign-up?</p>
          <p className={styles.resetPass}>Forgot Password?</p>
          <button className={styles.withGoogle}>
            <Icons.Google size="27" /> &nbsp; Login with Google
          </button>
          <div className={styles.close}>
            <Icons.Close size="20" />
          </div>
        </form>
      </div>
    </>
  );
}
