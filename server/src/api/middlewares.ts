import { defineMiddlewares, validateAndTransformBody } from "@medusajs/framework/http";
import z from "zod";

import { AdminCreateBrandRequestSchema } from "./admin/brands/validators";

export default defineMiddlewares({
  routes: [
    {
      matcher: "/admin/brands",
      method: "POST",
      middlewares: [
        validateAndTransformBody(AdminCreateBrandRequestSchema),
      ],
    },
    {
      matcher: "/admin/products",
      method: ["POST"],
      additionalDataValidator: {
        brand_id: z.string().optional(),
      }
    }
  ]
});