/* eslint-disable jsx-a11y/label-has-associated-control */
import styles from './Sort.module.scss';

export default function Sort() {
  return (
    <ul className={styles.sort}>
      <li className={styles.sort__item}>
        <input type="radio" id="item1" name="tab" />
        <label htmlFor="item1">Самый дешевый</label>
      </li>
      <li className={styles.sort__item}>
        <input type="radio" id="item2" name="tab" />
        <label htmlFor="item2">Самый быстрый</label>
      </li>
      <li className={styles.sort__item}>
        <input type="radio" id="item3" name="tab" />
        <label htmlFor="item3">Оптимальный</label>
      </li>
    </ul>
  );
}
