<template>
  <div id="top">
    <top-header></top-header>
    <h1>Toppage</h1>
  </div>
</template>

<script>
import Header from '@/components/header'
export default {
  name: 'Top',
  components: {
    'top-header': Header
  },
  data () {
    return {
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
