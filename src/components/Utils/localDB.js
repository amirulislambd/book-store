const getReadListFromLocalDB = () => {
  const allReadList = localStorage.getItem("readList");

  if (allReadList) return JSON.parse(allReadList);
  return [];
};

const setReadListToLocalDB = (book) => {
  const allReadBooks = getReadListFromLocalDB();
  const isAlreadyExist = allReadBooks.find((bk) => bk.bookId === book.bookId);
  if (!isAlreadyExist) {
    allReadBooks.push(book);
    localStorage.setItem("readList", JSON.stringify(allReadBooks));
  }
};

const getWishListFromLocalDB = () => {
  const allWishList = localStorage.getItem("wishlist");
  if (allWishList) return JSON.parse(allWishList);
  return [];
};

const setWishListToLocalDB = (book) =>{
    const allWishListBook = getWishListFromLocalDB()
    const isAlreadyExist = allWishListBook.find(bk =>bk.bookId === book.bookId)
    if(!isAlreadyExist){
        allWishListBook.push(book)
        localStorage.setItem('wishlist',JSON.stringify(allWishListBook))
    }
}

export { getReadListFromLocalDB, setReadListToLocalDB,getWishListFromLocalDB,setWishListToLocalDB };
