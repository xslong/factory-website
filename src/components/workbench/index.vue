<template>
  <div class="">
    <!-- 导航栏 -->
    <lc-nav v-if="isApp"></lc-nav>
    <lc-nav v-else data-aos="slide-right" v-polyfills-aos></lc-nav>
    <!-- 导航栏结束 -->
    <el-container class="container" style="height: 500px;">
      <el-aside v-show="subMenus.length > 0 " width="150px">
        <el-menu
          :default-active="activeSubMenu"
          mode="vertical"
          @select="handleSelect"
          background-color="#fff"
          :router="true"
          text-color="#000"
          active-text-color="#409EFF"
        >
          <template v-for="item in subMenus">
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
            <el-menu-item :index="item.state" :key="item.id" v-else>
              <i class="el-icon-menu"></i>
              <span slot="title">{{ $t(item.name) }}</span>
            </el-menu-item>
          </template>
        </el-menu>
      </el-aside>

      <!-- 主体开始 -->
      <el-main v-polyfills-aos>
        <router-view></router-view>
      </el-main>
      <!-- 主体结束 -->
    </el-container>

    <!-- 页尾开始 -->
    <footer-main></footer-main>
    <!-- 页尾结束 -->
    <!-- 版权开始 -->
    <copyright-main></copyright-main>
    <!-- 版权结束 -->
  </div>
</template>
<script>
import lcNav from '@/components/workbench/views/nav_main.vue';
import footerMain from '@/components/workbench/views/footer_main.vue';
import copyrightMain from '@/components/workbench/views/copyright_main.vue';

import systemInfo from '@/utils/browser';
import { tree } from '@/utils';
import { getNavMenusList } from './apis';
const index = "/workbench";
export default {
  name: 'app',
  data() {
    return {
      isApp: !systemInfo.IsPC,
      allMenu: [],
      subMenus: [],
      activeSubMenu: null
    };
  },
  components: {
    lcNav,
    footerMain,
    copyrightMain,
  },
  mounted() {
    getNavMenusList().then((res = []) => {
      this.allMenu = tree.foreachTreeById(res);
      this.refreshSubMenu(this.$route.path);
    });
  },
  /**fix当通过原生跳转时 无法触发更新菜单 */
  watch: {
    $route(to) {
        this.refreshSubMenu(to.path);
    },
  },
  methods: {
    /* 刷新子菜单 */
    refreshSubMenu(path) {
      let activeLevel1 = this.allMenu.find(e => e.state === path || (e.state !== index && path.startsWith(e.state)));
      console.info('activeLevel1', activeLevel1);
      if (activeLevel1 && activeLevel1.$hasChildren()) {
        this.subMenus = activeLevel1.children;
        this.activeSubMenu = path;
      } else {
        this.subMenus = [];
        this.activeSubMenu = null;
      }
    },
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    },
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}

/* .fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to  {
  opacity: 0;
} */
/* .fade-leave-active below version 2.1.8 */
</style>
