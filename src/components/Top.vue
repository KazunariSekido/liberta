<template>
  <div id="top" class="toppage">
    <top-header></top-header>
    <h1>TopPage</h1>
    <top-search></top-search>
    <top-info></top-info>
    <top-voice></top-voice>
    <top-feature></top-feature>
    <top-faq></top-faq>
    <top-resister></top-resister>
    <top-sns></top-sns>
    <h1 class="map">google map</h1>
    <top-footer></top-footer>
  </div>
</template>

<script>
import Header from '@/components/header'
import Footer from '@/components/footer'
import TopSearch from '@/components/topcomp/topSearch'
import TopInfo from '@/components/topcomp/topInfo'
import TopVoice from '@/components/topcomp/topVoice'
import TopFeature from '@/components/topcomp/topFeature'
import TopBegginer from '@/components/topcomp/topBegginer'
import TopFaq from '@/components/topcomp/topFaq'
import TopResister from '@/components/topcomp/topResister'
import TopSns from '@/components/topcomp/topSns'
export default {
  name: 'Top',
  components: {
    'top-header': Header,
    'top-footer': Footer,
    'top-search': TopSearch,
    'top-info': TopInfo,
    'top-voice': TopVoice,
    'top-feature': TopFeature,
    'top-begginer': TopBegginer,
    'top-faq': TopFaq,
    'top-resister': TopResister,
    'top-sns': TopSns
  },
  data () {
    return {
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.toppage{
  padding: 0.5em 1em;
  margin: 2em 0;
  font-weight: bold;
  border: solid 3px #000000;
}
.map{
  padding: 0.5em 1em;
  margin: 2em 0;
  font-weight: bold;
  border: solid 3px #000000;
}
</style>
