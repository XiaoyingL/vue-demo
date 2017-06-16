<template>
  <div class="mission">
    <ul>
      <li v-for="(value, index) in mission" class="list">
        <div class="item">
          <div class="icon">
            <i :class="icon[value.type]"></i>
          </div>
          <div class="desc">
            <h3>{{value.description}}</h3>
          </div>
          <div class="arrow">
            <i class="arrow-right"></i>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>
<script>
  export default {
    data () {
      return {
        mission: {
          type: Object
        },
        icon: ['walk', 'xy', 'xt']
      }
    },
    created () {
      this.$http.get('/api/mission').then(function (res) {
        res = res.body
        if (res.errno === 0) {
          this.mission = res.data
        }
      }, function (res) {
        console.log(res.status)
      })
    }
  }
</script>
<style scoped>
  .mission {
    padding: 0 12px;
  }

  .mission .list .item {
    display: flex;
    position: relative;
    height: 40px;
    line-height: 40px;
    border-bottom: 1px solid #eeeeee;
  }

  .mission .list .item .icon {
    flex: 0 0 25px;
  }

  .mission .list .item .icon i {
    display: inline-block;
    width: 15px;
    height: 18px;
    position: absolute;
    top: 11px;
    left: 0;
  }

  .mission .list .item .desc {
    flex: 1;
    font-size: 14px;
  }

  .walk {
    background: url('icon_bs@3x.png') no-repeat;
    -webkit-background-size: 15px 18px;
    background-size: 15px 18px;
  }

  .xy {
    background: url('icon_xy@3x.png') no-repeat;
    -webkit-background-size: 15px 18px;
    background-size: 15px 18px;
  }

  .xt {
    background: url('icon_xt@2x.png') no-repeat;
    -webkit-background-size: 15px 18px;
    background-size: 15px 18px;
  }

  .mission .list .item .arrow {
    flex: 0 0 20px;
  }

  .mission .list .item .arrow-right {
    position: absolute;
    top: 12px;
    right: 0;
    display: block;
    background: url("arrow_right@3x.png") no-repeat;
    width: 8px;
    height: 15px;
    -webkit-background-size: 8px 15px;
    background-size: 8px 15px;
  }
</style>
