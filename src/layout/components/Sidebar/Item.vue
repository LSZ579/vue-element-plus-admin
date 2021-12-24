<template >
  <div>
    <svg-icon class="sub-el-icon" v-if="icon" :icon-class="icon"/>
    <span >{{title}}</span>
  </div>
</template>
<script>

export default {
  name: 'MenuItem',
  props: {
    icon: {
      type: String,
      default: ''
    },
    title: {
      type: String,
      default: ''
    }
  }
}
</script>

<style scoped>
.sub-el-icon {
  color: currentColor;
  width: 1em;
  height: 1em;
}
</style>
