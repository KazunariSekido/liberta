<template>
  <div id="recruit">
    <recruit-header></recruit-header>
    <h1>採用情報</h1>
    <recruit-footer></recruit-footer>
  </div>
</template>

<script>
import Header from '@/components/header'
import Footer from '@/components/footer'
export default {
  name: 'Temp',
  components: {
    'recruit-header': Header,
    'recruit-footer': Footer
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
