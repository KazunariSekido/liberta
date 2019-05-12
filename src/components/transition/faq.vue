<template>
  <div id="faq">
    <faq-header></faq-header>
    <h1>よくある質問</h1>
    <faq-footer></faq-footer>
  </div>
</template>

<script>
import Header from '@/components/header'
import Footer from '@/components/footer'
export default {
  name: 'Faq',
  components: {
    'faq-header': Header,
    'faq-footer': Footer
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
