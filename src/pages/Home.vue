<template>
    <el-container class="wh100">
        <el-aside width="240px" height="100%">
            <el-menu background-color="#545c64" text-color="#fff" active-text-color="#ffd04b">
                <el-submenu index="1" default-active="1-1">
                    <template slot="title">
                    <i class="el-icon-location"></i>
                    <span slot="title">导航一</span>
                    </template>
                    <el-menu-item-group>
                        <el-menu-item index="1-1" @click="goArtLists">选项1</el-menu-item>
                        <el-menu-item index="1-2">选项2</el-menu-item>
                    </el-menu-item-group>
                </el-submenu>
            </el-menu>
        </el-aside>
        <el-main height="100%">
            <router-view></router-view>
        </el-main>
    </el-container>
</template>
<script>
import Vue from "vue";
import { Menu, Submenu, MenuItem, MenuItemGroup } from "element-ui";
Vue.use(Menu);
Vue.use(Submenu);
Vue.use(MenuItem);
Vue.use(MenuItemGroup);

export default {
  data() {
    return {};
  },
  methods: {
    goArtLists() {
      this.$router.push({ path: "/home/articleLists" });
    }
  }
};
</script>
<style lang="scss" scoped>
.el-menu {
  height: 100%;
  background-color: #545c64;
}
.el-main {
  position: relative;

  .pop-arr {
    position: absolute;
    top: 0;
    left: 0;

    .el-button {
      background-color: #eee;
    }
  }
}
</style>


