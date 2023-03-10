import { useState } from "react";
import { ContactForm, ContactInfoCard } from "../widgets";
import { ContactFormData, ContactIcon, ContactSectionData } from "@/types/Global.types";
import contactStyles from "@/styles/globalStyles/Contact.module.css";

const ContactSection = ({ contactType }: ContactSectionData) => {
  const [formData, setFormData] = useState<ContactFormData>({
    contactName: "",
    contactPhone: "",
    contactMail: "",
    contactService: "",
    contactMessage: "",
    contactPrivacyPolicy: false,
  });

  const [formSubmitted, setFormSubmitted] = useState(false);
  const [mailSent, setMailSent] = useState(false);
  const [animationStarted, setAnimationStarted] = useState(false);

  return (
    <section id="kapcsolat" className={contactStyles.kapcsolat}>
      <div className={contactStyles.contactInfo}>
        <h3 className={contactStyles.title}>Kapcsolat</h3>
        <div className={contactStyles.contactInfoCards}>
          <ContactInfoCard icon={ContactIcon.LOCATION} title="Iroda cím" text="2120, Dunakeszi Mária utca 23." />
          <ContactInfoCard icon={ContactIcon.PHONE} title="Telefonszám" text="+36-70-338-4734" />
          <ContactInfoCard icon={ContactIcon.MAIL} title="E-mail cím" text="frugiozone@gmail.com" />
        </div>
      </div>
      <div className={contactStyles.formInfo}>
        {!mailSent && !animationStarted ? (
          <ContactForm
            formSubmitted={formSubmitted}
            setFormSubmitted={setFormSubmitted}
            formData={formData}
            setFormData={setFormData}
            setMailSent={setMailSent}
            setAnimationStarted={setAnimationStarted}
            contactType={contactType}
          />
        ) : !mailSent && animationStarted ? (
          <form className={contactStyles.contactForm}>
            <svg className="loader" viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg">
              <circle className="internalCircle" cx="60" cy="60" r="30"></circle>
              <circle className="externalCircle" cx="60" cy="60" r="50"></circle>
            </svg>
          </form>
        ) : (
          <form className={contactStyles.contactForm}>
            <h2 className={contactStyles.confirmationTxt}>
              Köszönjük!
              <br />
              <br /> Munkatársunk 24 órán belül válaszolni fog üzenetére!
            </h2>
          </form>
        )}
      </div>
    </section>
  );
};

export default ContactSection;
