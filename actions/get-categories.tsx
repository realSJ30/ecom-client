import { Category } from "@/types";
import { fetchStoreApiJson } from "@/lib/store-api";

const getCategories = async (): Promise<Category[]> => {
  return fetchStoreApiJson<Category[]>("categories");
};

export default getCategories;
