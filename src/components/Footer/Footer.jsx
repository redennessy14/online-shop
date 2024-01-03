import React from "react";
import { Link } from "react-router-dom";

import styles from "../../styles/Footer.module.css";
import { ROUTES } from "../../utils/routes";

const Footer = () => (
  <section className={styles.footer}>
    <div className={styles.logo}>
      <Link to={ROUTES.HOME}>LOGO</Link>
    </div>

    <div className={styles.rights}>Developed by Tursunaliev</div>
  </section>
);

export default Footer;
