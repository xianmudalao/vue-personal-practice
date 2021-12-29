<template>
    <svg class="svg-icon" aria-hidden="true">
        <use :xlink:href="iconName" />
    </svg>
</template>

<script setup lang="ts">
import { defineComponent, reactive, toRefs, ref, computed, defineProps } from 'vue'
const props = defineProps({
    iconClass: {
        type: String,
        default: ''
    },
    color: {
        type: String,
        default: ''
    }
})
const iconName = computed((): string => {
    return `#icon-${props.iconClass}`
})
</script>

<style scoped lang='scss'>
.svg-icon {
    width: 1em;
    height: 1em;
    vertical-align: -0.15em;
    fill: currentColor;
    overflow: hidden;
}
</style>