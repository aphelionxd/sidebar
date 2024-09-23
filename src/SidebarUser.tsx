import React from 'react';
import styles from './styles/sidebarUser.module.css';

const SidebarUser: React.FC = () => {
  return (
    <div className={styles.sidebar}>
      <div className={styles.header}>
        <div className={styles.icon}></div>
        <p className={styles.greeting}>
          Olá! <span className={styles.user}>Usuário</span>
        </p>
      </div>

      <div className={styles.menu}>
        <div className={styles.menuItem}>Atualizar Dados da Conta</div>
        <div className={styles.menuItem}>Minhas Compras</div>
        <div className={styles.menuItem}>Sobre nós</div>
        <div className={styles.menuItem}>Regras</div>
      </div>

    </div>
  );
};

export default SidebarUser;
