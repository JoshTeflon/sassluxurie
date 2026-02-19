import z from "zod";
import { MedusaRequest, MedusaResponse } from "@medusajs/framework/http";

import { createBrandWorkflow } from "../../../workflows/create-brand";

import { AdminCreateBrandRequestSchema } from "./validators";

type AdminCreateBrandRequestType = z.infer<typeof AdminCreateBrandRequestSchema>;

export const POST = async (req: MedusaRequest<AdminCreateBrandRequestType>, res: MedusaResponse) => {
  const { result } = await createBrandWorkflow(req.scope).run({
    input: req.validatedBody,
  });

  res.json({ brand: result });
};