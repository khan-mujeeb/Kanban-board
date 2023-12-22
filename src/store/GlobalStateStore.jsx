import { create } from "zustand";

const GlobalStateStore = create((set) => ({
    ordering: "priority",
    grouping: "status",

    setOrder: (newOrder) => set({ ordering: newOrder }),
    setGroup: (newGroup) => set({ grouping: newGroup }),
}));

export default GlobalStateStore;