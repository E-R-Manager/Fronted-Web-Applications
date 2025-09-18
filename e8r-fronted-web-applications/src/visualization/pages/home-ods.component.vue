<script>
import HeaderBar from "../../public/components/header-bar.component.vue";

import { computed } from 'vue';
import store from '../../store/store.js';
import {useRouter} from "vue-router";

export default {
  components: {
    HeaderBar
  },
  setup() {
    const userId = computed(() => store.state.user_id);
    const isActive = computed(() => store.state.isActive);
    const router = useRouter();
    const logout = () => {
      localStorage.removeItem('token');
      store.commit('setUserId', null);
      store.commit('setIsActive', false);
      router.push('/login');
    };
    return { userId, isActive, logout };
  }
}
</script>

<template>
  <HeaderBar />
  <div class="home-ods-container">
    <h1>Bienvenido a home ods</h1>
    <p>User ID: {{ userId }}</p>
    <p>isActive: {{ isActive }}</p>
    <button @click="logout">Cerrar sesión</button>
  </div>
</template>

<style scoped>
</style>