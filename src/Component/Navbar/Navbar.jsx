import { Link, NavLink } from "react-router-dom";
const Navbar = () => {
    const { link1, link2, link3 } = {
        link1: 'Home',
        link2: 'Listed Books',
        link3: 'Pages to Read'
    }
    return (
        <div className="navbar bg-base-100 z-50">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <div
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                        <NavLink to={'/'} className="text-lg px-3 py-2 hover:text-[#23BE0A]">{link1}</NavLink>
                        <NavLink to={'/listedBooks'} className="text-lg px-3 py-2 hover:text-[#23BE0A]">{link2}</NavLink>
                        <NavLink to={'/pagesToRead'} className="text-lg px-3 py-2 hover:text-[#23BE0A]">{link3}</NavLink>
                    </div>
                </div>
                <Link to={'/'} className="text-lg font-semibold md:text-xl">BookNest</Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    <NavLink to={'/'} className="text-lg px-3 py-2 hover:text-[#23BE0A]">{link1}</NavLink>
                    <NavLink to={'/listedBooks'} className="text-lg px-3 py-2 hover:text-[#23BE0A]">{link2}</NavLink>
                    <NavLink to={'/pagesToRead'} className="text-lg px-3 py-2 hover:text-[#23BE0A]">{link3}</NavLink>
                </ul>
            </div>
            <div className="navbar-end flex md:gap-2">
                <button className="btn bg-[#23BE0A] px-2 md:px-6 md:py-6 md:text-base rounded-lg text-white">Sign In</button>
                <button className="btn bg-[#59C6D2] px-2 md:px-6 md:py-6 md:text-base rounded-lg text-white">Sign Up</button>
            </div>
        </div>
    );
};

export default Navbar;