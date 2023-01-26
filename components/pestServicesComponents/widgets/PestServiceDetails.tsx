import { FaTimes } from "react-icons/fa";
import Image from "next/image";
import pestServiceDetailStyles from "@/styles/pestServicesStyles/PestServiceDetail.module.css";
import { PestServiceDetails } from "@/types/PestServices.types";
import React, {
  DetailedHTMLProps,
  HTMLAttributes,
  MouseEventHandler,
} from "react";

const PestServiceDetails = ({
  img,
  title,
  text,
  setShowDetails,
}: PestServiceDetails) => {
  const handleClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    (e.target as Element).classList.contains(
      pestServiceDetailStyles.serviceDetailsBg
    ) && setShowDetails({ show: false, id: 0 });
  };

  return (
    <div
      itemScope
      itemType="https://schema.org/ProfessionalService"
      className={pestServiceDetailStyles.serviceDetailsBg}
      onClick={handleClick}
    >
      <div className={pestServiceDetailStyles.serviceDetails}>
        <button onClick={(e) => setShowDetails({ show: false, id: 0 })}>
          <FaTimes className={pestServiceDetailStyles.icon} />
        </button>
        <Image src={img} alt={img.src} />
        <h4 itemProp="name">{title}</h4>
        <h6 itemProp="description">{text}</h6>
        <a href="/szolgaltatasok.html">További információk</a>
      </div>
    </div>
  );
};

export default PestServiceDetails;
