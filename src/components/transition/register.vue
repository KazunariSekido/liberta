<template>
  <div id="register">
    <register-header></register-header>
    <h1>スタッフ登録</h1>
    <div>
      <td><h3>お名前（漢字）</h3></td>
      <td><h3 class="hissu">必須</h3></td>
      <td>性<input type="text" class="name"></td>
      <td>名<input type="text" class="name"></td>
    </div>
    <div>
      <td><h3>お名前（カナ）</h3></td>
      <td><h3 class="hissu">必須</h3></td>
      <td>セイ<input type="text" class="name"></td>
      <td>メイ<input type="text" class="name"></td>
    </div>
    <div>
      <td><h3>性別</h3></td>
      <td><h3 class="hissu">必須</h3></td>
      <td><input type="radio">女性</td>
      <td><input type="radio">男性</td>
    </div>
    <div>
      <td><h3>生年月日</h3></td>
      <td><h3 class="hissu">必須</h3></td>
      <td><input type="text" class="name"><h4>例）1990/01/01</h4></td>
    </div>
    <div>
      <td><h3>電話番号</h3></td>
      <td><h3 class="hissu">必須</h3></td>
      <td><input type="text" class="name"><h4>例）012-345-6789</h4></td>
    </div>
    <div>
      <td><h3>メールアドレス</h3></td>
      <td><h3 class="hissu">必須</h3></td>
      <td><input type="text" class="name"><h4>例）sample@liberta.co.jp</h4></td>
    </div>
    <div>
      <td><h3>住所</h3></td>
      <td><h3 class="hissu">必須</h3></td>
      <td>
        都道府県<input type="text" class="name">
      市区町村<input type="text" class="name">
      町名・番地<input type="text" class="name">
    </td>
    </div>
    <div>
      <td><h3>最寄駅</h3></td>
      <td><h3 class="hissu">必須</h3></td>
      <td><input type="text" class="name">駅<h4>例）名鉄本線 名古屋駅</h4></td>
    </div>
    <div>
      <td><h3>希望エリア</h3><h3>（複数選択可）</h3></td>
      <td><h3 class="hissu">必須</h3></td>
      <td><input type="checkbox"> 岐阜エリア</td>
      <td><input type="checkbox">名古屋エリア</td>
      <td><input type="checkbox">西三河エリア</td>
    </div>
    <div>
      <td><h3>お持ちの資格</h3><h3>（複数選択可）</h3></td>
      <td><h3 class="hissu">必須</h3></td>
      <td><input type="checkbox"> 看護師</td>
      <td><input type="checkbox">介護士</td>
      <td><input type="checkbox">薬剤師</td>
    </div>
    <div>
      <td><h3>希望職種</h3><h3>（複数選択可）</h3></td>
      <td><h3 class="hissu">必須</h3></td>
      <td><input type="checkbox"> 看護師</td>
      <td><input type="checkbox">介護士</td>
      <td><input type="checkbox">薬剤師</td>
    </div>
    <div>
      <td><h3>面談希望日</h3></td>
      <td><h3 class="hissu">必須</h3></td>
    </div>
    <div>
      <td><h3>就業可能日</h3></td>
      <td><input type="text" class="name"><h4>例）◯◯◯◯年 ◯月~</h4></td>
    </div>
    <register-footer></register-footer>
  </div>
</template>

<script>
import Header from '@/components/header'
import Footer from '@/components/footer'
export default {
  name: 'Register',
  components: {
    'register-header': Header,
    'register-footer': Footer
  },
  data () {
    return {
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.hissu{
  border: solid #000000;
}
.name{
  border: solid #000000;
}
</style>
