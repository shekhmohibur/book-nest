import { useLoaderData, useParams } from "react-router-dom";
import { addToStoredReadList} from "../../utility/ReadListDb";
import { addToStoredWishList } from "../../utility/WishListDm";

const BookDetails = () => {
    const { bookId } = useParams();
    const ParamsId = parseInt(bookId)
    const allBooks = useLoaderData();
    const book = allBooks.find(book => book.bookId === ParamsId)
    const { bookName, category, image, author, rating, tags, review, totalPages, yearOfPublishing, publisher } = book;
    const handleAddToReadList = id => {
        addToStoredReadList(id);
    }
    const handleAddToWishList = id => {
        addToStoredWishList(id);
    }
    return (
        <div className="hero">
            <div className="hero-content flex-col lg:flex-row">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div className="bg-base-300 items-center justify-center flex md:py-16">
                        <img
                            src={image}
                            className="lg:h-[564px] rounded-lg shadow-2xl"
                        />
                    </div>
                    <div>
                        <h1 className="text-5xl font-bold">{bookName}</h1>
                        <p className="py-3">By: {author}</p>
                        <hr className="border-dashed border-t-2 border-b-0 border-gray-300" />
                        <p className="py-3">{category}</p>
                        <hr className="border-dashed border-t-2 border-b-0 border-gray-300" />
                        <p className="py-3"><span className="font-semibold">Review: </span>{review}</p>
                        <div className="flex gap-3 items-center py-3"><p className="font-semibold text-base">Tag</p>
                            {
                                tags.map((tag, index) => <div key={index} className="badge text-base p-4 font-semibold text-[#23BE0A] bg-green-100">{tag}</div>)
                            }
                        </div>
                        <hr className="border-dashed border-t-2 border-b-0 border-gray-300 my-3" />
                        <div className="flex justify-between">
                            <table className="table-auto">
                                <tbody>
                                    <tr>
                                        <td className="text-left pr-16 py-3">Number of Pages:</td>
                                        <td className="font-semibold">{totalPages}</td>
                                    </tr>
                                    <tr>
                                        <td>Publisher:</td>
                                        <td className="font-semibold">{publisher}</td>
                                    </tr>
                                    <tr>
                                        <td className="text-left pr-16 py-3">Year of Publishing:</td>
                                        <td className="font-semibold">{yearOfPublishing}</td>
                                    </tr>
                                    <tr>
                                        <td>Rating:</td>
                                        <td className="font-semibold">{rating}</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div className="mt-5 flex gap-2">
                            <button onClick={() => handleAddToReadList(bookId)} className="btn bg-[#23BE0A] px-6 py-6 text-base rounded-lg text-white">Read</button>
                            <button onClick={() => handleAddToWishList(bookId)} className="btn bg-[#59C6D2] px-6 py-6 text-base rounded-lg text-white">WishList</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BookDetails;