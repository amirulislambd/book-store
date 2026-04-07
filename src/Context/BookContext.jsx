import React, { createContext, useState } from "react";
import { toast } from "react-toastify";
import { getReadListFromLocalDB, getWishListFromLocalDB, setReadListToLocalDB, setWishListToLocalDB } from "../components/Utils/localDB";

// const [storedBook, setStoredBook] = useState([]);

export const BooksContext = createContext();

const BookContext = ({ children }) => {
  const [storedBook, setStoredBook] = useState(()=>getReadListFromLocalDB());
  const [storedWishList, setStoredWishList] = useState(()=>getWishListFromLocalDB());



  const handleBookRead = (readBook) => {

    setReadListToLocalDB(readBook)
    console.log(readBook);
    const isExistBook = storedBook.find(
      (book) => book.bookId === readBook.bookId,
    );
    if (isExistBook) {
      toast.warning(`${readBook.bookName} already exist in read list`);
      return;
    } else {
      setStoredWishList([])
      setStoredBook([...storedBook, readBook]);
      toast.success(`${readBook.bookName} added to mark as read list.`);
    }
  };
  const handleWishList = (readBook) => {
    setWishListToLocalDB(readBook)

    const isAddedMarkAsRead = storedBook.find(book=>book.bookId === readBook.bookId)

    const isExistBook = storedWishList.find(
      (book) => book.bookId === readBook.bookId,
    );

    if(isAddedMarkAsRead){
        toast.warning(`${readBook.bookName} already added in read list`)
        return
    }else if (isExistBook) {
      toast.warning(`${readBook.bookName} already exist in wishList`);
      return;
    } else {
        setStoredWishList([...storedWishList, readBook]);
      toast.success(`${readBook.bookName} added to wishList.`);
    }
  };
  const data = {
    storedBook,
    setStoredBook,
    handleBookRead,
    storedWishList,
    setStoredWishList,
    handleWishList
  };

  return <BooksContext.Provider value={data}>{children}</BooksContext.Provider>;
};

export default BookContext;
