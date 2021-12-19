<template>
  <div class="app-container">
    <div class="flex">
      <div class="flex1" @click="toClick"></div>
      <div class="flex2" @click="toClick"></div>
      <div class="flex3"></div>
    </div>
    <div class="three">
      <div></div>
      <div></div>
      <div></div>
    </div>

  </div>
</template>
<script>
export default {
  name:'Test',
  setup(){
    return {

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
.three{
  width: 200px;
  height: 200px;
   margin: 20px;
  background-color: burlywood;
  display: flex;
  justify-content: space-between;
  div{
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background-color: blanchedalmond;
    &:nth-child(2){
      align-self: center;
    }
    &:nth-child(3){
      align-self: flex-end;
    }
  }
}
</style>