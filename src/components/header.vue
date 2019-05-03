<template>
  <div class="header">
    <div>
      <input class="hd_btn1" type="button" @click="toCompany" value="会社概要">
      <input class="hd_btn1" type="button" @click="toClient" value="企業担当の方へ">
      <input class="hd_btn1" type="button" @click="toRecruit" value="採用情報">
    </div>
    <div>
      <input class="hd_btn" type="button" @click="toFeature" value="リベルタの魅力">
      <input class="hd_btn" type="button" @click="toBegginer" value="はじめての方へ">
      <input class="hd_btn" type="button" @click="toVoice" value="先輩スタッフの声">
      <img calss="a" src="../assets/aplogo.png" width="50" height="50">
      <input class="hd_btn" type="button" @click="toRegister" value="スタッフ登録">
      <input class="hd_btn" type="button" @click="toSearch" value="求人検索">
      <input class="hd_btn" type="button" @click="toContact" value="お問い合わせ">
    </div>
  </div>
</template>

<script>
export default {
  name: 'Header',
  data () {
    return {
    }
  },
  methods: {
    toCompany () {
      this.$router.push('/company')
    },
    toContact () {
      this.$router.push('/contact')
    },
    toRecruit () {
      this.$router.push('/recruit')
    },
    toClient () {
      this.$router.push('/client')
    },
    toFeature () {
      this.$router.push('/feature')
    },
    toBegginer () {
      this.$router.push('/begginer')
    },
    toVoice () {
      this.$router.push('/voice')
    },
    toRegister () {
      this.$router.push('/register')
    },
    toSearch () {
      this.$router.push('/search')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.hd_btn1{
  width: 100px;
}
.hd_btn{
  width: 100px;
}
.header{
  padding: 0.5em 1em;
  margin: 2em 0;
  font-weight: bold;
  border: solid 3px #000000;
}
</style>
