<template>
  <div class="main">
    <el-button>弹窗</el-button>
    <el-input v-model="keyword" type="text"></el-input>
  </div>
</template>

<script lang="ts">
export default defineComponent({
  setup() {
    const keyword = ref("");
    function create() {
      console.log("11");
    }
    return {
      create,
      keyword,
    };
  },
});
</script>

<style scoped lang="scss">
.main {
  width: 80%;
  margin: 12px auto;
}
</style>
