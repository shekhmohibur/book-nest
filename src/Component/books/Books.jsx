import Book from '../book/Book'
const Books = ({allBooks}) => {
    console.log(allBooks)
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 w-fit mx-auto'>
            {
                allBooks.map(book => <Book 
                    book={book}
                    key={book.bookId}
                    ></Book>)
            }
        </div>
    );
};

export default Books;