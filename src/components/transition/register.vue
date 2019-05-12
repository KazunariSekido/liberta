<template>
  <div id="register">
    <register-header></register-header>
    <h1>スタッフ登録</h1>
    <register-footer></register-footer>
  </div>
</template>

<script>
import Header from '@/components/header'
import Footer from '@/components/footer'
export default {
  name: 'Register',
  components: {
    'register-header': Header,
    'register-footer': Footer
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
