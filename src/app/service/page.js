import IntegrationSection from "~/components/Section/Common/Integration-2/IntegrationTwo";
import PageHeader from "~/components/Section/Common/PageHeader";
import Footer from "~/components/Section/Common/Footer";
import ServiceSection from "~/components/Section/Service/Service/Service";
import PricingSection from "~/components/Section/Common/Pricing/Pricing";
import Header from "~/components/Section/Common/Header/Header";


export default function ServicePage() {
  return (
    <>
      <Header />
      <PageHeader title="Our Services" />
      <ServiceSection />
      <PricingSection />
      <IntegrationSection />
      <Footer />
    </>
  );
}
