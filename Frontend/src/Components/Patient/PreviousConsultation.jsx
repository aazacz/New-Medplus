import React, {useMemo, useState } from 'react';
import { useDispatch }             from "react-redux";
import { useTable, usePagination } from 'react-table'
import Mock_DATA                   from './MOCK_DATA.json'
import { COLUMNS }                 from "./column"

function PreviousConsultation() {



  const columns = useMemo(() => COLUMNS, [])
  const data = useMemo(() => Mock_DATA, [])

  const tableInstance = useTable({
    columns: columns,
    data: data,
    initialState: { pageIndex: 0, pageSize: 10 }
  }, usePagination)

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
    page, // Current page of data
    pageOptions, // Available page options
    state: { pageIndex, pageSize }, // Page index and page size
    gotoPage, // Function to navigate to a specific page
    previousPage, // Function to go to the previous page
    nextPage, // Function to go to the next page
    setPageSize,
  } = tableInstance




  const [User, SetUser] = useState("User")
  const dispatch = useDispatch()

  
  return (
    <>
      <div id='parentDiv' className=' flex flex-col items-center  h-[560px] '>

        <div className=' ml-5  flex items-start'>
          <span className='text-[18px]'>Hi<span className='font-medium'> {User}</span> Your Previous Consultation</span>

        </div>
        <div>
        </div>

      

        {/*chart added*/}
        <div className='flex flex-col w-full items-center justify-center mt-7 '>

          <div className="rounded-md border-[2p] bg-white   w-[847px] shadow-[rgba(50,50,93,0.25)_0px_6px_12px_-2px,_rgba(0,0,0,0.3)_0px_3px_7px_-3px]">
            <table className='caret-transparent mx-6    mb-5 table-auto text-center w-[800px]' {...getTableProps()}>
              {/* Render table header */}
              <thead>
                {headerGroups.map((headerGroup) => (
                  <tr {...headerGroup.getHeaderGroupProps()}>
                    {headerGroup.headers.map((column) => (
                      <th  className='font-bold  py-4 border-b text-left'{...column.getHeaderProps()}>
                        {column.render('Header')}
                      </th>
                    ))}
                  </tr>
                ))}
              </thead>
              {/* Render table body */}
              <tbody {...getTableBodyProps()}>
                {page.map((row) => {
                  prepareRow(row);
                  return (
                    <tr className='even:bg-lightgreen3'{...row.getRowProps()}>
                      {row.cells.map((cell) => (
                        <td className='text-left ' {...cell.getCellProps()}>
                          {cell.render('Cell')}
                        </td>
                      ))}
                    </tr>
                  );
                })}
              </tbody>
            </table>
            {/* Pagination controls */}
            <div>
              <button className='px-2' onClick={() => gotoPage(0)}>First</button>
              <button className='px-2' onClick={() => previousPage()}>Previous</button>
              <button className='px-2' onClick={() => nextPage()}>Next</button>
              <button className='px-2' onClick={() => gotoPage(pageOptions.length - 1)}>Last</button>
              <span>
                Page{' '}
                <strong>
                  {pageIndex + 1} of {pageOptions.length}
                </strong>{' '}
              </span>
              <span>
                | Go to page:{' '}
                <input
                  type="number"
                  defaultValue={pageIndex + 1}
                  onChange={(e) => {
                    const page = e.target.value ? Number(e.target.value) - 1 : 0;
                    gotoPage(page);
                  }}
                  style={{ width: '50px' }}
                />
              </span>
              <select
                value={pageSize}
                onChange={(e) => {
                  setPageSize(Number(e.target.value));
                }}
              >
                {[10, 20, 30, 40, 50].map((pageSize) => (
                  <option key={pageSize} value={pageSize}>
                    Show {pageSize}
                  </option>
                ))}
              </select>
            </div>
          </div>





          {/* <div className="rounded-md border-[2p]   w-[800px] shadow-[rgba(50,50,93,0.25)_0px_6px_12px_-2px,_rgba(0,0,0,0.3)_0px_3px_7px_-3px]">
            <table className='caret-transparent  table-fixed text-center w-[800px]'>
              <thead>
                <tr className=' '>
                  <th colSpan="2" className='px-5 py-4  text-lg text-left' >Previous Consultations</th>
                </tr>
                <colgroup>
                  <col className='w-[200px] ' />
                  <col />
                  <col />
                  <col />
                </colgroup>
                <tr>
                  <th className='font-bold p-2 border-b text-left'>Doctor Name</th>
                  <th className='font-bold p-2 border-b '>Department</th>
                  <th className='font-bold p-2 border-b '>Date</th>
                  <th className='font-bold p-2 border-b '>Next Consultation</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className='text-left p-2 '>Dr Joseph</td>
                  <td>Oncology</td>
                  <td>01-09-2023</td>
                  <td>01-10-2023</td>
                </tr>
              </tbody>
            </table>
          </div>
 */}







        </div>
      </div>




    </>
  )
}

export default PreviousConsultation 