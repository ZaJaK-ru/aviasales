/* eslint-disable default-param-last */
const initialState = {
  sort: 'SORT_CHEAP',

  filter: [
    { label: 'Все', name: 'all', checked: true },
    { label: 'Без пересадок', name: '0', checked: true },
    { label: '1 пересадка', name: '1', checked: true },
    { label: '2 пересадки', name: '2', checked: true },
    { label: '3 пересадки', name: '3', checked: true },
  ],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SORT':
      return { ...state, sort: action.sort };

    case 'FILTER':
      return { ...state, filter: action.filter };

    default:
      return state;
  }
};

export default reducer;
