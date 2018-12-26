<template>
  <a-layout id="components-layout-demo-side" style="min-height: 100vh">
    <a-layout-sider collapsible v-model="collapsed">
      <div class="logo"/>
      <a-menu theme="dark" :defaultSelectedKeys="['1']" mode="inline">
        <a-menu-item key="1">
          <a-icon type="pie-chart"/>
          <span>Option 1</span>
          <router-link to="/HelloWorld" name="content"></router-link>
        </a-menu-item>
        <a-menu-item key="2">
          <a-icon type="desktop"/>
          <span>Option 2</span>
          <router-link to="/prop" name="contenttwo"></router-link>
        </a-menu-item>
        <a-sub-menu key="sub1">
          <span slot="title">
            <a-icon type="Table"/>
            <span>Table</span>
          </span>
          <a-menu-item key="3">table
            <router-link to="/table" name="table"></router-link>
          </a-menu-item>
        </a-sub-menu>
        <a-menu-item key="4">
          <a-icon type="desktop"/>
          <span>weather</span>
          <router-link to="/weather" name="weather"></router-link>
        </a-menu-item>
      </a-menu>
    </a-layout-sider>
    <a-layout>
      <a-layout-header style="background: #fff; padding: 0"/>
      <a-layout-content style="margin: 0 8px">
        <a-breadcrumb style="margin: 8px 0">
          <a-breadcrumb-item>XXX</a-breadcrumb-item>
          <a-breadcrumb-item>xxx</a-breadcrumb-item>
        </a-breadcrumb>
        <router-view></router-view>
      </a-layout-content>
      <a-layout-footer style="text-align: center">Ant Design ©2018 Created by Ant UED</a-layout-footer>
    </a-layout>
  </a-layout>
</template>
<script>
export default {
  data () {
    return {
      collapsed: false
    }
  }
}
</script>
<style>
#components-layout-demo-side .logo {
  height: 32px;
  background: rgba(255, 255, 255, 0.2);
  margin: 16px;
}
#app {
  margin: 0;
  padding: 0;
}
.ant-layout-header {
  height: 50px;
}
.ant-layout-sider {
  width: 180px;
}
</style>
