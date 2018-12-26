<template>
  <div id="content">
    <el-form :inline="true" status-icon :model="city" class="demo-form-inline" ref="city">
      <el-form-item label="城市名">
        <el-select v-model="options.city_id" placeholder="长沙" @change="getData">
          <el-option
            v-for="item in options"
            :key="item.city_id"
            :label="item.name"
            :value="item.city_id"
          ></el-option>
        </el-select>
      </el-form-item>
    </el-form>
    <div id="chart"></div>
  </div>
</template>
<script>
import G2 from '@antv/g2'
import DataSet from '@antv/data-set'
const axios = require('axios')
const keycast = 'qriedofrwqwkwt3b'
export default {
  name: 'weather',
  data() {
    return {
      city: {
        cityName: ''
      },
      options: [],
      data: {},
      charOpt: null
    }
  },
  methods: {
    // 递归遍历数据 拿到 cityId
    selectCityId(response) {
      var _this = this
      response.forEach(item => {
        if (item.list === undefined) {
          _this.options.push(item)
        } else {
          _this.selectCityId(item.list)
        }
      })
    },
    getData(value) {
      var _this = this
      axios.get('/api', {
        params: {
          key: keycast,
          city: value
        }
      }).then(function (response) {
        _this.data = response.data.data.list
        _this.drawChart(_this.data)
      }).catch(function (error) {
        console.log(error)
      })
    },
    drawChart(data) {
      var ds = new DataSet()
      // 数据转换
      const dv = ds.createView().source(data).transform({
        type: 'pick',
        fields: ['date', 'qw1', 'qw2'] // 决定保留哪些字段，如果不传，则返回所有字段
      })
      dv.transform({
        type: 'map',
        callback(row) {
          row.qw1 = row.qw1 + ""
          row.qw2 = row.qw2 + ""
          return row;
        }
      })
      dv.transform({
        type: 'rename',
        map: {
          qw1: '最高温度',
          qw2: '最低温度'
        }
      })
      dv.transform({
        type: 'fold',
        fields: ['最低温度', '最高温度'],
        key: 'key'
      })
      dv.transform({
        type: 'sort',
        callback(a, b) {
          return a.value - b.value
        }
      })
      this.charOpt.source(dv, {
        date: {
          range: [0, 1]
        }
      })
      this.charOpt.axis('value', {
        label: {
          formatter: function formatter(val) {
            return val + '°C'
          }
        }
      })
      this.charOpt.line().position('date*value').color('key').shape('smooth')
      this.charOpt.point().position('date*value').color('key').size(4).shape('point').style({
        stroke: '#fff',
        lineWidth: 1
      })
      this.charOpt.repaint()
    }
  },
  mounted: function () {
    var _this = this
    // 动态加载 cityID
    axios.get('http://api.yytianqi.com/citylist/id/1').then(function (response) {
      _this.selectCityId(response.data.list)
    })
    this.getData('CH250101')
    this.charOpt = new G2.Chart({
      container: 'chart',
      forceFit: true,
      height: 600
    })
  }
}
</script>
<style>
#content {
  padding-top: 20px;
  background-color: white;
}
</style>
