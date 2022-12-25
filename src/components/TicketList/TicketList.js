import { connect } from 'react-redux';
import { useCallback } from 'react';
import uniqid from 'uniqid';

import Ticket from '../Ticket';
import * as actions from '../../actions';

import styles from './TicketList.module.scss';

function TicketList({ tickets, showMoreCount, sort, filter, showMore }) {
  const filteredTickets = useCallback(
    (items) => {
      return items.filter((item) => {
        if (filter[0].checked) return item;
        if (filter[1].checked && item.segments[0].stops.length === 0 && item.segments[1].stops.length === 0)
          return true;
        if (filter[2].checked && item.segments[0].stops.length === 1 && item.segments[1].stops.length === 1)
          return true;
        if (filter[3].checked && item.segments[0].stops.length === 2 && item.segments[1].stops.length === 2)
          return true;
        if (filter[4].checked && item.segments[0].stops.length === 3 && item.segments[1].stops.length === 3)
          return true;
        return false;
      });
    },
    [filter]
  );

  const sortingTickets = (items, sortBy) => {
    switch (sortBy) {
      case 'cheap':
        return items.sort((a, b) => (a.price > b.price ? 1 : -1));
      case 'fast':
        return items.sort((a, b) =>
          a.segments[0].duration + a.segments[1].duration > b.segments[0].duration + b.segments[1].duration ? 1 : -1
        );
      case 'optimal':
        return items.sort((a, b) =>
          a.segments[0].duration + a.segments[1].duration + a.price >
          b.segments[0].duration + b.segments[1].duration + b.price
            ? 1
            : -1
        );
      default:
        return items;
    }
  };

  const viewTickets = sortingTickets(filteredTickets(tickets), sort).slice(0, showMoreCount);

  return (
    <>
      <ul className={styles.ticketlist}>
        {viewTickets.map((ticket) => (
          <li key={uniqid()}>
            <Ticket ticket={ticket} />
          </li>
        ))}
      </ul>
      {viewTickets.length >= showMoreCount ? (
        <button type="button" className={styles.ticketlist__showmore} onClick={showMore}>
          Показать еще 5 билетов!
        </button>
      ) : null}
      {viewTickets.length === 0 ? <span>Не найдено рейсов, удовлетворяющих заданным условиям.</span> : null}
    </>
  );
}

const mapStateToProps = ({ tickets, showMoreCount, sort, filter }) => ({ tickets, showMoreCount, sort, filter });

export default connect(mapStateToProps, actions)(TicketList);
