import { defineRouteConfig } from "@medusajs/admin-sdk";
import { Container } from "@medusajs/ui";
import { TagSolid } from "@medusajs/icons";

const BrandsPage = () => {
  // TODO: Fetch and display brands list

  return (
    <Container className="divide-y p-0">
      {/* TODO: Implement brands list page */}
    </Container>
  );
};

export const config = defineRouteConfig({
  label: "Brands",
  icon: TagSolid,
});

export default BrandsPage;