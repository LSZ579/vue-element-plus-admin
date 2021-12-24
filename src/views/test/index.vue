<template>
  <div class="app-container">
    <div class="flex">
      <div class="flex1" @click="toClick"></div>
      <div class="flex2" @click="toClick"></div>
      <div class="flex3"></div>
    </div>
    <el-input style="width:300px;margin:20px" v-model="value"></el-input>

  </div>
</template>
<script>
import { ref } from 'vue'
export default {
  name: 'Test',
  setup () {
    const value = ref('')
    // console.log(arr instanceof Array)
    return {
      value
    }
  }
}
</script>
<style lang="scss" scoped>
.flex{
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  &1{
    width: 100px;
    height: 100px;
    background-color: aquamarine;
  }
   &2{
    width: 100px;
    height: 60px;
    background-color: rgb(178, 255, 127);
  }
   &3{
    // width: 100px;
    flex-grow: 0.5;
    height: 40px;
    justify-self: flex-start;
    // align-self: flex-start;
    background-color: rgb(255, 246, 127);
  }
}

</style>
