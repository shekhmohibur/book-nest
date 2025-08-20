import { FaRegStar } from "react-icons/fa6";
import { Link } from "react-router-dom";
const Book = ({ book }) => {
    const { author, bookId, bookName, category, image, publisher, rating, tags } = book;
    return (
        <>
            <Link>
                <div className="card bg-base-100 w-96 shadow-sm border">
                    <figure className="bg-base-300 py-10">
                        <img
                            className="h-[184px]"
                            src={image}
                            alt={bookName} />
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title text-2xl font-[PlayfairDisplay]">{bookName}</h2>
                        <p className="text-base">By: {publisher}</p>
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