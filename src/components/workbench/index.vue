<template>
  <div class="">
    <!-- 页头开始 -->
    <!-- <div class="header_main"></div> -->
    <!--   <lc-header data-aos="fade-up" v-polyfills-aos></lc-header> -->
    <!-- 页头结束 -->
    <!-- 导航栏 -->
    <!-- <div class="nav_main"></div> -->
    <lc-nav v-if="isApp"></lc-nav>
    <lc-nav v-else data-aos="slide-right" v-polyfills-aos></lc-nav>
    <!-- 导航栏结束 -->
    <!-- 主体开始 -->
    <div class="content_main" v-polyfills-aos>
      <!-- <transition :name="transitionName">
        <router-view></router-view>
      </transition> -->
      <router-view></router-view>
    </div>
    <!-- 主体结束 -->
    <!-- 页尾开始 -->
    <!-- <div class="footer_main"></div> -->
    <footer-main></footer-main>
    <!-- 页尾结束 -->
    <!-- 版权开始 -->
    <!-- <div class="copyright_main"></div> -->
    <copyright-main></copyright-main>
    <!-- 版权结束 -->
  </div>
</template>
<script>
import lcNav from '@/components/workbench/views/nav_main.vue';
import footerMain from '@/components/workbench/views/footer_main.vue';
import copyrightMain from '@/components/workbench/views/copyright_main.vue';

import systemInfo from '@/utils/browser';

export default {
  name: 'app',
  data() {
    return {
      isApp: !systemInfo.IsPC,
    };
  },
  components: {
    lcNav,
    footerMain,
    copyrightMain,
  },
  mounted() {
    // getCompanyInfo().then(info => {
    //   eventHub.emit('companyInfo', info);
    // });
    // console.log(this);
  },
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
