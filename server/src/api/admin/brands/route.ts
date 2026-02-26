import z from "zod";
import { MedusaRequest, MedusaResponse } from "@medusajs/framework/http";

import { createBrandWorkflow } from "../../../workflows/create-brand";

import { AdminCreateBrandRequestSchema } from "./validators";

type AdminCreateBrandRequestType = z.infer<typeof AdminCreateBrandRequestSchema>;

export const GET = async (req: MedusaRequest, res: MedusaResponse) => {
  const query = req.scope.resolve("query");

  const { data: brands } = await query.graph({
    entity: "brand",
    fields: ["*", "products.*"],
  });

  res.json({ brands });
};

export const POST = async (req: MedusaRequest<AdminCreateBrandRequestType>, res: MedusaResponse) => {
  const { result } = await createBrandWorkflow(req.scope).run({
    input: req.validatedBody,
  });

  res.json({ brand: result });
};