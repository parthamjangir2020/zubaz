import PageHeader from "~/components/Section/Common/PageHeader";
import Footer from "~/components/Section/Common/Footer";
import PricingSection from "~/components/Section/Common/Pricing/Pricing";
import PricingSectionTwo from "~/components/Section/Pricing/Pricing-2/Pricing";
import Header from "~/components/Section/Common/Header/Header";


export default function PricingPage() {
  return (
    <>
      <Header />
      <PageHeader title="Our Pricing Plan" />
      <PricingSection />
      <PricingSectionTwo />
      <Footer />
    </>
  );
}
