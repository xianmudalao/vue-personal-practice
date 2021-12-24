<template>
  <div>用户名:{{ mainStore.name }}</div>
  <div>长度:{{ mainStore.nameLength }}</div>
  <button @click="updateName">点击</button>
  <n-button>naive-ui</n-button>
</template>

<script setup lang="ts">
import { defineComponent, reactive, toRefs, ref } from 'vue';
import { useMainStore } from '@/store/main';
import { NButton } from 'naive-ui'
const mainStore = useMainStore();

const updateName = () => {
  mainStore.$patch({
    name: '名称修改111',
  });
};
</script>

<style scoped lang="scss"></style>
