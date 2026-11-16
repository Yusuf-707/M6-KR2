import { create } from "zustand";
export const useSelectedStore = create((set) => ({
  selectedTasks: [],
  addTask: (task) =>
    set((state) => {
      const filtirTask = state.selectedTasks.some((sTask) => sTask.id === task.id);
      if (filtirTask) return state;
      return {
        selectedTasks: [...state.selectedTasks, task],
      };
    }),
  removeTask: (id) =>
    set((state) => ({
      selectedTasks: state.selectedTasks.filter((task) => task.id !== id)
    })),
  clearAll: () => set({ selectedTasks: [] }),
}));
