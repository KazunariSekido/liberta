<template>
  <div class="topFaq">
    <h2>よくある質問</h2>
    <input class="hd_btn" type="button" @click="toFaq" value="すべての質問を見る">
  </div>
</template>

<script>
export default {
  name: 'TopFaq',
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
.topFaq{
  padding: 0.5em 1em;
  margin: 2em 0;
  font-weight: bold;
  border: solid 3px #000000;
}
</style>
