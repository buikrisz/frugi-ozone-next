import Image from "next/image";
import pestServiceCardStyles from "@/styles/pestServicesStyles/PestServiceCard.module.css";
import { ServiceCard } from "@/types/PestServices.types";

const ServiceCard = ({
  id,
  img,
  title,
  intro,
  setShowDetails,
}: ServiceCard) => {
  return (
    <div
      className={pestServiceCardStyles.serviceCard}
      onClick={() => setShowDetails({ show: true, id })}
    >
      <Image src={img} alt={img.src} />
      <h4>{title}</h4>
      <h6>{intro}</h6>
      <button>Több</button>
    </div>
  );
};

export default ServiceCard;
