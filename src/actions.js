/* eslint-disable no-loop-func */
/* eslint-disable no-return-await */
export const setSort = (sort) => ({ type: 'SORT', sort });

export const setFilter = (filter) => ({ type: 'FILTER', filter });

export const errorOn = (err) => ({ type: 'ERROR', err });

export const showMore = () => ({ type: 'SHOW_MORE' });

export function getSearchId() {
  return (dispatch) => {
    fetch('https://aviasales-test-api.kata.academy/search')
      .then((res) => res.json())
      .then((res) => {
        dispatch({
          type: 'GET_SEARCH_ID',
          searchId: res.searchId,
        });
      })
      .catch((err) => {
        dispatch(errorOn(err));
      });
  };
}

export function loadTickets(searchId) {
  return (dispatch) => {
    async function subscribe() {
      const response = await fetch(`https://aviasales-test-api.kata.academy/tickets?searchId=${searchId}`);

      if (response.status === 502) {
        await subscribe();
      } else if (response.status !== 200) {
        dispatch(errorOn(response.statusText));
        await subscribe();
      } else {
        const ticketsPart = await response.json();

        dispatch({
          type: 'LOAD_TICKETS',
          tickets: ticketsPart.tickets,
          loading: ticketsPart.stop,
        });

        if (!ticketsPart.stop) await subscribe();
      }
    }

    subscribe();
  };
}
