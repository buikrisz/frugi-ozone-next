import { useCallback } from "react";
import Image from "next/image";
import { ServiceCardType } from "@/types/PestServices.types";
import pestServiceCardStyles from "@/styles/pestServicesStyles/PestServiceCard.module.css";

const ServiceCard = ({ id, img, title, intro, setShowDetails }: ServiceCardType) => {
  const onClick = useCallback(() => setShowDetails({ show: true, id }), [id, setShowDetails]);

  return (
    <div className={pestServiceCardStyles.serviceCard} onClick={onClick}>
      <Image src={img} alt={img.src} />
      <h4>{title}</h4>
      <h6>{intro}</h6>
      <button>Több</button>
    </div>
  );
};

export default ServiceCard;
