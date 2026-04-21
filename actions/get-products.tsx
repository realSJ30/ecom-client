import { Product } from "@/types";
import { fetchStoreApiJson, getStoreApiBaseUrl } from "@/lib/store-api";
import qs from "query-string";

interface Query {
  categoryId?: string;
  colorId?: string;
  sizeId?: string;
  isFeatured?: boolean;
}

const getProducts = async (query: Query): Promise<Product[]> => {
  const url = qs.stringifyUrl({
    url: `${getStoreApiBaseUrl()}/products`,
    query: { 
      colorId: query.colorId,
      sizeId: query.sizeId,
      categoryId: query.categoryId,
      isFeatured: query.isFeatured,
    },
  });

  return fetchStoreApiJson<Product[]>(url);
};

export default getProducts;
