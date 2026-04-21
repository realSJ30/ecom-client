import { Product } from "@/types";
import { fetchStoreApiJson } from "@/lib/store-api";

const getProduct = async (id: string): Promise<Product> => {
  return fetchStoreApiJson<Product>(`products/${id}`);
};

export default getProduct;
