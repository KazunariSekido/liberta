<template>
  <div class="topBegginer">
    <h2>お仕事までの流れ</h2>
    <input class="hd_btn" type="button" @click="toBegginer" value="詳しくはこちら">
  </div>
</template>

<script>
export default {
  name: 'TopBegginer',
  data () {
    return {
    }
  },
  methods: {
    toBegginer () {
      this.$router.push('/begginer')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.topBegginer{
  padding: 0.5em 1em;
  margin: 2em 0;
  font-weight: bold;
  border: solid 3px #000000;
}
</style>
