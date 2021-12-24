<template></template>

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
