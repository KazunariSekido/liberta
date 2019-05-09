<template>
  <div class="topSearch">
    <h2>お急ぎ検索</h2>
    <div>
      <input class="hd_btn" type="button" @click="toSearch" value="検索">
    </div>
    <input class="hd_btn" type="button" @click="toSearch" value="すべての条件から検索する">
  </div>
</template>

<script>
export default {
  name: 'TopSearch',
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
.topSearch{
  padding: 0.5em 1em;
  margin: 2em 0;
  font-weight: bold;
  border: solid 3px #000000;
}
</style>
