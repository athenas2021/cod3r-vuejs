<template>
<div id="app">{{ titulo }}</div>
</template>

<script>
export default {
  data: function() {
    return {
      titulo: 'teste data usando vue js!'
    }
  }
}
</script>

<style>
#app {
  background-color: chocolate;
  color: white;
}
</style>
