<template>
  <div id="search">
    <search-header></search-header>
    <h1>求人検索</h1>
    <search-footer></search-footer>
  </div>
</template>

<script>
import Header from '@/components/header'
import Footer from '@/components/footer'
export default {
  name: 'Search',
  components: {
    'search-header': Header,
    'search-footer': Footer
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
