/* eslint-disable default-param-last */
const initialState = {
  sort: 'cheap',
  filter: [
    { label: 'Все', name: 'all', checked: true },
    { label: 'Без пересадок', name: '0', checked: true },
    { label: '1 пересадка', name: '1', checked: true },
    { label: '2 пересадки', name: '2', checked: true },
    { label: '3 пересадки', name: '3', checked: true },
  ],
  searchId: undefined,
  tickets: [],
  error: '',
  loading: false,
  showMoreCount: 5,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SORT':
      return { ...state, sort: action.sort };

    case 'FILTER':
      return { ...state, filter: action.filter };

    case 'GET_SEARCH_ID':
      return { ...state, searchId: action.searchId };

    case 'LOAD_TICKETS':
      return { ...state, tickets: [...state.tickets, ...action.tickets], loading: action.loading };

    case 'ERROR':
      return { ...state, error: action.error };

    case 'SHOW_MORE':
      return { ...state, showMoreCount: state.showMoreCount + 5 };

    default:
      return state;
  }
};

export default reducer;
