import moment from 'moment';

import styles from './Ticket.module.scss';

export default function Ticket({ ticket }) {
  const { price, carrier, segments } = ticket;

  const departureTime = (date) => {
    return moment(date).format('hh:mm');
  };

  const destinationTime = (current, duration) => {
    return moment(current).add(duration, 'minutes').format('HH:mm');
  };

  const travelTime = (duration) => {
    const hours = Math.trunc(duration / 60);
    const minutes = duration % 60;
    return `${hours}ч ${minutes}м`;
  };

  const declension = (number, txt, cases = [2, 0, 1, 1, 1, 2]) =>
    txt[number % 100 > 4 && number % 100 < 20 ? 2 : cases[number % 10 < 5 ? number % 10 : 5]];

  return (
    <article className={styles.ticket}>
      <header className={styles.ticket__header}>
        <span className={styles.ticket__price}>{price.toLocaleString('ru')} ₽</span>
        <img className={styles.ticket__logo} src={`//pics.avs.io/99/36/${carrier}.png`} alt="logo" />
      </header>
      {segments.map(({ origin, destination, stops, date, duration }) => (
        <div className={styles.ticket__row} key={date + duration}>
          <div className={styles.ticket__col}>
            <span className={styles.ticket__text}>
              {origin}-{destination}
            </span>
            <span className={styles.ticket__data}>
              {departureTime(date)} – {destinationTime(date, duration)}
            </span>
          </div>
          <div className={styles.ticket__col}>
            <span className={styles.ticket__text}>В пути</span>
            <span className={styles.ticket__data}>{travelTime(duration)}</span>
          </div>
          <div className={styles.ticket__col}>
            <span className={styles.ticket__text}>
              {stops.length > 0
                ? `${stops.length} ${declension(stops.length, ['пересадка', 'пересадки', 'пересадок'])}`
                : 'Без пересадок'}
            </span>
            <span className={styles.ticket__data}>{stops.length ? stops.join(', ') : null}</span>
          </div>
        </div>
      ))}
    </article>
  );
}
