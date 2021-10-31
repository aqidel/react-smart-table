import { useDispatch } from 'react-redux';
import { filter } from '../feautures/slice';

function Filter() {
  const dispatch = useDispatch();

  return (
    <div className='input-group input-group-sm' style={{width: '300px'}}>
      <input type='text' 
             className='form-control' 
             placeholder='Filter results...'
             onChange={(e) => dispatch(filter(e.target.value))}/>
    </div>
  )
}

export default Filter;