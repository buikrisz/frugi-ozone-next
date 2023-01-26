import Link from "next/link";
import documentsStyles from "@/styles/documentsStyles/Documents.module.css";
import { FaHome } from "react-icons/fa";

const dokumentumok = () => {
  return (
    <>
      <header className={documentsStyles.header}>
        <Link href="/" className={documentsStyles.backArrow}>
          <FaHome />
        </Link>
      </header>
      <div className={documentsStyles.content}>
        <h2>Dokumentumok</h2>
        <div id="docs">
          <h4>Biztonsági adatlapok</h4>
          <a href="/pdf/BIOPREN-csotanyirto-gel_hu.pdf" target="_blank">
            BIOPREN csótányirtó gél
          </a>
          <a href="/pdf/BIOPREN-hangyairto-gel_hu.pdf" target="_blank">
            BIOPREN hangyairtó gél
          </a>
          <a href="/pdf/Gokilaht_10MC_rovarirto_koncentratum_hu_v1.pdf" target="_blank">
            Gokilaht 10MC rovarirtó koncentrátum
          </a>
          <a href="/pdf/PESTSTOP_10EC_rovarirto_koncentratum.pdf" target="_blank">
            PESTSTOP 10EC rovarirtó koncentrátum
          </a>
          <a href="/pdf/PestStop_Combi_8_CS_rovarirto_koncentratum_hu_v7.pdf" target="_blank">
            PestStop Combi 8 CS rovarirtó koncentrátum
          </a>
          <a href="/pdf/PROTECT-PRO-paraffinos-ragcsaloirto-blokk_hu.pdf" target="_blank">
            PROTECT PRO paraffinos rágcsálóirtó blokk
          </a>
          <a href="/pdf/ANTIVESPE_darazsirto_aeroszol_biztonsagi_adatlap_doc.pdf" target="_blank">
            ANTIVESPE darázsirtó aeroszol
          </a>
          <a href="/pdf/Bombex_Farumy.pdf" target="_blank">
            Bombex Farumy
          </a>
          <a href="/pdf/cleankill.pdf" target="_blank">
            Cleankill
          </a>
          <a href="/pdf/Protect_darazsirto_aeroszol_hu_v5.pdf" target="_blank">
            Protect darázsirtó aeroszol
          </a>
          <a href="/pdf/PROTECTr_Forte_rovarirto_porozoszer_hu_v3.pdf" target="_blank">
            PROTECTr Forte rovarirtó porozószer
          </a>
          <a href="/pdf/BIOPREN_6_EC_agyi_poloska-es_bolhairto_koncentratum_hu_v7.pdf" target="_blank">
            BIOPREN 6 EC ágyi poloska-és bolhairtó koncentrátum
          </a>
          <a href="/pdf/Deltasect_HU4.pdf" target="_blank">
            Deltasect
          </a>
          <a href="/pdf/PESGUARD-B_koncentratum_MSDS_3v_160601.pdf" target="_blank">
            PESGUARD-B koncentrátum MSDS
          </a>
          <a href="/pdf/msds-Aquapy-Rovarirto-koncentratum-CLP-11789.pdf" target="_blank">
            MSDS Aquapy Rovarirtó koncentrátum
          </a>
          <a href="/pdf/Dk-10.2-Rovarirto-Koncentratum_hu_v4.pdf" target="_blank">
            Dk 10.2 Rovarirtó koncentrátum
          </a>
        </div>
        <h2>Hivatkozások</h2>
        <div id="icons">
          <h4>Felhasznált ikonok:</h4>
          <div className={documentsStyles.iconAnchorContainer}>
            <div className={documentsStyles.iconAnchors}>
              <a href="https://www.flaticon.com/free-icons/university" title="university icons" target="_blank" rel="noopener noreferrer">
                University icons created by Freepik - Flaticon
              </a>
              <a href="https://www.flaticon.com/free-icons/ambulance" title="ambulance icons" target="_blank" rel="noopener noreferrer">
                Ambulance icons created by Freepik - Flaticon
              </a>
              <a href="https://www.flaticon.com/free-icons/house" title="house icons" target="_blank" rel="noopener noreferrer">
                House icons created by Freepik - Flaticon
              </a>
              <a href="https://www.flaticon.com/free-icons/modern" title="modern icons" target="_blank" rel="noopener noreferrer">
                Modern icons created by Freepik - Flaticon
              </a>
              <a href="https://www.flaticon.com/free-icons/parasite" title="parasite icons" target="_blank" rel="noopener noreferrer">
                Parasite icons created by Darius Dan - Flaticon
              </a>
              <a href="https://www.flaticon.com/free-icons/parasite" title="parasite icons" target="_blank" rel="noopener noreferrer">
                Parasite icons created by Darius Dan - Flaticon
              </a>
              <a href="https://www.flaticon.com/free-icons/rat" title="rat icons" target="_blank" rel="noopener noreferrer">
                Rat icons created by IconMark - Flaticon
              </a>
              <a href="https://www.flaticon.com/free-icons/bee" title="bee icons" target="_blank" rel="noopener noreferrer">
                Bee icons created by Darius Dan - Flaticon
              </a>
            </div>
            <div className={documentsStyles.iconAnchors}>
              <a href="https://www.flaticon.com/free-icons/insect" title="insect icons" target="_blank" rel="noopener noreferrer">
                Insect icons created by Darius Dan - Flaticon
              </a>
              <a href="https://www.flaticon.com/free-icons/animal-kingdom" title="animal kingdom icons" target="_blank" rel="noopener noreferrer">
                Animal kingdom icons created by Darius Dan - Flaticon
              </a>
              <a href="https://www.flaticon.com/free-icons/factory" title="factory icons" target="_blank" rel="noopener noreferrer">
                Factory icons created by Smashicons - Flaticon
              </a>
              <a href="https://www.flaticon.com/free-icons/virus" title="virus icons" target="_blank" rel="noopener noreferrer">
                Virus icons created by Freepik - Flaticon
              </a>
              <a href="https://www.flaticon.com/free-icons/disinfectant" title="disinfectant icons" target="_blank" rel="noopener noreferrer">
                Disinfectant icons created by Freepik - Flaticon
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default dokumentumok;
