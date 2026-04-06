import React, { useContext } from 'react';
import Banner from "../../HomePage/Banner";
import Books from '../../HomePage/Books';
import { BooksContext } from '../../../Context/BookContext';


const Home = () => {

  return (
    <div>
      <Banner />
      <Books/>
    </div>
  );
};

export default Home;