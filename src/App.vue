<template>
  <div class="nav">
    <router-link class="p-button" to="/calculator">Caluclator</router-link>
    <router-link class="p-button" to="/userlist">UserList</router-link>
  </div>

  <router-view></router-view>
</template>

<script lang="ts">
export default {
  name: "App",
  setup() {
  }
}
</script>

<style lang="scss" scoped>
.nav {
  display: flex;
  justify-content: center;
  gap: 10px;
  margin-bottom: 50px;
  padding-top: 5px;
  .p-button {
    text-decoration: none;
    line-height: 1;
    opacity: .3;
    &:hover {
      opacity: 1;
    }
  }
}
</style>
