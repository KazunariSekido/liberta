<template>
  <div id="top">
    <top-header></top-header>
    <top-search></top-search>
    <top-info></top-info>
    <top-voice></top-voice>
    <top-feature></top-feature>
    <top-faq></top-faq>
    <top-resister></top-resister>
    <h1>TopPage</h1>
  </div>
</template>

<script>
import Header from '@/components/header'
import TopSearch from '@/components/topcomp/topSearch'
import TopInfo from '@/components/topcomp/topInfo'
import TopVoice from '@/components/topcomp/topVoice'
import TopFeature from '@/components/topcomp/topFeature'
import TopBegginer from '@/components/topcomp/topBegginer'
import TopFaq from '@/components/topcomp/topFaq'
import TopResister from '@/components/topcomp/topResister'
export default {
  name: 'Top',
  components: {
    'top-header': Header,
    'top-search': TopSearch,
    'top-info': TopInfo,
    'top-voice': TopVoice,
    'top-feature': TopFeature,
    'top-begginer': TopBegginer,
    'top-faq': TopFaq,
    'top-resister': TopResister
  },
  data () {
    return {
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
