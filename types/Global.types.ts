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

export type ContactInfoCard = {
  icon: string;
  title: string;
  text: string;
};
