import { Category } from "@/types";
import { fetchStoreApiJson } from "@/lib/store-api";

const getCategory = async (id: string): Promise<Category> => {
  return fetchStoreApiJson<Category>(`categories/${id}`);
};

export default getCategory;
