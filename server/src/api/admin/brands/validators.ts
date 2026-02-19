import { z } from "zod";

export const AdminCreateBrandRequestSchema = z.object({
  name: z.string(),
  description: z.string().optional(),
  logo_url: z.string().optional(),
});