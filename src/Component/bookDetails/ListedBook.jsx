import { RiGroupLine } from "react-icons/ri";
import { FaRegFileAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

const ListedBook = ({ book }) => {
    const { bookName, category, image, author, rating, tags, totalPages, yearOfPublishing, publisher } = book;
    return (
        <div className="bg-base-100 shadow-sm border p-3 md:flex w-full rounded-lg">
            <figure className="bg-base-300 py-7 px-7 min-w-56 rounded-md flex justify-center items-center">
                <img
                    className="h-[184px]"
                    src={image}
                    alt={bookName} />
            </figure>
            <div className="card-body">
                <h2 className="card-title text-2xl font-[PlayfairDisplay]">{bookName}</h2>
                <p className="grow-0">By: {author}</p>
                <div className="flex gap-3 flex-col md:flex-row my-2">
                    <div className="flex gap-3">
                        {
                            tags.map((tag, index) => <div key={index} className="badge p-2 font-semibold text-[#23BE0A] bg-[#23be0a0d]">#{tag}</div>)
                        }
                    </div>
                    <p>Year of Publishing: {yearOfPublishing}</p>
                </div>
                <div className="md:flex gap-3">
                        <p className="flex gap-2 text-gray-500 grow-0 items-center"><RiGroupLine />Publisher: {publisher}</p>
                        <p className="flex gap-2 text-gray-500 grow-0 items-center"><FaRegFileAlt /> Pages: {totalPages}</p>
                </div>
                <hr className="border-dashed border-t-2 border-b-0 border-gray-300 my-2" />
                <div className="card-actions">
                    <div className="badge py-4 px-5 rounded-2xl p-2 text-[#328EFF] bg-[#328eff26]">Category: {category}</div>
                    <div className="badge p-2 py-4 px-5 rounded-2xl text-[#FFAC33] bg-[#ffac3326]">Rating: {rating}</div>
                    <Link className="badge py-4 px-5 rounded-2xl text-white bg-[#23BE0A]" to={`/book/${book.bookId}`}>View Details</Link>
                </div>
            </div>
        </div>
    );
};

export default ListedBook;