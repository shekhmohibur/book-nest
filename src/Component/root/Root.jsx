import { Outlet } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Footer from '../footer/Footer'

const Root = () => {
    return (
        <div className="flex flex-col min-h-screen container  mx-auto">
            <Navbar></Navbar>
        <div className="flex-grow mt-3"> 
            <Outlet></Outlet>
        </div>       
            <Footer></Footer>
        </div>
    );
};

export default Root;