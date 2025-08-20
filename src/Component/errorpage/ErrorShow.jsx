import { Link } from "react-router-dom";

const ErrorShow = () => {
    return (
        <div className="w-full flex justify-center items-center h-screen flex-col">
            <img src="https://st4.depositphotos.com/5686152/27322/v/450/depositphotos_273220330-stock-illustration-sorry-page-found-404-error.jpg" alt="error image" 
            />
            <Link to={'/'}><button className="px-5 py-2 rounded-md text-white font-semibold bg-[#23BE0A] text-2xl hover:bg-green-600 transition-all ease-in-out">Home</button></Link>
        </div>
    );
};

export default ErrorShow;