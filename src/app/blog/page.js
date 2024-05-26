import BlogSection from "~/components/Section/Blog/BlogSection";
import Footer from "~/components/Section/Common/Footer";
import PageHeader from "~/components/Section/Common/PageHeader";
import Header from "~/components/Section/Common/Header/Header";


const BlogPage = () => {
  return (
    <>
      <Header />
      <PageHeader title="Our Blog" />
      <BlogSection />
      <Footer />
    </>
  );
};

export default BlogPage;
