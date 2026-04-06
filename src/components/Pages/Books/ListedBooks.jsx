import React, { useContext } from "react";
import { BooksContext } from "../../../Context/BookContext";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import ReadListBook from "../../LIstedBooks/ReadListBook";
import WishListBook from "../../LIstedBooks/WishListBook";
import { useState } from "react";

const ListedBooks = () => {
  const { storedBook, storedWishList } = useContext(BooksContext);
  console.log(storedBook, storedWishList);

  const [sortType, setSortType] = useState('')

  console.log(sortType)


  return (
    <div className="container mx-auto">


<div className="flex justify-center">
<div className="dropdown dropdown-center">
<div tabIndex={0} role="button" className="btn m-1">Sort by {sortType} ⬇️</div>
<ul tabIndex="-1" className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
  <li onClick={()=>setSortType('pages')}><a>Pages</a></li>
  <li onClick={()=>setSortType('rating')}><a>Rating</a></li>
</ul>
</div>
</div>


      <Tabs>
        <TabList>
          <Tab>Read List</Tab>
          <Tab>Wish List</Tab>
        </TabList>

        <TabPanel>
          <ReadListBook sortType={sortType}/>
        </TabPanel>
        <TabPanel>
          <WishListBook sortType={sortType}/>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default ListedBooks;
