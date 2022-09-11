import { useDispatch } from 'react-redux';

import action from 'redux/actions';

export default function Filter() {
  const dispatch = useDispatch();
  const contactsFilter = ({ target }) => {
    dispatch(action.setFilter(target.value));
  };

  return (
    <label>
      Find contacts by name
      <br />
      <input type="text" name="filter" onChange={contactsFilter} />
    </label>
  );
}
