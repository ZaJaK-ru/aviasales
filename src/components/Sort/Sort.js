/* eslint-disable jsx-a11y/label-has-associated-control */
import { connect } from 'react-redux';

import * as actions from '../../actions';

import styles from './Sort.module.scss';

function Sort({ sort, sortByCheap, sortByFast, sortByOptimal }) {
  return (
    <ul className={styles.sort}>
      <li className={styles.sort__item}>
        <input type="radio" id="item1" name="tab" checked={sort === 'SORT_CHEAP'} onChange={sortByCheap} />
        <label htmlFor="item1">Самый дешевый</label>
      </li>
      <li className={styles.sort__item}>
        <input type="radio" id="item2" name="tab" checked={sort === 'SORT_FAST'} onChange={sortByFast} />
        <label htmlFor="item2">Самый быстрый</label>
      </li>
      <li className={styles.sort__item}>
        <input type="radio" id="item3" name="tab" checked={sort === 'SORT_OPTIMAL'} onChange={sortByOptimal} />
        <label htmlFor="item3">Оптимальный</label>
      </li>
    </ul>
  );
}

const mapStateToProps = (state) => {
  return {
    sort: state.sort,
  };
};

export default connect(mapStateToProps, actions)(Sort);
