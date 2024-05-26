import PageHeader from "~/components/Section/Common/PageHeader";
import Footer from "~/components/Section/Common/Footer";
import PortfolioDetailsSection from "~/components/Section/SinglePortfolio/PortfolioDetails/PortfolioDetails";
import Header from "~/components/Section/Common/Header/Header";

export default function SinglePortfolioPage() {
  return (
    <>
      <Header />
      <PageHeader title="Portfolio Details" />
      <PortfolioDetailsSection />
      <Footer />
    </>
  );
}
