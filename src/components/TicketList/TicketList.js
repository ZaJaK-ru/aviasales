import Ticket from '../Ticket';

import styles from './TicketList.module.scss';

export default function TicketList() {
  return (
    <>
      <ul className={styles.ticketlist}>
        <li>
          <Ticket />
        </li>
        <li>
          <Ticket />
        </li>
        <li>
          <Ticket />
        </li>
        <li>
          <Ticket />
        </li>
        <li>
          <Ticket />
        </li>
      </ul>
      <button type="button" className={styles.ticketlist__showmore}>
        Показать еще 5 билетов!
      </button>
    </>
  );
}
