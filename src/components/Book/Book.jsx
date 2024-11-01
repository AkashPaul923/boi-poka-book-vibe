import { Link } from "react-router-dom";

const Book = ({book}) => {
    const {category,tags , bookName ,author , image,rating,bookId} = book
  return (
    <div className="card bg-base-100 shadow-xl p-6 border-2">
        <figure className="bg-base-200 py-8 rounded-2xl ">
            <img src={image} alt={bookName} className="h-40"/>
        </figure>
        <div className="mt-6 flex flex-col">
            <div className="flex gap-2">
                {
                    tags.map(tag => <p className="text-[#23be0a] bg-green-50 px-4 py-1 rounded-3xl">{tag}</p>)
                }
            </div>
            <h2 className="card-title font-bold text-2xl my-4">{bookName}</h2>
            <p className="font-medium">By: {author}</p>
            <div className="border border-dashed my-5"></div>
            <div className="card-actions justify-between mb-4">
                <div className="">{category}</div>
                <div className="rating flex items-center gap-2"><span>{rating} </span><input type="radio" name="rating-1" className="mask mask-star" /></div>
            </div>
            <Link to={`/books/${bookId}`} className="btn btn-accent">Show Details</Link>
        </div>
    </div>
  );
};

export default Book;
