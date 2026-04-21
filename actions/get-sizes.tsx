import { Size } from "@/types";
import { fetchStoreApiJson } from "@/lib/store-api";

const getSizes = async (): Promise<Size[]> => {
  return fetchStoreApiJson<Size[]>("sizes");
};

export default getSizes;
