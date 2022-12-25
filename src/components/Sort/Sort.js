/* eslint-disable jsx-a11y/label-has-associated-control */
import { connect } from 'react-redux';

import * as actions from '../../actions';

import styles from './Sort.module.scss';

function Sort({ sort, setSort }) {
  return (
    <ul className={styles.sort}>
      <li className={styles.sort__item}>
        <input
          type="radio"
          id="item1"
          name="tab"
          checked={sort === 'cheap'}
          onChange={() => {
            setSort('cheap');
          }}
        />
        <label htmlFor="item1">Самый дешевый</label>
      </li>
      <li className={styles.sort__item}>
        <input
          type="radio"
          id="item2"
          name="tab"
          checked={sort === 'fast'}
          onChange={() => {
            setSort('fast');
          }}
        />
        <label htmlFor="item2">Самый быстрый</label>
      </li>
      <li className={styles.sort__item}>
        <input
          type="radio"
          id="item3"
          name="tab"
          checked={sort === 'optimal'}
          onChange={() => {
            setSort('optimal');
          }}
        />
        <label htmlFor="item3">Оптимальный</label>
      </li>
    </ul>
  );
}

const mapStateToProps = ({ sort }) => ({ sort });

export default connect(mapStateToProps, actions)(Sort);
