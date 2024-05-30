<template>
  <div class="user-list flex justify-content-center align-items-center">
    <div class="user-item" v-for="u of userData">
      <div class="user-image">
        <img v-if="u.profilepic" :src="u.profilepic">
        <i v-else class="pi pi-user"></i>
      </div>
      <div class="user-data">
        <span class="user-prop">
          <strong>Name: </strong>
          <span class="user-prop-value">{{ u.name }}</span>
        </span>
        <span class="user-prop">
          <strong>Email: </strong>
          <span class="user-prop-value">{{ u.email }}</span>
        </span>
        <span class="user-prop">
          <strong>Role: </strong>
          <span class="user-prop-value">{{ u.role }}</span>
        </span>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import {onMounted, ref} from "vue";
import {UserController} from "@/shared/UserController";
import {User} from "@/shared/models/user.model";

export default {
  name: "UserList",
  setup() {
    const userData = ref<User[]>([]);

    onMounted(async () => {
      const uc = new UserController();
      userData.value = await uc.getAll();
    });

    return {
      userData
    }
  }
}

</script>
<style scoped lang="scss">
.user-list {
  flex-wrap: wrap;
  gap: 20px;
  max-width: 700px;
  margin: auto;
  padding: 10px;
  .user-item {
    width: 300px;
    display: flex;
    gap: 10px;
    background: #fff;
    border-radius: 100px;
    overflow: hidden;
    box-shadow: 2px 2px 3px #aaa;

    .user-image {
      overflow: hidden;
      border-radius: 100px;
      width: 100px;
      height: 100px;
      display: flex;
      justify-content: center;
      align-items: center;
      background: #ccc;

      > .pi {
        font-size: 40px;
        color: #fff;
      }

      > img {
        width: 100%;
        height: 100%;
      }
    }

    .user-data {
      display: flex;
      flex-direction: column;
      justify-content: center;
      gap: 10px;
      padding: 5px 10px 5px 0;
    }
  }
}
</style>