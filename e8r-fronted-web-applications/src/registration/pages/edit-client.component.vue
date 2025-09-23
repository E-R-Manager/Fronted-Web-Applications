<script>
import HeaderBar from "../../public/components/header-bar.component.vue";
export default {
  components: {
    HeaderBar
  },
  data() {
    return {
      showSidebar: true
    };
  },
  methods: {
    toggleSidebar() {
      this.showSidebar = !this.showSidebar;
    }
  }
}
</script>

<template>
  <HeaderBar/>
  <p class="main-title">INFORMACION DEL CLIENTE</p>
  <p class="sub-title">DATOS DEL CLIENTE</p>
  <button class="toggle-sidebar-btn" @click="toggleSidebar">
    {{ showSidebar ? 'OCULTAR' : 'OPCIONES' }}
  </button>
  <div
      class="sidebar"
      :class="{ 'sidebar-visible': showSidebar }"
  >
    <button class="sidebar-btn" style="background: #317624;">EDITAR</button>
    <button class="sidebar-btn" style="background: #9A3131;">CANCELAR</button>
    <button class="sidebar-btn" style="background: #3001C0;">REGISTRAR</button>
  </div>
</template>

<style scoped>
.main-title {
  font-family: 'Inter', sans-serif;
  color: #3001C0;
  font-size: 30px;
  font-weight: 800;
  margin-bottom: 24px;
  text-align: left;
  margin-top: 6rem;
  margin-left: 8rem;
}
.sub-title {
  font-family: 'Inter', sans-serif;
  color: #000;
  font-size: 1.2rem;
  font-weight: 800;
  margin-bottom: 24px;
  text-align: left;
  margin-left: 8rem;
}

.toggle-sidebar-btn {
  position: fixed;
  top: 6rem;
  right: 3rem; /* antes 2.5rem */
  z-index: 1001;
  background: #3001C0;
  color: #fff;
  border: none;
  padding: 0.7rem 1.2rem;
  border-radius: 8px;
  cursor: pointer;
  font-weight: 800;
}


.sidebar {
  position: fixed;
  top: 7.5rem;
  right: 2rem;
  width: 180px;
  background: #fff;
  box-shadow: 0 2px 12px rgba(0,0,0,0.12);
  border-radius: 12px;
  padding: 1.5rem 1rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  z-index: 1000;
  transform: translateX(110%);
  transition: transform 0.3s cubic-bezier(.4,0,.2,1);
}


.sidebar.sidebar-visible {
  transform: translateX(0);
}

.sidebar-btn {
  color: #fff;
  border: none;
  padding: 0.7rem ;
  border-radius: 6px;
  font-weight: 700;
  cursor: pointer;
  transition: background 0.2s;
}
.sidebar-btn:hover {
  background: #4b2fd6;
}
</style>