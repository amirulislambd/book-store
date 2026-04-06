import React, { useContext, useEffect, useState } from 'react';
import { BooksContext } from '../../Context/BookContext';
import BookCar from '../ui/BookCart/BookCar';

const WishListBook = ({sortType}) => {
    const {storedWishList} = useContext(BooksContext)


    
      const [filterWishList, setFilterWishList]=useState(storedWishList||[])
    console.log(filterWishList)
      
      useEffect(()=>{
    if(sortType){
        if(sortType === 'pages'){
    const sortData = [...storedWishList].sort((a,b)=>a.totalPages - b.totalPages)
    setFilterWishList(sortData)
    console.log(sortData)
        }else if(sortType === 'rating'){
            const sortData = [...storedWishList].sort((a,b)=>a.rating - b.rating)
            setFilterWishList(sortData)
    console.log(sortData)
    
        }
    }
      },[sortType,storedWishList])


    if (filterWishList.length === 0) {

        return <div className="flex items-center justify-around h-[50vh] bg-gray-100 my-10">
           <h1 className="text-3xl font-bold animate-pulse">NO wish List Data Found</h1>
         </div>;
       }

    return (
        <div className='container mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-5'>
            {
                filterWishList.map(book =><BookCar book={book}/>)
            }
        </div>
    );
};

export default WishListBook;