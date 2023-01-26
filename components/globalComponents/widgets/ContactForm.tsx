import React, { useCallback, useEffect } from "react";
import apiKey from "@/emailkey";
import emailjs from "@emailjs/browser";
import { ContactForm, ContactType } from "@/types/Global.types";
import contactStyles from "@/styles/globalStyles/Contact.module.css";

const ContactForm = ({ formSubmitted, setFormSubmitted, formData, setFormData, setMailSent, setAnimationStarted, contactType }: ContactForm) => {
  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
      if (e.target instanceof HTMLInputElement) {
        const { name, value, type, checked } = e.target;
        setFormData({ ...formData, [name]: type === "checkbox" ? checked : value });
      } else {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
      }
    },
    [formData, setFormData]
  );

  const onSubmit = useCallback(
    (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      setFormSubmitted(true);
    },
    [setFormSubmitted]
  );

  useEffect(() => {
    if (formSubmitted) {
      setAnimationStarted(true);
      emailjs
        .send(
          apiKey.SERVICE_ID,
          apiKey.SERVICE_REQUEST_TEMPLATE_ID,
          {
            from_name: formData.contactName,
            from_phone: formData.contactPhone,
            from_email: formData.contactMail,
            from_service: formData.contactService,
            from_message: formData.contactMessage,
          },
          apiKey.PUBLIC_KEY
        )
        .then(() => {
          console.log("Email sent");
          setMailSent(true);
        })
        .catch((err) => {
          console.log(err);
        });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [formSubmitted]);

  return (
    <form onSubmit={onSubmit}>
      <h2>Lépjen kapcsolatba velünk</h2>
      <div>
        <input type="text" name="contactName" id={contactStyles.contactName} placeholder="Név" value={formData.contactName} onChange={handleChange} required />
        <input
          type="text"
          name="contactPhone"
          id={contactStyles.contactPhone}
          placeholder="Telefonszám"
          value={formData.contactPhone}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <input
          type="text"
          name="contactMail"
          id={contactStyles.contactMail}
          placeholder="E-mail"
          value={formData.contactMail}
          onChange={handleChange}
          required
        />
        {contactType === ContactType.PEST ? (
          <select
            name="contactService"
            id={contactStyles.contactService}
            className={formData.contactService === "" ? "unselected" : "selected"}
            value={formData.contactService}
            onChange={handleChange}
          >
            <option value="" disabled hidden>
              Szolgáltatások...
            </option>
            <option value="agyipoloskairtas">Ágyi poloska irtás</option>
            <option value="csotanyirtas">Csótányirtás</option>
            <option value="ragcsaloirtas">Rágcsáló irtás</option>
            <option value="darazsirtas">Darázs irtás</option>
            <option value="hangyairtas">Hangyairtás</option>
            <option value="molyirtas">Molyirtás</option>
            <option value="egyeb">Egyéb</option>
          </select>
        ) : contactType === ContactType.OZONE ? (
          <select
            name="contactService"
            id={contactStyles.contactService}
            className={formData.contactService === "" ? "unselected" : "selected"}
            value={formData.contactService}
            onChange={handleChange}
          >
            <option value="" disabled hidden>
              Milyen fertőtlenítés...
            </option>
            <option value="lakas">Lakás</option>
            <option value="iroda">Iroda</option>
            <option value="iskola">Iskola</option>
            <option value="sportletesitmeny">Sportlétesítmény</option>
            <option value="egeszsegugyiintezmeny">Egészségügyi intézmény</option>
            <option value="klima">Klíma</option>
            <option value="egyeb">Egyéb</option>
          </select>
        ) : undefined}
      </div>
      <textarea
        name="contactMessage"
        id={contactStyles.contactMessage}
        cols={30}
        rows={10}
        placeholder="Üzenet..."
        value={formData.contactMessage}
        onChange={handleChange}
        required
      />
      <div className={contactStyles.contactFormCheckbox}>
        <input
          type="checkbox"
          name="contactPrivacyPolicy"
          id={contactStyles.contactPrivacyPolicy}
          checked={formData.contactPrivacyPolicy}
          onChange={handleChange}
          required
        />
        <label htmlFor="contactPrivacyPolicy">
          Elfogadom az{" "}
          <a href="/adatvedelmi" target="_blank" className={contactStyles.linkToPrivacyPolicy}>
            adatvédelmi nyilatkozatot
          </a>
          .
        </label>
      </div>
      <button>Küldés</button>
    </form>
  );
};

export default ContactForm;
