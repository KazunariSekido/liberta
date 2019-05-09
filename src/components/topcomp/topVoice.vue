<template>
  <div class="topVoice">
    <h2>先輩の声</h2>
    <input class="hd_btn" type="button" @click="toVoice" value="詳しくはこちら">
  </div>
</template>

<script>
export default {
  name: 'TopVoice',
  data () {
    return {
    }
  },
  methods: {
    toVoice () {
      this.$router.push('/voice')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.topVoice{
  padding: 0.5em 1em;
  margin: 2em 0;
  font-weight: bold;
  border: solid 3px #000000;
}
</style>
