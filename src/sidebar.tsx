import React from 'react';
import styles from './styles/sidebar.module.css';

const Sidebar: React.FC = () => {
  return (
    <div className={styles.sidebar}>
      <div className={styles.header}>
        <div className={styles.icon}></div>
        <button className={styles.loginButton}>Entrar</button>
      </div>
      <div className={styles.menuItem}>Sobre nós</div>
      <div className={styles.menuItem}>Regras</div>
    </div>
  );
};

export default Sidebar;
