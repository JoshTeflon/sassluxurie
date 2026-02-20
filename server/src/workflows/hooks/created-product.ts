import { createProductsWorkflow } from "@medusajs/medusa/core-flows";
import { StepResponse } from "@medusajs/framework/workflows-sdk";

import { BRAND_MODULE } from "../../modules/brand";
import BrandModuleService from "../../modules/brand/service";

createProductsWorkflow.hooks.productsCreated(
  (async ({ products, additional_data }, { container }) => {
    if(!additional_data?.brand_id) {
      return new StepResponse([], []);
    }

    const brandModuleService: BrandModuleService = container.resolve(BRAND_MODULE);

    await brandModuleService.retrieveBrand(additional_data.brand_id as string);
  })
);