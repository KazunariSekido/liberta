<template>
  <div class="topInfo">
    <h2>注目求人情報</h2>
    <input class="hd_btn" type="button" @click="toSearch" value="詳しくはこちら">
  </div>
</template>

<script>
export default {
  name: 'TopInfo',
  data () {
    return {
    }
  },
  methods: {
    toSearch () {
      this.$router.push('/search')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.topInfo{
  padding: 0.5em 1em;
  margin: 2em 0;
  font-weight: bold;
  border: solid 3px #000000;
}
</style>
