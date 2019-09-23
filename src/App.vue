<template>
  <div id="app">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'app',
  components: {
    HelloWorld
  }
}
</script>

<style>
#app {
  height: 100%;
}

.canvas {
  position: absolute;
  left: 0;
  top: 0;
}

#svg-wrapper rect {
  pointer-events: all;
}

#svg-wrapper svg:first-child rect:hover {
  fill: rgba(0,0,0,0.08)
}
</style>
