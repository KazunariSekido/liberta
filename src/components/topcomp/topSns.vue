<template>
  <div class="topSns">
    <h2>SNS</h2>
    <input class="hd_btn" type="button" @click="toSns" value="twitter">
    <input class="hd_btn" type="button" @click="toSns" value="Facebook">
    <input class="hd_btn" type="button" @click="toSns" value="Instagram">
  </div>
</template>

<script>
export default {
  name: 'TopSns',
  data () {
    return {
    }
  },
  methods: {
    toFaq () {
      this.$router.push('/begginer')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.topSns{
  padding: 0.5em 1em;
  margin: 2em 0;
  font-weight: bold;
  border: solid 3px #000000;
}
</style>
