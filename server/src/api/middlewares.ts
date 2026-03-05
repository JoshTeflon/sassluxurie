import { defineMiddlewares, validateAndTransformBody, validateAndTransformQuery } from "@medusajs/framework/http";
import { createFindParams } from "@medusajs/medusa/api/utils/validators";
import z from "zod";

import { AdminCreateBrandRequestSchema } from "./admin/brands/validators";

export const GetBrandsSchema = createFindParams();

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
    },
    {
      matcher: "/admin/brands",
      method: "GET",
      middlewares: [
        validateAndTransformQuery(
          GetBrandsSchema,
          {
            defaults: ["id", "name", "description", "logo_url", "products.*"],
            isList: true,
          }
        )
      ],
    },
  ]
});