<template>
  <div>用户名:{{ mainStore.name }}</div>
  <div>长度:{{ mainStore.nameLength }}</div>
  <button @click="updateName">点击</button>
  <n-button>naive-ui</n-button>
  <p>标题:</p>
  <textarea class="blue" ref="textarea" v-model="updateText" cols="30" rows="10"></textarea>
  <button @click="insertContent">插入</button>
  <base-svg icon-class="password" />
</template>

<script setup lang="ts">
import { defineComponent, reactive, toRefs, ref } from 'vue';
import { useMainStore } from '@/store/main';
import { NButton } from 'naive-ui'
const mainStore = useMainStore();
const updateText = ref('我我我我我我我我我我')
const textarea: any = ref(null)

const updateName = () => {
  mainStore.$patch({
    name: '名称修改111',
  });
};

function insertContent() {
  let start = textarea.value.selectionStart
  let end = textarea.value.selectionEnd
  let selectLenght = 0
  // 将输入框数据切成数组,方便后续操作
  let inputValue = updateText.value.split('')
  // 拿到选中文字长度
  if (start !== end) {
    selectLenght = end - start
  }
  // 将要插入的文字替换
  inputValue.splice(start, selectLenght, `12344`)
  // 数组转换字符串重新赋值
  updateText.value = inputValue.join('')

}
</script>

<style scoped lang="scss">
.blue {
  color: $blue;
}

.red {
  color: $red;
}

.green {
  color: $green;
}
</style>
