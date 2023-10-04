import Header from "@/layout/header";
import Footer from "@/layout/footer";

function Layout({ children }) {
  const style = { minHeight: "700px" };
  return (
    <>
      <Header />
      <div className={style}>{children}</div>
      <Footer />
    </>
  );
}

export default Layout;
