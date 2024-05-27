import styles from "./Footer.module.css";

function Footer() {
  const curYear = calculateCurYear();

  return (
    <footer className={styles.footerContainer}>
      <div className={styles.footerLogoContainer}>
        <a
          href="/"
          className={styles.footerLogo}
          onClick={() => window.location.reload()}
        >
          NewsCeylan
        </a>
      </div>
      <div>
        <ul className={styles.footerElContainer}>
          <li>Terms of Use</li>
          <li>About the NewsCeylan</li>
          <li>Privacy Policy</li>
          <li>Cookies</li>
          <li>Accessibility Help</li>
          <li>Advertise with us</li>
          <li>Contact technical support</li>
        </ul>
        <p className={styles.footerText}>
          {` Copyright © ${curYear} by Mustafa Ceylan. All rights reserved. The
          NewsCeylan is not responsible for the content of external sites. Read
          about our approach to external linking.`}
        </p>
      </div>
    </footer>
  );
}

const calculateCurYear = () => {
  const date = new Date();
  return date.getFullYear();
};

export default Footer;
