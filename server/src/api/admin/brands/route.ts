import { MedusaRequest, MedusaResponse } from "@medusajs/framework/http";

import z from "zod";

import { AdminCreateBrandRequestSchema } from "./validators";
import { createBrandWorkflow } from "../../../workflows/create-brand";

type AdminCreateBrandRequestType = z.infer<typeof AdminCreateBrandRequestSchema>;

export const GET = async (req: MedusaRequest, res: MedusaResponse) => {
  const query = req.scope.resolve("query");

  const {
    data: brands,
    metadata: { count, take, skip } = { count: 0, take: 0, skip: 0 },
  } = await query.graph({
    entity: "brand",
    ...req.queryConfig,
  });

  res.json({
    brands,
    count,
    limit: take,
    offset: skip
  });
};

export const POST = async (req: MedusaRequest<AdminCreateBrandRequestType>, res: MedusaResponse) => {
  const { result } = await createBrandWorkflow(req.scope).run({
    input: req.validatedBody,
  });

  res.json({ brand: result });
};