const Footer = () => {
    return (
        <footer className="footer sm:footer-horizontal footer-center mt-4 text-base-content p-4">
            <aside>
                <p>Copyright © {new Date().getFullYear()} - All right reserved by BookNest</p>
            </aside>
        </footer>
    );
};

export default Footer;