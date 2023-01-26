import React from "react";
import { IoLocationOutline } from "react-icons/io5";
import { GoMail } from "react-icons/go";
import { FiPhoneCall } from "react-icons/fi";
import { ContactInfoCard } from "@/types/Global.types";
import contactStyles from "@/styles/globalStyles/Contact.module.css";

const ContactInfoCard = ({ icon, title, text }: ContactInfoCard) => {
  return (
    <div className={contactStyles.contactInfoCard}>
      {icon === "location" ? (
        <IoLocationOutline className={contactStyles.icon} />
      ) : icon === "phone" ? (
        <FiPhoneCall className={contactStyles.icon} />
      ) : (
        <GoMail className={contactStyles.icon} />
      )}
      <div>
        <h3>{title}</h3>
        {icon === "phone" ? <a href="tel:+3670-338-4734">{text}</a> : <h5>{text}</h5>}
      </div>
    </div>
  );
};

export default ContactInfoCard;
