<template>
  <div class="topFeature">
    <h2>リベルタの魅力</h2>
    <input class="hd_btn" type="button" @click="toFeature" value="詳しくはこちら">
  </div>
</template>

<script>
export default {
  name: 'TopFeature',
  data () {
    return {
    }
  },
  methods: {
    toFeature () {
      this.$router.push('/feature')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.topFeature{
  padding: 0.5em 1em;
  margin: 2em 0;
  font-weight: bold;
  border: solid 3px #000000;
}
</style>
