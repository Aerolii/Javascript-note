<template></template>

<script lang="ts">
import { ref, defineComponent } from 'vue'

export default defineComponent({
  name: 'HelloWorld',
  setup: (ctx, prop) => {
    console.log('ctx,prop :>> ', ctx, prop)
    const count: Object = ref(0)
    console.log('count :>> ', count)
    return { count }
  }
})
</script>

<style scoped>
a {
  color: #42b983;
}
</style>
