import styles from './Ticket.module.scss';

export default function Ticket() {
  return (
    <article className={styles.ticket}>
      <header className={styles.ticket__header}>
        <span className={styles.ticket__price}>13 400 Р</span>
        <img className={styles.ticket__logo} src="" alt="logo" />
      </header>
      <div className={styles.ticket__row}>
        <div className={styles.ticket__col}>
          <span className={styles.ticket__text}>MOW – HKT</span>
          <span className={styles.ticket__data}>10:45 – 08:00</span>
        </div>
        <div className={styles.ticket__col}>
          <span className={styles.ticket__text}>В пути</span>
          <span className={styles.ticket__data}>21ч 15м</span>
        </div>
        <div className={styles.ticket__col}>
          <span className={styles.ticket__text}>2 пересадки</span>
          <span className={styles.ticket__data}>HKG, JNB</span>
        </div>
      </div>
      <div className={styles.ticket__row}>
        <div className={styles.ticket__col}>
          <span className={styles.ticket__text}>MOW – HKT</span>
          <span className={styles.ticket__data}>11:20 – 00:50</span>
        </div>
        <div className={styles.ticket__col}>
          <span className={styles.ticket__text}>В пути</span>
          <span className={styles.ticket__data}>13ч 30м</span>
        </div>
        <div className={styles.ticket__col}>
          <span className={styles.ticket__text}>1 пересадка</span>
          <span className={styles.ticket__data}>HKG</span>
        </div>
      </div>
    </article>
  );
}
