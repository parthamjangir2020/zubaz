import PageHeader from "~/components/Section/Common/PageHeader";
import Footer from "~/components/Section/Common/Footer";
import Header from "~/components/Section/Common/Header/Header";
import PortfolioClassic from "~/components/Section/Portfolio/Classic/PortfolioClassic";


export default function PortfolioClassicPage() {
  return (
    <>
      <Header />
      <PageHeader title="Portfolio Classic" />
      <PortfolioClassic />
      <Footer />
    </>
  );
}
