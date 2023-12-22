import { create } from "zustand";

const GlobalStateStore = create((set) => ({
    ordering: "priority",
    grouping: "priority",

    setOrder: (newOrder) => set({ ordering: newOrder }),
    setGroup: () => set({ bears: 0 }),
}));

export default GlobalStateStore;