import { useEffect, useState } from "react";
import Head from "next/head";
import Layout from "@/components/layoutComponents/Layout";
import { PestIntroduction, PestLandingSection, PestServices } from "@/components/pestServicesComponents/sections";
import { CgFileDocument } from "react-icons/cg";
import { server } from "@/config";
import { ContactType, ServiceProps, Services } from "@/types/Global.types";
import Pdfs from "@/components/pestServicesComponents/widgets/Pdfs";

const Home = ({ services }: ServiceProps) => {
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
        <PestServices services={services} />
        <button className="pdf" onClick={() => setShowPdfs(!showPdfs)}>
          <CgFileDocument className="pdfIcon" />
        </button>
        {showPdfs && <Pdfs setShowPdfs={setShowPdfs} />}
      </Layout>
    </>
  );
};

export const getStaticProps = async () => {
  const res = await fetch(`${server}/api/services`);

  const services: Services[] = await res.json();

  return {
    props: { services },
  };
};

export default Home;
