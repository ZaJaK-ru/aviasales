/* eslint-disable no-param-reassign */
import { connect } from 'react-redux';

import * as actions from '../../actions';

import styles from './Filter.module.scss';

function Filter({ filter, setFilter }) {
  const onChange = (event) => {
    const newFilter = [...filter];

    if (event.target.name === 'all') {
      newFilter.map((item) => {
        item.checked = event.target.checked;
        return item;
      });
    } else {
      newFilter.map((item) => {
        if (item.name === 'all') {
          item.checked = false;
        }
        if (event.target.name === item.name) {
          item.checked = event.target.checked;
        }
        return item;
      });
    }

    let count = 0;
    newFilter.forEach((element) => {
      if (element.checked) {
        count += 1;
      }
    });
    if (count >= 4) {
      newFilter.map((item) => {
        item.checked = true;
        return item;
      });
    }
    setFilter(newFilter);
  };

  const filters = filter?.map((item) => {
    const { label, name, checked } = item;
    return (
      <li key={name}>
        <label className={styles.filter} htmlFor={name}>
          <input
            className={styles.filter__checkbox}
            type="checkbox"
            checked={checked}
            onChange={onChange}
            name={name}
            id={name}
          />
          {label}
        </label>
      </li>
    );
  });

  return (
    <>
      <h3 className={styles.filterlist__title}>Количество пересадок</h3>
      <ul className={styles.filterlist}>{filters}</ul>
    </>
  );
}

const mapStateToProps = ({ filter }) => ({ filter });

export default connect(mapStateToProps, actions)(Filter);
