'use client';

import styles from './header.module.css';

export default function Header() {
  return(
    <div className={`${styles.header_container} flex gap-10 justify-center items-center`}>
      <img src="/img/energy+.png" alt="Energy+" className={styles.logo} />
      <nav className={`flex gap-10`}>
        <a href="#start" className={`${styles.nav_selection}`}>Início</a>
        <a href="#about" className={`${styles.nav_selection}`}>Sobre nós</a>
        <a href="#members" className={`${styles.nav_selection}`}>Integrantes</a>
        <a href="#newsletter" className={`${styles.nav_selection}`}>Newsletter</a>
        <a className={`${styles.nav_selection}`} href="/emails">Ver Emails cadastrados</a>
      </nav>
    </div>
  )
}
