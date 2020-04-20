import { SHOW_FILTER } from '../../constants';

const BASE_FILTER = 'all';

const footerFilter = (state = BASE_FILTER, { type, activeFilter }) => {
  switch (type) {
    case SHOW_FILTER:
      return activeFilter;
    default:
      return state;
  }
}

export default footerFilter;
