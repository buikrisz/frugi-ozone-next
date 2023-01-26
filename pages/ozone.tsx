import Layout from "@/components/layoutComponents/Layout";
import { OzoneIntroductionSection, OzoneLandingSection, OzoneServicesSection } from "@/components/ozoneServicesComponents/sections";
import { ContactType } from "@/types/Global.types";

const Ozone = () => {
  return (
    <Layout contactType={ContactType.OZONE}>
      <OzoneLandingSection />
      <OzoneIntroductionSection />
      <OzoneServicesSection />
    </Layout>
  );
};

export default Ozone;
