import { useState } from "react";
import { PestServiceCard, PestServiceDetails } from "../widgets";
import { ShowDetailsState } from "@/types/PestServices.types";
import { ServiceProps } from "@/types/Global.types";
import pestServicesStyles from "@/styles/pestServicesStyles/PestServices.module.css";

const PestServices = ({ services }: ServiceProps) => {
  const [showDetails, setShowDetails] = useState<ShowDetailsState>({
    show: false,
    id: 0,
  });

  return (
    <div id="szolgaltatasok" className={pestServicesStyles.pestServicesSection}>
      <h3 className={pestServicesStyles.title}>Szolgáltatásaink</h3>
      <div className={pestServicesStyles.serviceCards}>
        {services?.map((service) => (
          <PestServiceCard key={service.id} id={service.id} img={service.img} title={service.title} intro={service.intro} setShowDetails={setShowDetails} />
        ))}
      </div>
      {showDetails.show && (
        <PestServiceDetails
          img={services[showDetails.id].img}
          title={services[showDetails.id].title}
          text={services[showDetails.id].text}
          setShowDetails={setShowDetails}
        />
      )}
    </div>
  );
};

export default PestServices;
