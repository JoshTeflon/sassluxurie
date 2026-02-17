import { MedusaRequest, MedusaResponse } from "@medusajs/framework/http";

import { createBrandWorkflow } from "../../../workflows/create-brand";

import { CreateBrandInput } from "../../../types/brand";

export const POST = async (req: MedusaRequest<CreateBrandInput>, res: MedusaResponse) => {
  const { result } = await createBrandWorkflow(req.scope).run({
    input: req.validatedBody,
  });

  res.json({ brand: result });
};