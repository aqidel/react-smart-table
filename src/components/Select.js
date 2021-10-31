import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setOnPage, pagination } from '../feautures/slice';

function Select() {
  const onPage = useSelector(state => state.sliceReducer.onPage);
  const dispatch = useDispatch();

  useEffect(() => {
   dispatch(pagination({selected: 0}));
//   document.body.querySelector('.active').classList.remove('active');
//   document.body.querySelector('.page').classList.add('active');
  }, [onPage, dispatch]);

  return (
    <select className='form-select form-select-sm ms-2' 
            style={{width: '120px'}} 
            onChange={(e) => dispatch(setOnPage(e.target.value))}>
      <option value={10}>On Page:</option>
      <option value={10}>10</option>
      <option value={25}>25</option>
      <option value={50}>50</option>
    </select>
  )
}

export default Select;