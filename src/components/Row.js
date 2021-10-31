import { MdDeleteForever } from 'react-icons/md';
import { useSelector, useDispatch } from 'react-redux';
import { remove } from '../feautures/slice';

function Row() {
  const allPages = useSelector(state => state.sliceReducer.allPages);
  const currentPage = useSelector(state => state.sliceReducer.currentPage);
  const onPage = useSelector(state => state.sliceReducer.onPage);
  const dispatch = useDispatch();
  
  return (
    <>
      {allPages[currentPage] ? allPages[currentPage].map((row, i) => {
        return (
          <tr key={i}>
            <td>{currentPage * onPage + i + 1}</td>
            <td>
              <img className='rounded-circle' src={row.avatar} alt='img'/>
            </td>
            <td>{row.name}</td>
            <td>{row.email}</td>
            <td>{row.phone}</td>
            <td>{row.city}</td>
            <td>{row.birthDate}</td>
            <td>
              <MdDeleteForever style={{width: '30px', height: '30px'}} onClick={() => dispatch(remove(i))}/>
            </td>
          </tr>
        )
      }) : null}
    </>
  );
}

export default Row;