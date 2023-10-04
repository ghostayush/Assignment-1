import React, { Fragment,useState,useEffect } from 'react'
import Data from './Data';
import ProductCard from './ProductCard';
import {AiOutlineSearch,AiOutlineDown} from 'react-icons/ai'
import ReactPaginate from 'react-paginate'
import { useNavigate,useParams } from 'react-router-dom';

const Home = () => {
    const navigate=useNavigate();
    const { pageNumber } = useParams();

    const [currentPage, setCurrentPage] = useState(0);
    const [q, setQ] = useState("");

    const totalPages = 10;
    const itemsPerPage=6;
    const startIndex = currentPage * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;

    const filteredData = Data.filter((car) => {
      const carName = car.name.toLowerCase();
      return carName.includes(q.toLowerCase());
    });

    const subset = filteredData.slice(startIndex, endIndex);

    const handlePageChange = (selectedPage) => {
        const newPageNumber = selectedPage.selected + 1;
        navigate(`/page/${newPageNumber}`);
        setCurrentPage(selectedPage.selected);
    };

    const handleSearch = (e) => {
      e.preventDefault();
      setCurrentPage(0);  // Reset page to 1 when performing a new search
    };

    useEffect(() => {
      if (!pageNumber || isNaN(pageNumber) || parseInt(pageNumber) < 1) {
        navigate(`/page/1`);
      } 
      else {
        const parsedPageNumber = parseInt(pageNumber);
        setCurrentPage(parsedPageNumber - 1);
      }
    }, [pageNumber,navigate]);

  return (
    <Fragment>
    <div className='w-auto max-w-screen min-h-screen h-auto bg-slate-500 p-2 pl-6 pr-6 flex flex-col gap-4 items-center'>

        <div className='flex flex-row gap-4 h-14 w-full bg-slate-200 rounded-lg items-center'>
        <form onSubmit={handleSearch} className='w-80 flex flex-row pl-2'>
          <label htmlFor="search-form">
            <input
              type="search"
              name="search-form"
              id="search-form"
              className='h-10 w-80 rounded-2xl p-2 relative ' 
              placeholder="Search..."
              value={q}
              onChange={(e) => setQ(e.target.value)}
            />
          </label>
          <AiOutlineSearch className='absolute pt-2 text-3xl ml-[17rem]'/>
        </form>

        <h1 className='flex flex-row items-center gap-1'>Relevence<AiOutlineDown/></h1>
        <h1 className='flex flex-row items-center gap-1'>All brands<AiOutlineDown/></h1>
        </div>

        <div className='w-full h-auto'>
        <div className='w-full flex flex-wrap justify-center flex-row gap-6 '>
        {Data && subset.map((Data)=>(
          <Fragment key={Data.id} >
          <ProductCard Data={Data}/>
          </Fragment>
        ))}
        </div>
        </div>

        <div className='flex flex-row justify-between gap-4 h-14 w-full bg-slate-200 rounded-lg items-center pr-6'>
            <p>{startIndex + 1} - {endIndex} from {Data.length}</p>
            <ReactPaginate
              pageCount={totalPages}
              onPageChange={handlePageChange}
              forcePage={currentPage}
              containerClassName='flex flex-row gap-2'
              previousLabel={"←"}
              nextLabel={"→"}
              pageClassName='bg-white w-7 rounded-lg text-center'
              previousClassName='bg-white w-7 rounded-lg text-center'
              nextClassName='bg-white w-7 rounded-lg text-center'
            />
        </div>
    </div>  
    </Fragment>
  )
}

export default Home