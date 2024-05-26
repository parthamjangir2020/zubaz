import FAQSection from "~/components/Section/Common/FAQ/FAQSection";
import Footer from "~/components/Section/Common/Footer";
import PageHeader from "~/components/Section/Common/PageHeader";
import CallUs from "~/components/Section/ContactUs/CallUs";
import ContactSection from "~/components/Section/ContactUs/Contact/ContactSection";
import Header from "~/components/Section/Common/Header/Header";


const ContactUsPage = () => {
  return (
    <>
      <Header />
      <PageHeader title="Contact Us" />
      <ContactSection />
      <CallUs />
      <FAQSection />
      <Footer />
    </>
  );
};

export default ContactUsPage;
