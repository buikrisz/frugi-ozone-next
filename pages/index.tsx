import { useState } from "react";
import Head from "next/head";
import Layout from "@/components/layoutComponents/Layout";
import { PestIntroduction, PestLandingSection, PestServices } from "@/components/pestServicesComponents/sections";
import { CgFileDocument } from "react-icons/cg";
import { ContactType } from "@/types/Global.types";
import Pdfs from "@/components/pestServicesComponents/widgets/Pdfs";

const Home = () => {
  const [showPdfs, setShowPdfs] = useState(false);

  return (
    <>
      <Head>
        <title>FrugiOzone Kártevőirtás</title>
        <meta
          name="description"
          content="Hatékony és tartós kártevőirtás. Szabaduljon meg az ágyi poloska, csótány, rágcsálók, darázs, hangya és moly okozta kellemetlenségektől. Cégünk szakemberei minőségi irtószerekkel teszik kellemesebbé mindennapjaikat."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout contactType={ContactType.PEST}>
        <PestLandingSection />
        <PestIntroduction />
        <PestServices />
        <button className="pdf" onClick={() => setShowPdfs(!showPdfs)}>
          <CgFileDocument className="pdfIcon" />
        </button>
        {showPdfs && <Pdfs setShowPdfs={setShowPdfs} />}
      </Layout>
    </>
  );
};

export default Home;
