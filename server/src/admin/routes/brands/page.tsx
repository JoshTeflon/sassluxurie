import { defineRouteConfig } from "@medusajs/admin-sdk";
import {
  Container,
  createDataTableColumnHelper,
  DataTable,
  DataTablePaginationState,
  Heading,
  useDataTable,
} from "@medusajs/ui";
import { TagSolid } from "@medusajs/icons";

import { useMemo, useState } from "react";
import { useQuery } from "@tanstack/react-query"

import { sdk } from "../../lib/sdk";

import { BrandsResponse, IBrand } from "../../../types/brand";

const BrandsPage = () => {
  const columnHelper = createDataTableColumnHelper<IBrand>();
  
  const columns = [
    columnHelper.accessor("id", {
      header: "ID",
    }),
    columnHelper.accessor("name", {
      header: "Name",
    }),
    columnHelper.accessor("description", {
      header: "Description",
    }),
  ];

  const limit = 15 as const;

  const [pagination, setPagination] = useState<DataTablePaginationState>({
    pageIndex: 0,
    pageSize: limit,
  });
  
  const offset = useMemo(() => pagination.pageIndex * limit, [pagination]);

  const { data, isLoading } = useQuery<BrandsResponse>({
    queryFn: () => sdk.client.fetch('/admin/brands', {
      query: {
        limit,
        offset,
      },
    }),
    queryKey: [["brands", limit, offset]],
  });

  const table = useDataTable({
    columns,
    data: data?.brands ?? [],
    getRowId: (row) => row.id,
    rowCount: data?.count ?? 0,
    isLoading,
    pagination: {
      state: pagination,
      onPaginationChange: setPagination,
    }
  });

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