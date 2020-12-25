<template>
  <div class="nav_main">
    <el-header class="header" style="height: 70px;">
      <el-container class="container">
        <el-aside>
          <router-link to="/app/home">
            <img :src="logo" alt="" width="100px;" />
          </router-link>
        </el-aside>
        <el-menu
          :default-active="activeMenu"
          mode="horizontal"
          @select="handleSelect"
          background-color="#fff"
          :router="true"
          text-color="#000"
          active-text-color="#409EFF"
        >
          <template v-for="item in menus">
            <!-- 菜单包含子级 -->
            <el-submenu
              :index="String(item.id)"
              :key="item.id"
              v-if="item.$hasChildren()"
            >
              <template slot="title">{{ $t(item.name) }}</template>
              <el-menu-item
                :index="item.state"
                v-for="item in item.children"
                :key="'lg-' + item.id"
                >{{ $t(item.name) }}</el-menu-item
              >
            </el-submenu>
            <!-- 菜单不包含子级 -->
            <el-menu-item :index="item.state" :key="item.id" v-else>{{
              $t(item.name)
            }}</el-menu-item>
          </template>
          <el-menu-item index="xxxxxx">
            <el-button size="medium">
              {{ $t('XXX') }}
            </el-button>
          </el-menu-item>
        </el-menu>
      </el-container>
    </el-header>
    <!-- pc端菜单 -->

  </div>
</template>
<script>
import { tree } from '@/utils';
import { getNavMenusList } from '../apis';

import eventHub from '../../../eventHub';
let logo = require('@/assets/images/logo.icon.png');

export default {
  components: {
  },
  data() {
    return {
      logo: logo,
      menus: [],
      activeMenu: '/app/home',
      isShowNavMenu: false /**在手机端 采用 抽屉式菜单 */,
    };
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    },
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
  },
  mounted() {
    getNavMenusList().then((res = []) => {
      this.menus = tree.foreachTreeById(res);
    });

    this.activeMenu = this.$route.path || '/app/home';
    eventHub.$on('isShowNavMenu', () => {
      this.isShowNavMenu = !this.isShowNavMenu;
    });
  },
  destroyed() {
    eventHub.$off('isShowNavMenu');
  },
  /**fix当通过原生跳转时 无法触发更新菜单 */
  watch: {
    $route(to) {
      this.activeMenu = to.path;
      if (this.isShowNavMenu) {
        this.isShowNavMenu = false;
      }
    },
  },
};
</script>
<style lang="scss">
.nav_main {
  width: 100%;
  background: #fff;
  position: relative;
  // z-index: 3;
}
.el-drawer {
  background-color: #fff;
}
.header .container {
  border-bottom: 1px solid #dcdfe6;
}
.el-menu.el-menu--horizontal {
  border-bottom: 0;
}
/* 菜单鼠标悬浮*/
.el-menu-item:hover,
.el-submenu__title:hover {
  outline: 0 !important;
  background: white !important;
}
/* 菜单选中颜色*/
/*.el-menu-item.is-active {*/
/*  color: #fff !important;*/
/*  background: #409eff !important;*/
/*}*/
</style>
