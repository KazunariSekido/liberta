<template>
  <div id="voice">
    <voice-header></voice-header>
    <h1>先輩スタッフの声</h1>
    <voice-footer></voice-footer>
  </div>
</template>

<script>
import Header from '@/components/header'
import Footer from '@/components/footer'
export default {
  name: 'Voice',
  components: {
    'voice-header': Header,
    'voice-footer': Footer
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
