<template>
  <div id="feature">
    <feature-header></feature-header>
    <h1>リベルタの魅力</h1>
    <feature-footer></feature-footer>
  </div>
</template>

<script>
import Header from '@/components/header'
import Footer from '@/components/footer'
export default {
  name: 'Feature',
  components: {
    'feature-header': Header,
    'feature-footer': Footer
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
