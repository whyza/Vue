<template>
  <el-table :data="tableData" style="width: 100%" :default-sort="{prop: 'date', order: 'descending'}">
    <el-table-column prop="id" label="id" sortable ></el-table-column>
    <el-table-column prop="date" label="日期" sortable ></el-table-column>
    <el-table-column prop="name" label="姓名" sortable ></el-table-column>
    <el-table-column prop="address" label="地址" :formatter="formatter"></el-table-column>
    <el-table-column fixed="right" label="操作" width="100">
      <template slot-scope="scope">
        <el-button @click="handleClick(scope.row.id)" type="text" size="small">查看</el-button>
        <el-button @click="handleDel(scope.row.id)" type="text" size="small">删除</el-button>
      </template>
    </el-table-column>
  </el-table>
</template>
<script>
export default {
  data () {
    return {
      tableData: [
        {
          id: 1,
          date: '2016-05-02',
          name: 'xxx',
          address: 'xxxxx 151'
        },
        {
          id: 2,
          date: '2016-05-03',
          name: 'xxx',
          address: 'xxxxx 152'
        },
        {
          id: 3,
          date: '2016-05-04',
          name: 'xxx',
          address: 'xxxxx 153'
        }
      ]
    }
  },
  methods: {
    formatter (row, column) {
      return row.address
    },
    handleDel (id) {
      console.log(id)
    },
    handleClick (id) {
      console.log(id)
    }
  }
}
</script>
<style>
</style>
