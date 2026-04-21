import { Billboard } from "@/types";
import { fetchStoreApiJson } from "@/lib/store-api";

const getBillboard = async (id: string): Promise<Billboard> => {
  return fetchStoreApiJson<Billboard>(`billboards/${id}`);
};

export default getBillboard;
