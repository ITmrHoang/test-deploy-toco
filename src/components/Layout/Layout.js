import Header from "./HeaderGlobal/Header";
import Footer from "./FooterGlobal/Footer";

const Layout = ({ children }) => {
    return (
        <>
            <Header />
            <div>{children}</div>
            <Footer />
        </>
    );
};

export default Layout;
