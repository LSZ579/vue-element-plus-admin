<template>
  <div class="navbar">
    <hamburger
      :is-active="sidebar.opened"
      class="hamburger-container"
      @toggleClick="toggleSideBar"
    />
    <el-icon @click="refresh" class="refresh">
      <refresh-left />
    </el-icon>
    <breadcrumb class="breadcrumb-container" />
    <div class="right-menu">
      <el-dropdown class="avatar-container" trigger="click">
        <div class="avatar-wrapper">
          <img :src="avatar + '?imageView2/1/w/80/h/80'" class="user-avatar" />
          <div class="user-name">admin</div>
          <el-icon class="el-icon-caret-bottom ">
            <arrow-down />
          </el-icon>
        </div>
        <template v-slot:dropdown>
          <el-dropdown-menu class="user-dropdown">
            <router-link to="/">
              <el-dropdown-item>Home</el-dropdown-item>
            </router-link>
            <a target="_blank" href="https://github.com/LSZ579/vue-elementPlus-admin">
              <el-dropdown-item>Github</el-dropdown-item>
            </a>
            <el-dropdown-item  >
              <span @click="logout"  style="display:block;">Log Out</span>
            </el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
    </div>
  </div>
</template>

<script>
import Breadcrumb from '@/components/Breadcrumb'
import Hamburger from '@/components/Hamburger'
import { useStore } from 'vuex'
import { computed } from 'vue'
import { useRouter, useRoute } from 'vue-router'
export default {
  components: {
    Breadcrumb,
    Hamburger
  },
  setup () {
    const store = useStore()
    const router = useRouter()
    const route = useRoute()
    const sidebar = computed(() => store.getters.sidebar)
    const avatar = computed(() => store.getters.avatar)
    const toggleSideBar = () => {
      store.dispatch('app/toggleSideBar')
    }
    // 退出登录
    const logout = async () => {
      await store.dispatch('tagsView/delAllVisitedViews')
      await store.dispatch('user/logout')
      console.log(store.state.tagsView.visitedViews)
      router.push(`/login?redirect=${route.fullPath}`)
    }
    // 刷新layout
    const refresh = async () => {
      const { fullPath } = route
      await store.dispatch('tagsView/delCachedView', route)
      router.replace({
        path: '/redirect' + fullPath
      })
    }
    return {
      sidebar,
      logout,
      toggleSideBar,
      avatar,
      refresh
    }
  }
}
</script>

<style lang="scss" scoped>
.navbar {
  height: 50px;
  overflow: hidden;
  position: relative;
  background: #fff;
  box-shadow: 0 1px 4px rgba(0, 21, 41, 0.08);

  .hamburger-container {
    line-height: 46px;
    height: 100%;
    float: left;
    cursor: pointer;
    transition: background 0.3s;
    -webkit-tap-highlight-color: transparent;

    &:hover {
      background: rgba(0, 0, 0, 0.025);
    }
  }
  .refresh {
    line-height: 52px;
    font-size: 20px;
    padding-top: 2px;
    height: 100%;
    color: rgb(133, 133, 133);
    float: left;
    cursor: pointer;
    transition: background 0.3s;
    -webkit-tap-highlight-color: transparent;
    margin: 0 20px;
  }

  .breadcrumb-container {
    float: left;
  }

  .right-menu {
    float: right;
    height: 100%;
    line-height: 50px;

    &:focus {
      outline: none;
    }

    .right-menu-item {
      display: inline-block;
      padding: 0 8px;
      height: 100%;
      font-size: 18px;
      color: #5a5e66;
      vertical-align: text-bottom;

      &.hover-effect {
        cursor: pointer;
        transition: background 0.3s;

        &:hover {
          background: rgba(0, 0, 0, 0.025);
        }
      }
    }

    .avatar-container {
      margin-right: 30px;

      .avatar-wrapper {
        position: relative;
        display: flex;
        align-items: center;
        cursor: pointer;
        line-height: 50px;
        .user-avatar {
          width: 40px;
          height: 40px;
          border-radius: 50%;
        }
        .user-name{
          margin-left: 5px;
        }
        .el-icon-caret-bottom {
          margin-left: 5px;
          font-size: 12px;
        }
      }
    }
  }
}
</style>
