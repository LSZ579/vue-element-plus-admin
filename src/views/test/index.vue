<template>
  <div class="app-container">
    <h1>This is an test page</h1>
  </div>
</template>
<script>
export default {
  name: 'Test'
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
