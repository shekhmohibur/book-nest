import { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { getStoredReadList } from '../../utility/ReadListDb';
import ListedBook from '../bookDetails/ListedBook';
import { getStoredWishList } from '../../utility/WishListDm';
const ListedBooks = () => {
    const allBooks = useLoaderData();
    const [readList, setReadList] = useState([]);
    const [wishList, setWishList] = useState([]);
    useEffect(() => {
        const storedList = getStoredReadList();
        const storedListInt = storedList.map(id => parseInt(id))
        const storedListIncludes = allBooks.filter(book => storedListInt.includes(book.bookId));
        setReadList(storedListIncludes)
    }, [])
    useEffect(() => {
        const storedList = getStoredWishList();
        const storedListInt = storedList.map(id => parseInt(id))
        const storedListIncludes = allBooks.filter(book => storedListInt.includes(book.bookId));
        setWishList(storedListIncludes)
    }, [])
    return (
        <div>
            <div className='bg-base-300 py-5 text-center text-2xl font-semibold rounded-xl'>
                <h1>Books</h1>                
            </div>
            <div>
                <p>sorting</p>
            </div>
            <Tabs>
                <TabList>
                    <Tab>Read Books</Tab>
                    <Tab>WishList Books</Tab>
                </TabList>
                <TabPanel>
                    <div className='flex flex-col gap-3'>
                        {
                            readList.map(book => <ListedBook
                            book={book}
                            key={book.bookId}
                            ></ListedBook>)
                        }
                    </div>
                </TabPanel>
                <TabPanel>
                    <div className='flex flex-col gap-3'>
                        {
                            wishList.map(book => <ListedBook
                            book={book}
                            key={book.bookId}
                            ></ListedBook>)
                        }
                    </div>
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default ListedBooks;