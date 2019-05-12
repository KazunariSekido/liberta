<template>
  <div id="company">
    <company-header></company-header>
    <h1>会社概要</h1>
    <company-footer></company-footer>
  </div>
</template>

<script>
import Header from '@/components/header'
import Footer from '@/components/footer'
export default {
  name: 'Company',
  components: {
    'company-header': Header,
    'company-footer': Footer
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
