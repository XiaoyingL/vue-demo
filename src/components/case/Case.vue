<template>
  <div class="report">
    <ul class="list">
      <li v-for="(value,index) in cases.records" class="list-item">
        <div class="picture">
          <img :src="value.pictureUrl" alt="" width="60" height="60">
        </div>
        <div class="content">
          <h3 class="name">{{value.address}}</h3>
          <p class="time">{{value.creation_time}}</p>
        </div>
        <div class="authority">
          <span v-show="value.authority>0">已授权</span>
        </div>
      </li>
    </ul>
    <div class="footer">
      <h4 class="btn">添加照片病例</h4>
    </div>
  </div>
</template>
<script>
  export default {
    data () {
      return {
        cases: {
          type: Object
        }
      }
    },
    created () {
      this.$http.get('/api/cases').then(function (res) {
        res = res.body
        if (res.errno === 0) {
          this.cases = res.data
        }
      }, function (res) {
        console.log(res.status)
      })
    }
  }
</script>
<style scoped>
  .report {
    font-size: 0;
  }

  .report .list {
    padding-bottom: 40px;
  }

  .report .list .list-item {
    margin: 12px;
    padding-bottom: 12px;
    display: flex;
    border-bottom: 1px solid #eeeeee;
  }

  .report .list .list-item .picture img {
    width: 60px;
    height: 60px;
    flex: 0 0 60px;
  }

  .report .list .list-item .content {
    flex: 1;
    margin-left: 13px;
  }

  .report .list .list-item .content .name {
    font-size: 15px;
    margin-top: 10px;
  }

  .report .list .list-item .content .time {
    font-size: 10px;
    color: #999999;
    margin-top: 15px;
  }

  .report .list .list-item .authority {
    flex: 0 0 40px;
    margin-top: 20px;
  }

  .report .list .list-item .authority span {
    display: inline-block;
    width: 40px;
    height: 16px;
    line-height: 16px;
    border-radius: 2px;
    text-align: center;
    background: #4fd38d;
    color: #fff;
    font-size: 10px;
  }

  .report .footer {
    position: fixed;
    bottom: 0;
    left: 0;
    height: 40px;
    width: 100%;
    line-height: 40px;
    background-color: #92d741;
    text-align: center;
  }

  .report .footer .btn {
    font-size: 15px;
    color: #fff;
  }


</style>
