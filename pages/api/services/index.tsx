import { services } from "@/data/services";
import { Services } from "@/types/Global.types";
import { NextApiRequest, NextApiResponse } from "next";

export default function handler(_: NextApiRequest, res: NextApiResponse<Services[]>) {
  res.status(200).json(services);
}
