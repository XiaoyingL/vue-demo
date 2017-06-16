<template>
  <div class="header">
    <div class="head">
      <h2 class="title">成员信息</h2>
      <a href="javascript:history.go(-1)">
        <i class="back"></i>
      </a>
    </div>
    <div class="info box">
      <div class="avatar">
        <img :src="info.avatar" alt="" width="70" height="70">
      </div>
      <div class="person">
        <h3 class="name">{{info.name}}</h3>
        <p class="nickname">昵称: {{info.nickname}}</p>
      </div>
      <div class="arrow">
        <i class="arrow"></i>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      info: {
        type: Object
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .header {
    font-size: 0;
  }

  .header .head {
    position: relative;
    height: 42px;
    width: 100%;
    background-color: #92d741;
    border-bottom: 1px solid #eeeeee;
  }

  .header .head a {
    position: absolute;
    top: 0;
    left: 0;
    width: 42px;
    height: 42px;
  }

  .header .head a .back {
    position: absolute;
    top: 12px;
    left: 10px;
    display: block;
    background: url("back@3x.png") no-repeat;
    width: 10px;
    height: 18px;
    -webkit-background-size: 10px 18px;
    background-size: 10px 18px;
  }

  .header .head .title {
    line-height: 42px;
    color: #fff;
    text-align: center;
    font-size: 15px;
  }

  .header .info {
    display: flex;
    height: 90px;
    width: 100%;
    border-bottom: 1px solid #eeeeee;
  }

  .header .info .avatar {
    flex: 0 0 70px;
    padding: 0 12px;
  }

  .header .info .avatar img {
    border-radius: 50%;
    margin-top: 12px;
  }

  .header .info .person {
    flex: 1;
  }

  .header .info .person .name {
    font-size: 15px;
    margin-top: 25px;
  }

  .header .info .person .nickname {
    font-size: 13px;
    margin-top: 10px;
    color: #999999;
  }

  .header .info .arrow {
    flex: 0 0 10px;
    position: relative;
    padding-right: 12px;
  }

  .header .info .arrow i {
    position: absolute;
    top: 36px;
    left: 0;
    display: block;
    background: url("arrow_right@3x.png") no-repeat;
    width: 10px;
    height: 18px;
    -webkit-background-size: 10px 18px;
    background-size: 10px 18px;
  }


</style>
