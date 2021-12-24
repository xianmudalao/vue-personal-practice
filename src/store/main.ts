import { defineStore } from 'pinia';

export const useMainStore = defineStore({
  id: 'main',
  state: () => ({
    name: 'super admin',
  }),
  getters: {
    nameLength: (state) => state.name.length,
  },
  actions: {
    async insertPost(data: string) {
      this.name = data;
    },
  },
});
