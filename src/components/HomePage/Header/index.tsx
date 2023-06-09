import styles from "./index.module.css";
import DineLogo from "../../../images/icons/dine.svg";
import { Link } from "react-router-dom";

export function Header() {
  return (
    <div className={styles.header}>
      <div className={styles.box}>
        <div className={styles.logo}>
          <Link to="/">
            <img src={DineLogo} alt="Dine Logo" />
          </Link>
        </div>
        <div className={styles.descriptionBox}>
          <span className={styles.descriptionHeader}>
            Exquisite dining
            <br /> since 1989
          </span>
          <span className={styles.descriptionText}>
            Experience our seasonal menu in beautiful country surroundings. Eat
            the freshest produce from the comfort of our farmhouse.
          </span>
          <div>
            <Link to="booktable">
              <button className={styles.button}>Book a table</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
