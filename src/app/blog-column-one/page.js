import Footer from "~/components/Section/Common/Footer";
import PageHeader from "~/components/Section/Common/PageHeader";
import Blog from "~/components/Section/blogColumnOne/Blog";
import Header from "~/components/Section/Common/Header/Header";

const BlogOnePage = () => {
  return (
    <>
      <Header />
      <PageHeader title="Our Blog" />
      <Blog />
      <Footer />
    </>
  );
};

export default BlogOnePage;
