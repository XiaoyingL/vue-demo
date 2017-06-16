<template>
  <div id="app">
    <v-header :info="info"></v-header>
    <div class="tab">
      <div class="tab-item">
        <router-link to="/report">体检报告</router-link>
      </div>
      <div class="tab-item">
        <router-link to="/case">照片病例</router-link>
      </div>
      <div class="tab-item">
        <router-link to="/mission">健康任务</router-link>
      </div>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
  import Header from './components/header/Header.vue'
  export default {
    data () {
      return {
        info: {}
      }
    },
    created () {
      this.$http.get('/api/info').then(function (res) {
        res = res.body
        if (res.errno === 0) {
          this.info = res.data
        }
      }, function (res) {
        console.log(res.status)
      })
    },
    components: {
      'v-header': Header
    }
  }
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  #app .tab {
    display: flex;
    height: 45px;
    background-color: #f8f8f8;
    border-bottom: 1px solid #eeeeee;
  }

  #app .tab .tab-item {
    flex: 1;
    line-height: 45px;
    text-align: center;
    color: #9a9a9a;
  }

  #app .tab .tab-item a {
    display: block;
    height: 43px;
    font-size: 14px;
  }

  #app .tab .tab-item .router-link-active {
    color: #92d741;
    border-bottom: 2px solid #92d741;
  }

</style>
