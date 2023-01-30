import { useCallback } from "react";
import Image from "next/image";
import { FaTimes } from "react-icons/fa";
import { PestServiceDetails } from "@/types/PestServices.types";
import pestServiceDetailStyles from "@/styles/pestServicesStyles/PestServiceDetail.module.css";
import Link from "next/link";

const PestServiceDetails = ({ img, title, text, setShowDetails }: PestServiceDetails) => {
  const handleCloseOnBackground = useCallback(
    (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
      (e.target as Element).classList.contains(pestServiceDetailStyles.serviceDetailsBg) && setShowDetails({ show: false, id: 0 });
    },
    [setShowDetails]
  );

  const handleCloseButton = useCallback(() => setShowDetails({ show: false, id: 0 }), [setShowDetails]);

  return (
    <div className={pestServiceDetailStyles.serviceDetailsBg} onClick={handleCloseOnBackground}>
      <div className={pestServiceDetailStyles.serviceDetails}>
        <button onClick={handleCloseButton}>
          <FaTimes className={pestServiceDetailStyles.icon} />
        </button>
        <Image src={img} alt={img.src} />
        <h4 itemProp="name">{title}</h4>
        <h6 itemProp="description">{text}</h6>
        <Link href="/szolgaltatasok">További információk</Link>
      </div>
    </div>
  );
};

export default PestServiceDetails;
