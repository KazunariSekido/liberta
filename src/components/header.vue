<template>
  <div class="header">
    <div>
      <input class="hd_btn1" type="button" value="会社概要">
      <input class="hd_btn1" type="button" value="企業担当の方へ">
      <input class="hd_btn1" type="button" value="採用情報">
    </div>
    <div>
      <input class="hd_btn" type="button" value="リベルタの魅力">
      <input class="hd_btn" type="button" value="初めての方へ">
      <input class="hd_btn" type="button" value="先輩スタッフの声">
      <img calss="a" src="../assets/aplogo.png" width="50" height="50">
      <input class="hd_btn" type="button" value="スタッフ登録">
      <input class="hd_btn" type="button" value="求人検索">
      <input class="hd_btn" type="button" value="お問い合わせ">
    </div>
  </div>
</template>

<script>
export default {
  name: 'Header',
  data () {
    return {

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
