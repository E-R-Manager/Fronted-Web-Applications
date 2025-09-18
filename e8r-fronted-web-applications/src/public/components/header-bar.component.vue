<script setup>
import {computed, ref, watch, onMounted} from "vue";
import { defineProps } from "vue";
import { useStore } from 'vuex';
import store from "../../store/store.js";
import {useRouter} from "vue-router";

const router = useRouter();

const logout = () => {
  localStorage.removeItem('token');
  store.commit('setUserId', null);
  store.commit('setIsActive', false);
  localStorage.setItem('token', '');
  router.push('/login');
};
</script>

<template>
  <header class="header-bar">
    <nav class="nav-center">
      <router-link to="" class="nav-link">PEDIDOS</router-link>
      <router-link to="" class="nav-link">CLIENTES</router-link>
      <router-link to="" class="nav-link">INVENTARIO</router-link>
      <router-link to="" class="nav-link">SERVICIOS</router-link>
    </nav>
  </header>
</template>

<style scoped>
.header-bar {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 64px;
  background: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 100;
  box-shadow: 0 4px 24px rgba(48,1,192,0.18), 0 1.5px 6px rgba(0,0,0,0.08);
  font-family: 'Inter', sans-serif;
}

.nav-center {
  display: flex;
  gap: 2.5rem;
}

.nav-link {
  color: #3001C0;
  font-size: 1.15rem;
  font-weight: 600;
  text-decoration: none;
  transition: background 0.2s, color 0.2s;
  padding: 0.5rem 1rem;
  border-radius: 6px;
  font-family: 'Inter', sans-serif;
}

.nav-link:hover,
.router-link-exact-active {
  background: #3001C0;
  color: #fff;
}
</style>
