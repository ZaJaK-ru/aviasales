import styles from './FilterList.module.scss';

export default function FilterList() {
  return (
    <>
      <h4 className={styles.filterlist__title}>Количество пересадок</h4>
      <ul className={styles.filterlist}>
        <li>
          <label className={styles.filter} htmlFor="all">
            <input className={styles.filter__checkbox} type="checkbox" id="all" />
            Все
          </label>
        </li>
        <li>
          <label className={styles.filter} htmlFor="trans_no">
            <input className={styles.filter__checkbox} type="checkbox" id="trans_no" />
            Без пересадок
          </label>
        </li>
        <li>
          <label className={styles.filter} htmlFor="trans_1">
            <input className={styles.filter__checkbox} type="checkbox" id="trans_1" />1 пересадка
          </label>
        </li>
        <li>
          <label className={styles.filter} htmlFor="trans_2">
            <input className={styles.filter__checkbox} type="checkbox" id="trans_2" />2 пересадки
          </label>
        </li>
        <li>
          <label className={styles.filter} htmlFor="trans_3">
            <input className={styles.filter__checkbox} type="checkbox" id="trans_3" />3 пересадки
          </label>
        </li>
      </ul>
    </>
  );
}
