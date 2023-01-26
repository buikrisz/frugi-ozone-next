import { IoLocationOutline } from "react-icons/io5";
import { GoMail } from "react-icons/go";
import { FiPhoneCall } from "react-icons/fi";
import { ContactIcon, ContactInfoCard } from "@/types/Global.types";
import contactStyles from "@/styles/globalStyles/Contact.module.css";

const ContactInfoCard = ({ icon, title, text }: ContactInfoCard) => {
  return (
    <div className={contactStyles.contactInfoCard}>
      {icon === ContactIcon.LOCATION ? (
        <IoLocationOutline className={contactStyles.icon} />
      ) : icon === ContactIcon.PHONE ? (
        <FiPhoneCall className={contactStyles.icon} />
      ) : (
        <GoMail className={contactStyles.icon} />
      )}
      <div>
        <h3>{title}</h3>
        {icon === ContactIcon.PHONE ? <a href="tel:+3670-338-4734">{text}</a> : <h5>{text}</h5>}
      </div>
    </div>
  );
};

export default ContactInfoCard;
