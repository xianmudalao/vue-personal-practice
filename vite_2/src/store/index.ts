/**
 * 状态管理
 * @author
 */
import { defineStore } from "pinia";
export const useMainStore = defineStore({
  id: "main",
  state: () => ({
    name: "super-admin",
  }),
});
