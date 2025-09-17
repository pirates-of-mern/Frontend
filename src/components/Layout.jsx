import { useLocation } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

const Layout = ({ children, setSearchTerm }) => {
  const location = useLocation();
  const hideHeaderFooter = location.pathname === "/chatbot";

  return (
    <>
      {!hideHeaderFooter && <Header setSearchTerm={setSearchTerm} />}
      <main className="flex flex-col min-h-screen">{children}</main>
      {!hideHeaderFooter && <Footer />}
    </>
  );
};

export default Layout;
