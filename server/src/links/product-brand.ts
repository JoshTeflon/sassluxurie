import ProductModule from "@medusajs/medusa/product";
import { defineLink } from "@medusajs/framework/utils";

import BrandModule from "../modules/brand";

export default defineLink(
  {
    linkable: ProductModule.linkable.product,
    isList: true,
  },
  BrandModule.linkable.brand,
  {
    database: {
      table: "product_brand",
    }
  }
);