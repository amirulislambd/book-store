import React from 'react';
import { FaRegStar } from 'react-icons/fa';
import { Link } from 'react-router';

const BookCar = ({book}) => {
    return (
        <Link to={`/bookDetails/${book.bookId}`} className="card bg-base-100  shadow-sm ">
        <figure className='bg-zinc-100 py-5'>
          <img
          className="max-h-56 rounded-xl"
            src={book.image}
            alt={book.image}
          />
        </figure>
        <div className="card-body">
          <div>
              {
                  book.tags.map((tag, i)=><div key={i}  className="badge badge-soft badge-success">{tag}</div>)
              }
          </div>
          <h2 className="card-title font-bold">
            {book.bookName}
          </h2>
          <p>
            By: {book.author}
          </p>
          <div className='divider'></div>
          <div className="card-actions justify-between">
            <div className="font-semibold"><p>{book.category}</p></div>
            <div className="font-bold flex items-center gap-1 "><p>{book.rating}</p><FaRegStar /></div>
          </div>
        </div>
      </Link>
    );
};

export default BookCar;