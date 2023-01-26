import { useCallback, useState } from "react";
import { HiPlusCircle } from "react-icons/hi";
import { BsCheck2Circle } from "react-icons/bs";
import about_us from "@/images/about_us.jpg";
import tools from "@/images/tools.jpg";
import Image from "next/image";
import pestIntroductionStyles from "@/styles/pestServicesStyles/PestIntroduction.module.css";

const PestIntroduction = () => {
  const [showTools, setShowTools] = useState(false);

  const showToolsOnClick = useCallback(() => setShowTools(true), [setShowTools]);
  const hideToolsOnClick = useCallback(() => setShowTools(false), [setShowTools]);

  return (
    <section id="rolunk" className={pestIntroductionStyles.pestIntroductionSection}>
      <h3 className={pestIntroductionStyles.title}>Miért minket válasszon?</h3>
      <div className={pestIntroductionStyles.content}>
        <div className={`${pestIntroductionStyles.contentSeparator} ${pestIntroductionStyles.leftContent}`}>
          <button className={pestIntroductionStyles.left} onClick={showToolsOnClick}>
            <h4>Teljes felszereltség</h4>
            <HiPlusCircle className={pestIntroductionStyles.icon} />
          </button>
          <div className={pestIntroductionStyles.imgDiv}>
            <Image
              src={about_us}
              alt="About us"
              className={`${showTools ? `${pestIntroductionStyles.aboutUs} ${pestIntroductionStyles.hide}` : pestIntroductionStyles.aboutUs} `}
            />
            <Image
              src={tools}
              alt="About us"
              className={`${showTools ? pestIntroductionStyles.toolsImg : `${pestIntroductionStyles.toolsImg} ${pestIntroductionStyles.hide}`} `}
            />
          </div>
          <button className={pestIntroductionStyles.right} onClick={hideToolsOnClick}>
            <HiPlusCircle className={pestIntroductionStyles.icon} />
            <h4>Kiemelkedő szolgáltatás</h4>
          </button>
        </div>
        <div className={`${pestIntroductionStyles.contentSeparator} ${pestIntroductionStyles.rightContent}`}>
          <h2>FrugiOzone Kártevőirtás</h2>
          <h3>Legjobb minőségű szolgáltatásokat biztosítjuk kártevő problémáira!</h3>
          <div>
            <BsCheck2Circle className={pestIntroductionStyles.check} />
            <h4>Szakképzett kollégáink minőségi szolgáltatást biztosítanak, ügyfeleink elégedettségét és biztonságát szem előtt tartva</h4>
          </div>
          <div>
            <BsCheck2Circle className={pestIntroductionStyles.check} />
            <h4>
              Hatékony, környezetbarát szereket használunk a rovarírtáshoz, melyeknek biztonsági adatlapjait{" "}
              <a href="/dokumentumok.html" className={pestIntroductionStyles.linkToDocs}>
                itt
              </a>{" "}
              találhatják meg
            </h4>
          </div>
          <div>
            <BsCheck2Circle className={pestIntroductionStyles.check} />
            <h4>Fő szolgáltatásaink: ágyi poloska irtás, csótányirtás, rágcsáló irtás, darázs irtás, hangyairtás, molyirtás</h4>
          </div>
          <div>
            <BsCheck2Circle className={pestIntroductionStyles.check} />
            <h4>
              Vállaljuk magánházak, lakások, társasházak, vendéglátóhelyek, szálláshelyek, üzletek, iparterületek, raktárak kötelező, egyedi és rendszeres
              (HACCP) kártevőirtását.
            </h4>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PestIntroduction;
