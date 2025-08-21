import { FaRegStar } from "react-icons/fa6";
import { Link } from "react-router-dom";
const Book = ({ book }) => {
    const { bookId, bookName, category, image, author, rating, tags } = book;
    return (
        <>
            <Link to={`/book/${bookId}`}>
                <div className="card bg-base-100 w-96 shadow-sm border p-3">
                    <figure className="bg-base-300 py-10 w-">
                        <img
                            className="h-[184px]"
                            src={image}
                            alt={bookName} />
                    </figure>
                    <div className="card-body">
                        <div className="flex gap-3">
                        {
                            tags.map((tag, index) => <div key={index} className="badge text-base p-4 font-semibold text-[#23BE0A] bg-green-100">{tag}</div>)
                        }
                    </div>
                        <h2 className="card-title text-2xl font-[PlayfairDisplay] line-clamp-1">{bookName}</h2>
                        <p className="text-base">By: {author}</p>
                        <hr className="border-dashed border-t-2 border-b-0 border-gray-300" />
                        <div className="card-actions justify-between">
                            <div className="badge text-base">{category}</div>
                            <div className="flex items-center gap-2 ">{rating}<FaRegStar /></div>
                        </div>
                    </div>
                </div>
            </Link>
        </>
    );
};

export default Book;