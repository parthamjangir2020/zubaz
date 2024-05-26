import Footer from "~/components/Section/Common/Footer";
import PageHeader from "~/components/Section/Common/PageHeader";
import SingleBlogSection from "~/components/Section/SingleBlog/SingleBlogSection";
import Header from "~/components/Section/Common/Header/Header";

const SingleBlogPage = () => {
  return (
    <>
      <Header />
      <PageHeader title="Our Blog" />
      <SingleBlogSection />
      <Footer />
    </>
  );
};

export default SingleBlogPage;
