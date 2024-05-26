import CtaTwo from "~/components/Section/Common/Cta-2/CtaTwo";
import FooterTwo from "~/components/Section/Common/Footer-2/FooterTwo";
import IntegrationSection from "~/components/Section/Common/Integration/Integration";
import BrandSection from "~/components/Section/Home-2/Brand/Brand";
import ContentSectionOne from "~/components/Section/Home-2/Content/ContentOne";
import ContentSectionTwo from "~/components/Section/Home-2/Content/ContentTwo";
import FeatureSection from "~/components/Section/Home-2/Feature/Feature";
import HeroSection from "~/components/Section/Home-2/Hero/Hero";
import PricingSection from "~/components/Section/Home-2/Pricing/Pricing";
import TestimonialSection from "~/components/Section/Home-2/Testimonial/Testimonial";
import HomeHeaderTwo from "~/components/Section/Common/Header/HomeHeaderTwo";


export default function HomeTwoPage() {
  return (
    <>
      <HomeHeaderTwo />
      <HeroSection />
      <BrandSection />
      <FeatureSection />
      <TestimonialSection />
      <ContentSectionOne />
      <ContentSectionTwo />
      <PricingSection />
      <IntegrationSection />
      <CtaTwo />
      <FooterTwo />
    </>
  );
}
