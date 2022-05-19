<template>
  <!-- <HelloWorld msg="HelloWorld"></HelloWorld> -->
  <LinkChannel msg="link"></LinkChannel>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import LinkChannel from './components/LinkChannel.vue'
import { reactive, toRefs, computed, onBeforeMount, onMounted } from 'vue'

export default {
  name: 'App',
  components: {
    LinkChannel
    //HelloWorld
  },
  setup() {
  }

}
</script>
