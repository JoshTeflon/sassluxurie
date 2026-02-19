import { defineMiddlewares, validateAndTransformBody } from "@medusajs/framework/http";

import { AdminCreateBrandRequestSchema } from "./admin/brands/validators";

export default defineMiddlewares({
  routes: [
    {
      matcher: "/admin/brands",
      method: "POST",
      middlewares: [
        validateAndTransformBody(AdminCreateBrandRequestSchema),
      ],
    }
  ]
});