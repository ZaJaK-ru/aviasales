export const sortByCheap = () => ({ type: 'SORT', sort: 'SORT_CHEAP' });

export const sortByFast = () => ({ type: 'SORT', sort: 'SORT_FAST' });

export const sortByOptimal = () => ({ type: 'SORT', sort: 'SORT_OPTIMAL' });

export const setFilter = (filter) => ({
  type: 'FILTER',
  filter,
});
