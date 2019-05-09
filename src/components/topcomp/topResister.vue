<template>
  <div class="topResister">
    <h2>スタッフ登録</h2>
    <input class="hd_btn" type="button" @click="toRegister" value="リンク">
  </div>
</template>

<script>
export default {
  name: 'TopResister',
  data () {
    return {
    }
  },
  methods: {
    toFaq () {
      this.$router.push('/resister')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.topResister{
  padding: 0.5em 1em;
  margin: 2em 0;
  font-weight: bold;
  border: solid 3px #000000;
}
</style>
