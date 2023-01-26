import { MdFileDownload } from "react-icons/md";
import { PdfProps } from "@/types/PestServices.types";
import pdfStyles from "@/styles/pestServicesStyles/Pdfs.module.css";

const Pdfs = ({ setShowPdfs }: PdfProps) => {
  const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
    (e.target as Element).classList.contains(pdfStyles.pdfBg) && setShowPdfs(false);
  };

  return (
    <div className={pdfStyles.pdfBg} onClick={handleClick}>
      <div className={pdfStyles.pdfContainer}>
        <h3>Biztonsági tájékoztatók</h3>
        <div>
          <MdFileDownload className={pdfStyles.pdfIcon} />
          <a href="/pdf/BIOPREN-csotanyirto-gel_hu.pdf" download="BIOPREN-csotanyirto-gel_hu">
            BIOPREN csótányirtó gél
          </a>
        </div>
        <div>
          <MdFileDownload className={pdfStyles.pdfIcon} />
          <a href="/pdf/BIOPREN-hangyairto-gel_hu.pdf" download="BIOPREN-hangyairto-gel_hu">
            BIOPREN hangyairtó gél
          </a>
        </div>
        <div>
          <MdFileDownload className={pdfStyles.pdfIcon} />
          <a href="/pdf/Gokilaht_10MC_rovarirto_koncentratum_hu_v1.pdf" download="Gokilaht_10MC_rovarirto_koncentratum_hu_v1">
            Gokilaht 10MC rovarirtó koncentrátum
          </a>
        </div>
        <div>
          <MdFileDownload className={pdfStyles.pdfIcon} />
          <a href="/pdf/PESTSTOP_10EC_rovarirto_koncentratum.pdf" download="PESTSTOP_10EC_rovarirto_koncentratum">
            PESTSTOP 10EC rovarirtó koncentrátum
          </a>
        </div>
        <div>
          <MdFileDownload className={pdfStyles.pdfIcon} />
          <a href="/pdf/PestStop_Combi_8_CS_rovarirto_koncentratum_hu_v7.pdf" download="PestStop_Combi_8_CS_rovarirto_koncentratum_hu_v7">
            PestStop Combi 8 CS rovarirtó koncentrátum
          </a>
        </div>
        <div>
          <MdFileDownload className={pdfStyles.pdfIcon} />
          <a href="/pdf/PROTECT-PRO-paraffinos-ragcsaloirto-blokk_hu.pdf" download="PROTECT-PRO-paraffinos-ragcsaloirto-blokk_hu">
            PROTECT PRO paraffinos rágcsálóirtó blokk
          </a>
        </div>
        <div>
          <MdFileDownload className={pdfStyles.pdfIcon} />
          <a href="/pdf/ANTIVESPE_darazsirto_aeroszol_biztonsagi_adatlap_doc.pdf" download="ANTIVESPE_darazsirto_aeroszol_biztonsagi_adatlap_doc">
            ANTIVESPE darázsirtó aeroszol
          </a>
        </div>
        <div>
          <MdFileDownload className={pdfStyles.pdfIcon} />
          <a href="/pdf/Bombex_Farumy.pdf" download="Bombex_Farumy">
            Bombex Farumy
          </a>
        </div>
        <div>
          <MdFileDownload className={pdfStyles.pdfIcon} />
          <a href="/pdf/Protect_darazsirto_aeroszol_hu_v5.pdf" download="Protect_darazsirto_aeroszol_hu_v5">
            Protect darázsirtó aeroszol
          </a>
        </div>
        <div>
          <MdFileDownload className={pdfStyles.pdfIcon} />
          <a href="/pdf/PROTECTr_Forte_rovarirto_porozoszer_hu_v3.pdf" download="PROTECTr_Forte_rovarirto_porozoszer_hu_v3">
            PROTECTr Forte rovarirtó porozószer
          </a>
        </div>
        <div>
          <MdFileDownload className={pdfStyles.pdfIcon} />
          <a href="/pdf/BIOPREN_6_EC_agyi_poloska-es_bolhairto_koncentratum_hu_v7.pdf" download="BIOPREN_6_EC_agyi_poloska-es_bolhairto_koncentratum_hu_v7">
            BIOPREN 6 EC ágyi poloska- és bolhairtó koncentrátum
          </a>
        </div>
        <div>
          <MdFileDownload className={pdfStyles.pdfIcon} />
          <a href="/pdf/Deltasect_HU4.pdf" download="Deltasect_HU4">
            Deltasect
          </a>
        </div>
        <div>
          <MdFileDownload className={pdfStyles.pdfIcon} />
          <a href="/pdf/PESGUARD-B_koncentratum_MSDS_3v_160601.pdf" download="PESGUARD-B_koncentratum_MSDS_3v_160601">
            PESGUARD-B koncentrátum MSDS
          </a>
        </div>
        <div>
          <MdFileDownload className={pdfStyles.pdfIcon} />
          <a href="/pdf/msds-Aquapy-Rovarirto-koncentratum-CLP-11789.pdf" download="msds-Aquapy-Rovarirto-koncentratum-CLP-11789">
            MSDS Aquapy Rovarirtó koncentrátum
          </a>
        </div>
        <div>
          <MdFileDownload className={pdfStyles.pdfIcon} />
          <a href="/pdf/Dk-10.2-Rovarirto-Koncentratum_hu_v4.pdf" download="Dk-10.2-Rovarirto-Koncentratum_hu_v4">
            Dk 10.2 Rovarirtó koncentrátum
          </a>
        </div>
        <div className="lastDiv">
          <MdFileDownload className={pdfStyles.pdfIcon} />
          <a href="/pdf/cleankill.pdf" download="cleankill">
            Cleankill
          </a>
        </div>
      </div>
    </div>
  );
};

export default Pdfs;
