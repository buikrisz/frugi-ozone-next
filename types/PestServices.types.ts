import { StaticImageData } from "next/image";
import { Dispatch, SetStateAction } from "react";

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

export type PdfProps = {
  setShowPdfs: Dispatch<SetStateAction<boolean>>;
};
