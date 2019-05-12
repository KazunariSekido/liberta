<template>
  <div class="topFaq">
    <h2>よくある質問</h2>
    <el-tree :data="q1" :props="defaultProps" @node-click="handleNodeClick"></el-tree>
    <el-tree :data="q2" :props="defaultProps" @node-click="handleNodeClick"></el-tree>
    <el-tree :data="q3" :props="defaultProps" @node-click="handleNodeClick"></el-tree>
    <el-tree :data="q4" :props="defaultProps" @node-click="handleNodeClick"></el-tree>
    <input class="hd_btn" type="button" @click="toFaq" value="すべての質問を見る">
  </div>
</template>

<script>
export default {
  name: 'TopFaq',
  data () {
    return {
      q1: [{
        label: 'Q.未経験・無資格でも大丈夫ですか？',
        children: [{
          label: 'A.Of course!!!'
        }]
      }],
      q2: [{
        label: 'Q.派遣社員に有給はありますか？',
        children: [{
          label: 'A.Of course!!!'
        }]
      }],
      q3: [{
        label: 'Q.ブランクが長いのですが、就職できますか？',
        children: [{
          label: 'A.Of course!!!'
        }]
      }],
      q4: [{
        label: 'Q.？？？？？？？',
        children: [{
          label: 'A.Of course!!!'
        }]
      }],
      defaultProps: {
        children: 'children',
        label: 'label'
      }
    }
  },
  methods: {
    toFaq () {
      this.$router.push('/faq')
    },
    handleNodeClick (data) {
      console.log(data)
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
