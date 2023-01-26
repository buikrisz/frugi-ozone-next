import Layout from "@/components/layoutComponents/Layout";
import { PestIntroduction } from "@/components/pestServicesComponents/sections/PestIntroduction";
import PestLandingSection from "@/components/pestServicesComponents/sections/PestLanding";
import PestServices, { ServiceProps } from "@/components/pestServicesComponents/sections/PestServices";
import { server } from "@/config";
import { ContactType, Services } from "@/types/Global.types";
import Head from "next/head";

const Home = ({ services }: ServiceProps) => {
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
