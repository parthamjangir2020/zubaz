import PageHeader from "~/components/Section/Common/PageHeader";
import Footer from "~/components/Section/Common/Footer";
import Testimonial from "~/components/Section/Common/Testimonial";
import CtaThree from "~/components/Section/Common/Cta-3/CtaThree";
import Header from "~/components/Section/Common/Header/Header";


export default function TestimonialPage() {
  return (
    <>
      <Header />
      <PageHeader title="Testimonial" />
      <Testimonial button="false" />
      <CtaThree title="Still, you have any questions?" btnText="Contact Us" />
      <Footer />
    </>
  );
}
