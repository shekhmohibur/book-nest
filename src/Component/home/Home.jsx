import { useLoaderData } from "react-router-dom";
import Books from "../books/Books";
import Hero from "../hero/Hero";
const Home = () => {
    const allBooks = useLoaderData();
    console.log(allBooks)
    return (
        <div>
            <Hero></Hero>
            <div>
                <h1 className="text-center text-3xl font-semibold mt-10 mb-5 font-[PlayfairDisplay]">Books</h1>
                <Books
                allBooks={allBooks}
                ></Books>
            </div>
        </div>
    );
};

export default Home;