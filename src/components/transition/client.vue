<template>
  <div id="client">
    <client-header></client-header>
    <h1>企業担当者の方へ</h1>
    <client-footer></client-footer>
  </div>
</template>

<script>
import Header from '@/components/header'
import Footer from '@/components/footer'
export default {
  name: 'Client',
  components: {
    'client-header': Header,
    'client-footer': Footer
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
