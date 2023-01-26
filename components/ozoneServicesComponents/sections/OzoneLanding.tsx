import { LandingForm } from "@/components/globalComponents/widgets";
import Image from "next/image";
import image from "@/images/no-virus.png";
import ozoneLandingStyles from "@/styles/pestServicesStyles/PestLanding.module.css";

const OzoneLandingSection = () => {
  return (
    <section id="kezdolap" className={ozoneLandingStyles.kezdolap}>
      <div className={ozoneLandingStyles.landingContent}>
        <div className={ozoneLandingStyles.landingTextImg}>
          <div className={ozoneLandingStyles.landingText}>
            <h2 className={ozoneLandingStyles.landingTitle}>Tiszta és egészséges légkör megteremtése</h2>
            <h5 className={ozoneLandingStyles.landingSubtitle}>
              Fertőtlenítő szolgáltatás lakások, irodák, iskolák, egészségügyi intézmények és nagyobb terek tisztítására is
            </h5>
          </div>
          <Image src={image} alt="Pest Control" />
        </div>
        <LandingForm />
      </div>
    </section>
  );
};

export default OzoneLandingSection;
