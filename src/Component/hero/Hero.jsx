import { Link } from "react-router-dom";

const Hero = () => {
    return (
        <div className="hero bg-base-200 py-10">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img
                    src="/src/assets/images/books.jpg"
                    className="max-w- rounded-lg shadow-2xl"
                />
                <div className="flex flex-col gap-8">
                    <h1 className="text-5xl md:text-6xl font-bold font-[PlayfairDisplay]">Books to freshen up your bookshelf</h1>
                    <Link to={'/listedBooks'}><button className="btn bg-[#23BE0A] text-white text-lg md:text-2xl py-6 md:p-8 px-5 rounded-lg mt-2">View The List</button></Link>
                </div>
            </div>
        </div>
    );
};

export default Hero;