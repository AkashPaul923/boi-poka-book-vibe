import { useParams } from "react-router-dom";


const BookDetail = () => {

    const {bookId} = useParams()

    return (
        <div>
            book detail{bookId}
        </div>
    );
};

export default BookDetail;