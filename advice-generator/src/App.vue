<template>
    <CardComponent />
</template>

<script>
import CardComponent from './components/CardComponent.vue'
export default {
  name:"AppHehe",
  components: {
    CardComponent
  },
  
}
</script>

<style>
body {
    padding:0;
    margin: 0;
}
#app {
  background-color: hsl(218, 23%, 16%);
  height: 100%;
  min-height: 100vh;
  display:flex;
  align-items:center;
  justify-content:center;
}
</style>
