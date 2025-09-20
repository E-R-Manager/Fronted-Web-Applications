<script>
import HeaderBar from "../../public/components/header-bar.component.vue";
export default{
  components: {
    HeaderBar
  },
}
</script>

<template>
  <HeaderBar/>
  <p class="main-title">INFORMACION DEL CLIENTE</p>
  <p class="sub-title">DATOS DEL CLIENTE</p>
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
</style>