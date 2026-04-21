import { Color } from "@/types";
import { fetchStoreApiJson } from "@/lib/store-api";

const getColors = async (): Promise<Color[]> => {
  return fetchStoreApiJson<Color[]>("colors");
};

export default getColors;
