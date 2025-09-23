<script setup>
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
    <div class="header-content">
      <img src="../../assets/Logo.png" alt="Logo empresa" class="company-logo" />
      <nav class="nav-center">
        <router-link
            to="/ods/home"
            class="nav-link"
            :class="{ active: router.currentRoute.value.path.startsWith('/ods') }"
        >PEDIDOS</router-link>
        <router-link
            to="/client/home"
            class="nav-link"
            :class="{ active: router.currentRoute.value.path.startsWith('/client') }"
        >CLIENTES</router-link>
        <router-link
            to="/inventory/home"
            class="nav-link"
            :class="{ active: router.currentRoute.value.path.startsWith('/inventory') }"
        >INVENTARIO</router-link>
        <router-link
            to="/service/home"
            class="nav-link"
            :class="{ active: router.currentRoute.value.path.startsWith('/service') }"
        >SERVICIOS</router-link>
      </nav>
      <button class="logout-btn" @click="logout">
        <img src="../../assets/icon_logout.png" alt="CERRAR SESION" class="logout-icon" />
        CERRAR SESION
      </button>
    </div>
  </header>
</template>


<style scoped>
.header-bar {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 75px;
  background: #fff;
  z-index: 100;
  box-shadow: 0 4px 24px rgba(48,1,192,0.18), 0 1.5px 6px rgba(0,0,0,0.08);
  font-family: 'Inter', sans-serif;
  display: flex;
  align-items: center;
}
.header-content {
  position: relative;
  width: 100%;
  height: 75px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.nav-center {
  display: flex;
  gap: 2.5rem;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
}

.nav-link {
  color: #111;
  text-decoration: none;
  position: relative;
  padding: 0 1.5rem;
  height: 100%;
  display: flex;
  align-items: center;
  transition: color 0.2s;
  font-weight: bold;
}

.nav-link.active,
.nav-link:hover {
  color: #3001C0;
}
.nav-link.active::before,
.nav-link:hover::before {
  content: "";
  position: absolute;
  top: -31px;
  left: 0;
  width: 100%;
  height: 6px;
  background: #3001C0;
  border-radius: 2px 2px 0 0;
}

.logout-btn {
  height: 40px;
  min-width: unset;
  position: absolute;
  right: 2.5rem;
  top: 50%;
  transform: translateY(-50%);
  display: flex;
  align-items: center;
  gap: 0.5rem;
  background: #9A3131;
  color: #fff;
  border: none;
  border-radius: 6px;
  padding: 0 1rem;
  font-size: 0.95rem;
  font-weight: bold;
  cursor: pointer;
  transition: background 0.2s;
}
.logout-btn:hover {
  background: #7a2323;
}
.logout-icon {
  width: 22px;
  height: 22px;
}
.company-logo {
  position: absolute;
  left: 2rem;
  top: 50%;
  transform: translateY(-50%);
  height: 48px;
  width: auto;
  object-fit: contain;
}

</style>
