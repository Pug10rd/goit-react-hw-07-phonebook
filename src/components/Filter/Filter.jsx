import { useDispatch } from 'react-redux';
import { filterValue } from 'redux/filterSlice';
import { Input } from './FilterStyled';

const Filter = () => {
  const dispatch = useDispatch();

  const onInput = e => {
    dispatch(filterValue(e.target.value));
  };
  return (
    <label>
      <Input type="text" onInput={onInput} placeholder="Find contact..." />
    </label>
  );
};

export default Filter;
