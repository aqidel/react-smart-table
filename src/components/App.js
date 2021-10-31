import { TiArrowUnsorted } from 'react-icons/ti';
import { useSelector, useDispatch } from 'react-redux';
import { pagination, sort } from '../feautures/slice';
import ReactPaginate from 'react-paginate';
import Row from './Row';
import Filter from './Filter';
import Select from './Select';

const headers = ['№', 'Avatar', 'Name', 'Email', 'Phone Number', 'City', 'Birthdate', 'Remove'];

function App() {
  const pageCount = useSelector(state => state.sliceReducer.pageCount);
  const dispatch = useDispatch();

  return (
    <>
      <div className='d-flex px-3 py-2'>
        <Filter/>
        <Select/>
      </div>
      <table className='table table-striped table-hover table-bordered align-middle text-center mb-0'>
        <thead className='table-dark'>
          <tr>
            {headers.map((header, i) => {
              return (
                <th key={i}>
                  {header}
                  {(i !== 0 && i !== 1 && i !== 7) ? <TiArrowUnsorted onClick={() => dispatch(sort(i))}/> : null}
                </th>
              )
            })}
          </tr>
        </thead>
        <tbody>
          <Row/>
        </tbody>
      </table>
      <div className='d-flex justify-content-center align-items-center py-3'>
        <ReactPaginate
          pageCount={pageCount}
          pageRangeDisplayed={2}
          marginPagesDisplayed={3}
          onPageChange={(e) => dispatch(pagination(e))}
          initialPage={0}
          containerClassName={'pagination mb-0'}
          pageClassName={'page-item page'}
          pageLinkClassName={'page-link'}
          activeClassName={'active'}
          activeLinkClassName={'page-link'}
          previousClassName={'page-item'}
          previousLinkClassName={'page-link'}
          nextClassName={'page-item'}
          nextLinkClassName={'page-link'}
          breakClassName={'page-item disabled'}
          breakLinkClassName={'page-link'}
        />
      </div> 
    </>
  );
}

export default App;