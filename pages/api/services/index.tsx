import { services } from "@/data/services";
import { Services } from "@/types/Global.types";
import { NextApiRequest, NextApiResponse } from "next";

const handler = (_: NextApiRequest, res: NextApiResponse<Services[]>) => {
  res.status(200).send(services);
};

export default handler;
