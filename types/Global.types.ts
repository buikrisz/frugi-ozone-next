import { StaticImageData } from "next/image";

export type LandingFormValue = {
  name: string;
  phone: string;
  service: string;
  location: string;
  district: string;
  privacyPolicy: boolean;
};

export type LandingFormAutocomplete = {
  formValue: LandingFormValue;
  formInput: keyof LandingFormValue;
  setFormValue: React.Dispatch<React.SetStateAction<LandingFormValue>>;
  autoCompleteValues: string[];
  clicked: boolean;
  setClicked: React.Dispatch<React.SetStateAction<boolean>>;
  minLength: number;
  focus: boolean;
};

export enum ContactType {
  PEST = 1,
  OZONE,
  NONE,
}

export type ContactSectionData = {
  contactType: ContactType;
};

export type ContactFormData = {
  contactName: string;
  contactPhone: string;
  contactMail: string;
  contactService: string;
  contactMessage: string;
  contactPrivacyPolicy: boolean;
};

export enum ContactIcon {
  LOCATION = 1,
  PHONE,
  MAIL,
}

export type ContactInfoCard = {
  icon: ContactIcon;
  title: string;
  text: string;
};

export type ContactForm = {
  formSubmitted: boolean;
  setFormSubmitted: React.Dispatch<React.SetStateAction<boolean>>;
  formData: ContactFormData;
  setFormData: React.Dispatch<React.SetStateAction<ContactFormData>>;
  setMailSent: React.Dispatch<React.SetStateAction<boolean>>;
  setAnimationStarted: React.Dispatch<React.SetStateAction<boolean>>;
  contactType: ContactType;
};

export type Services = {
  id: number;
  img: StaticImageData;
  title: string;
  intro: string;
  text: string;
};
