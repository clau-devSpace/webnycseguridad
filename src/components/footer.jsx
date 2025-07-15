import styles from "./footer.module.css";
import { Instagram, Facebook } from "react-bootstrap-icons";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <div className={styles.flexItems}>
          <img
            className={styles.logoFooter}
            src="/images/logotipo-colornuevo.png"
            alt="logo NYC"
          />
          <div className={styles.redesSociales}>
            <p>Seguinos en nuestras redes sociales</p>
            <div className={styles.iconosRedes}>
              <a
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Síguenos en Instagram"
                href="https://www.instagram.com/nyc.seguridadprivada/"
              ></a>
              <Instagram className={styles.socialIcon} />
              <Facebook className={styles.socialIcon} />
            </div>
          </div>
        </div>
        <div className={styles.footerBottom}>
          <p>&copy; 2025 NYC S.R.L Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
