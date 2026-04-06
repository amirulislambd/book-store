import React from "react";
import { useLoaderData } from "react-router";
import { useParams } from "react-router";

const BookDetails = () => {
  const { id } = useParams();
  const books = useLoaderData();
  // console.log(book)
  console.log(id);

  const expectedBook = books.find((book) => book.bookId == id);
  console.log(expectedBook);

  const {
    author,
    category,
    bookName,
    image,
    publisher,
    rating,
    review,
    tags,
    totalPages,
    yearOfPublishing,
  } = expectedBook;

  return (
    <div className="card bg-base-100  shadow-sm grid lg:grid-cols-2 container mx-auto">
      <figure className="bg-zinc-100 py-5">
        <img className=" max-h-[500px] rounded-xl" src={image} alt={image} />
      </figure>
      <div className="card-body">
        <h2 className="card-title font-bold md:text-2xl lg:text-5xl">{bookName}</h2>
        <p className="font-bold lg:text-xl mt-2">By: {author}</p>
        <div className="divider"></div>
        <p className="font-bold">{category}</p>
        <div className="divider"></div>
        <p>Review: {review}</p>
        <div>
         <span className="font-bold">Tag</span> {tags.map((tag, i) => (
            <div key={i} className="badge badge-soft badge-success">
              <p className="font-bold"> {tag}</p>
            </div>
          ))}
        </div>
        <div className="divider"></div>
        <div className="flex gap-6">
          <div>
            <p>Number of page:</p>
            <p>Publisher:</p>
            <p>Year of Publishing:</p>
            <p>Rating:</p>
          </div>
          <div className="font-bold">
            <p>{totalPages}</p>
            <p>{publisher}</p>
            <p>{yearOfPublishing}</p>
            <p>{rating}</p>
          </div>
        </div>
        <div className="card-actions ">

            <button className="btn btn-outline">Read</button>
            <button className="btn btn-accent">Wishlist</button>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;
