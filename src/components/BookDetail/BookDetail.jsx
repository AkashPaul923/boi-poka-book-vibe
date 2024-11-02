import { useLoaderData, useParams } from "react-router-dom";
import { addToStoredReadList, addToStoredWishList } from "../../utility/AddToDb";

const BookDetail = () => {

    const {bookId} = useParams()

    const data = useLoaderData()
    
    const id = parseFloat(bookId)
    const book = data.find(book => book.bookId === id)
    const {bookName, author,tags, image,category, review,publisher,yearOfPublishing,rating,totalPages} = book

    const handleAddToReadList = (id) =>{
        addToStoredReadList(id)
        // console.log("object");
    }
    const handleAddToWishList = (id) =>{
        addToStoredWishList(id)
        // console.log("object");
    }

    return (
        <div className="grid md:grid-cols-2 gap-10 mt-12 mb-24">
            <div className="p-6 md:p-12 lg:p-20 bg-base-200 rounded-2xl">
                <img className="max-h-[625px] rounded-2xl" src={image} alt="" />
            </div>
            <div className="space-y-4 p-6 lg:p-0">
                <h2 className="text-4xl font-bold">{bookName}</h2>
                <p className="text-xl font-medium">By : {author}</p>
                <div className="divider"></div>
                <p className="text-xl font-medium">{category}</p>
                <div className="divider"></div>
                <p><span className="font-bold">Review:</span> {review}</p>
                <div className="flex gap-2">
                    <p className="font-bold">Tag:</p>
                    {
                        tags.map((tag, i) => <p key={i} className="text-[#23be0a] bg-green-50 px-4 py-1 rounded-3xl">#{tag}</p>)
                    }
                </div>
                <div className="divider"></div>
                <p>Number of Pages: <span className="font-semibold">{totalPages}</span></p>
                <p>Publisher: <span className="font-semibold">{publisher}</span></p>
                <p>Year of Publishing: <span className="font-semibold">{yearOfPublishing}</span></p>
                <p>Rating: <span className="font-semibold">{rating}</span></p>
                <div>
                    <button onClick={() => handleAddToReadList(bookId)} className="btn btn-lg btn-outline mr-4">Read</button>
                    <button onClick={() => handleAddToWishList(bookId)} className="btn btn-lg btn-accent">Wishlist</button>
                </div>
            </div>
        </div>
    );
};

export default BookDetail;