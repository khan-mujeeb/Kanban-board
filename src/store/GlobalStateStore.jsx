import { create } from "zustand";

const GlobalStateStore = create((set) => ({
    ordering: "priority",
    grouping: "status",
    userName: "",
    setOrder: (newOrder) => set({ ordering: newOrder }),
    setGroup: (newGroup) => set({ grouping: newGroup }),
    setUserName: (newUserName) => set({ userName: newUserName }),
}));

export default GlobalStateStore;