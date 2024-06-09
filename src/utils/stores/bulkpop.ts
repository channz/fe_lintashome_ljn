import { create } from "zustand";
import { Bulkpop } from "../apis/bulkpop/type";

interface BulkpopStore {
  editDatas: Bulkpop | null;
  setEditDatas: (datas: Bulkpop | null) => void;
}

const useBulkpopStore = create<BulkpopStore>((set) => ({
  editDatas: null,
  setEditDatas: (datas) => set({ editDatas: datas }),
}));

export default useBulkpopStore;
