<template>
  <div id="begginer">
    <begginer-header></begginer-header>
    <h1>はじめての方へ</h1>
    <begginer-footer></begginer-footer>
  </div>
</template>

<script>
import Header from '@/components/header'
import Footer from '@/components/footer'
export default {
  name: 'Begginer',
  components: {
    'begginer-header': Header,
    'begginer-footer': Footer
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
