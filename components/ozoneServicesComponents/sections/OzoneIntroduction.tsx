import windIcon from "@/images/wind_icon.png";
import Image from "next/image";
import ozoneIntroductionStyles from "@/styles/ozoneServicesStyles/OzoneIntroduction.module.css";

const OzoneIntroductionSection = () => {
  return (
    <section id="rolunk" className={ozoneIntroductionStyles.ozoneIntroductionSection}>
      <div className={ozoneIntroductionStyles.ozoneIntroductionTitleDiv}>
        <Image src={windIcon} alt="Wind Icon" className={`${ozoneIntroductionStyles.windIcon} ${ozoneIntroductionStyles.windLeftIcon}`} />
        <div>
          <h3 className={ozoneIntroductionStyles.title}>Miért minket válasszon?</h3>
          <h4>- Ügyfeleink elégedettsége az első -</h4>
          <h5>- Alapos, minőségi munkát végzünk -</h5>
        </div>
        <Image src={windIcon} alt="Wind Icon" className={`${ozoneIntroductionStyles.windIcon} ${ozoneIntroductionStyles.windRightIcon}`} />
      </div>
      <div className={ozoneIntroductionStyles.ozoneIntroductionContent}>
        <div className={ozoneIntroductionStyles.ozoneIntroductionContentCard}>
          <h3>Kik vagyunk?</h3>
          <h6>
            Cégünk kártevőirtással, vegyszeres- illetve ózongenerátoros fertőtlenítéssel foglalkozik. Szakképzett kollégáink minőségi munkájukkal egy tiszta- és
            egészséges légkört teremtenek meg ügyfeleink számára.
          </h6>
        </div>
        <div className={ozoneIntroductionStyles.ozoneIntroductionContentCard}>
          <h3>Mi a célunk?</h3>
          <h6>
            Célunk, hogy felhívjuk ügyfeleink figyelmét az egészséges környezet kialakításának fontosságára, és az ennek hiányából fakadó veszélyekre. A COVID
            járványból tanulva, mindenkinek érdemes magasabb hangsúlyt fektetni a vírusok és baktériumok elleni védelemre.
          </h6>
        </div>
        <div className={ozoneIntroductionStyles.ozoneIntroductionContentCard}>
          <h3>Hogyan segítünk?</h3>
          <h6>
            Minőségi tisztítást végzünk, vegyszeres- illetve ózongenerátoros megoldással is. Csak magyar nyelvű CE megfelelőségi nyilatkozatú eszközöket
            használunk, melyhez biztonsági adatlapot is biztosít a gyártó.
          </h6>
        </div>
      </div>
    </section>
  );
};

export default OzoneIntroductionSection;
