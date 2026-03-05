export interface IBrand {
  id: string;
  name: string;
  description?: string;
  logo_url?: string;
};

export type CreateBrandInput = {
  name: string;
  description?: string;
  logo_url?: string;
};

export type BrandsResponse = {
  brands: IBrand[];
  count: number;
  limit: number;
  offset: number;
};