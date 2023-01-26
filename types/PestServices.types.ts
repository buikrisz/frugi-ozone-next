import { StaticImageData } from "next/image";

export type ShowDetailsState = {
  id: number;
  show: boolean;
};

export type ServiceCardType = {
  id: number;
  img: StaticImageData;
  title: string;
  intro: string;
  setShowDetails: React.Dispatch<React.SetStateAction<ShowDetailsState>>;
};

export type PestServiceDetails = {
  img: StaticImageData;
  title: string;
  text: string;
  setShowDetails: React.Dispatch<React.SetStateAction<ShowDetailsState>>;
};
