import FilterList from '../FilterList';
import Sort from '../Sort';
import TicketList from '../TicketList';

import styles from './App.module.scss';
import logo from './logo.svg';

export default function App() {
  return (
    <div className={styles.app}>
      <header className={styles.app__header}>
        <img className={styles.app__logo} src={logo} alt="logo" />
      </header>
      <div className={styles.app__wrapper}>
        <aside className={styles.app__aside}>
          <FilterList />
        </aside>
        <main className={styles.app__main}>
          <Sort />
          <TicketList />
        </main>
      </div>
    </div>
  );
}
