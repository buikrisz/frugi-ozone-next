import image from "@/images/pest_control.png";
import Image from "next/image";
import { LandingForm } from "@/components/globalComponents/widgets";
import pestLandingStyles from "@/styles/pestServicesStyles/PestLanding.module.css";

const PestLandingSection = () => {
  return (
    <section id="kezdolap" className={pestLandingStyles.kezdolap}>
      <div className={pestLandingStyles.landingContent}>
        <div className={pestLandingStyles.landingTextImg}>
          <div className={pestLandingStyles.landingText}>
            <h2 className={pestLandingStyles.landingTitle}>Lakások védelme a váratlan betolakodóktól</h2>
            <h5 className={pestLandingStyles.landingSubtitle}>
              Ágyi poloska-, csótány-, kártevőirtás magánszemélyeknek, közintézményeknek és vállalkozásoknak
            </h5>
          </div>
          <Image src={image} alt="Pest Control" />
        </div>
        <LandingForm />
      </div>
    </section>
  );
};

export default PestLandingSection;
