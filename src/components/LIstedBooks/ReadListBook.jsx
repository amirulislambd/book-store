import React, { useContext, useEffect, useState } from "react";
import { BooksContext } from "../../Context/BookContext";
import BookCar from "../ui/BookCart/BookCar";

const ReadListBook = ({sortType}) => {
  const { storedBook } = useContext(BooksContext);


  const [filterRedList, setFilterReadList]=useState(storedBook)
console.log(filterRedList)
  
  useEffect(()=>{
if(sortType){
    if(sortType === 'pages'){
const sortData = [...storedBook].sort((a,b)=>a.totalPages - b.totalPages)
setFilterReadList(sortData)
console.log(sortData)
    }else if(sortType === 'rating'){
        const sortData = [...storedBook].sort((a,b)=>a.rating - b.rating)
        setFilterReadList(sortData)
console.log(sortData)

    }
}
  },[sortType])

  if (filterRedList.length === 0) {

   return <div className="flex items-center justify-around h-[50vh] bg-gray-100 my-10">
      <h1 className="text-3xl font-bold animate-pulse">NO Read List Data Found</h1>
    </div>;
  }
  return (
    <div className="container mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-5">
      {filterRedList.map((book) => (
        <BookCar book={book} />
      ))}
    </div>
  );
};

export default ReadListBook;
