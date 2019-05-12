<template>
  <div id="contact">
    <contact-header></contact-header>
    <h1>お問い合わせ</h1>
    <contact-footer></contact-footer>
  </div>
</template>

<script>
import Header from '@/components/header'
import Footer from '@/components/footer'
export default {
  name: 'Contact',
  components: {
    'contact-header': Header,
    'contact-footer': Footer
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
