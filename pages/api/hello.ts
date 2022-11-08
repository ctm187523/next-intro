// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { NextApiRequest, NextApiResponse } from "next";

//creamos un type para tipar el dato que vamos a mandar en el Response NextApiResponse
type Data= {
  name: string;
}

//tipamos el request y el respons con sus tipos de datos correspondientes
//decimos que el respons que es un NextApiResponse es de tipo del type creado arriba Data
export default function handler(req: NextApiRequest, res: NextApiResponse<Data>) {

  res.status(200).json({ name: 'John Doe' })
}
