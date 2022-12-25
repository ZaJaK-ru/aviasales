/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-promise-executor-return */
/* eslint-disable no-inner-declarations */
/* eslint-disable no-unused-expressions */

import { useEffect } from 'react';
import { connect } from 'react-redux';

import Filter from '../Filter';
import Sort from '../Sort';
import TicketList from '../TicketList';
import Loader from '../Loader';
import * as actions from '../../actions';

import styles from './App.module.scss';
import logo from './logo.svg';

function App({ searchId, getSearchId, loadTickets, loading }) {
  useEffect(() => {
    getSearchId();
  }, []);

  useEffect(() => {
    if (searchId) {
      loadTickets(searchId);
    }
  }, [searchId]);

  return (
    <div className={styles.app}>
      <header className={styles.app__header}>
        <img className={styles.app__logo} src={logo} alt="logo" />
      </header>
      <div className={styles.app__wrapper}>
        <aside className={styles.app__aside}>
          <Filter />
        </aside>
        <main className={styles.app__main}>
          <Sort />
          {loading ? null : <Loader />}
          <TicketList />
        </main>
      </div>
    </div>
  );
}

const mapStateToProps = ({ searchId, loading }) => ({ searchId, loading });

export default connect(mapStateToProps, actions)(App);
