<script>
import HeaderBar from "../../public/components/header-bar.component.vue";
import TableClients from "../components/table-clients.component.vue";
import {CustomerService} from "../../registration/services/client.service.js";
import iconAdd from "../../assets/icon_add.png";
import iconFilter from "../../assets/icon_filter.png";

export default {
  name: "home-client",
  components: {
    HeaderBar,
    TableClients
  },
  data() {
    return {
      customerService: new CustomerService(),
      customers: [],
      iconAdd,
      iconFilter
    }
  },
  async mounted() {
    //const response = await this.customerService.getAllCustomersPaginated(1, 10);
    //this.customers = Array.isArray(response.data?.customers) ? response.data.customers : [];
    const response = await this.customerService.getAll();
    this.customers = Array.isArray(response.data) ? response.data : [];
  }
}
</script>

<template>
  <HeaderBar/>
  <h2 class="main-title">ORDENES DE SERVICIO</h2>
  <div class="actions">
    <pv-button class="action-btn registrar-btn">
      <img :src="iconAdd" alt="Registrar" style="width:20px;height:20px;margin-right:0.5rem;" />
      REGISTRAR
    </pv-button>
    <pv-button class="action-btn filtros-btn">
      <img :src="iconFilter" alt="Filtros" style="width:20px;height:20px;margin-right:0.5rem;" />
      FILTROS
    </pv-button>
  </div>
  <TableClients :clients="customers" class="table-clients"/>
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
.actions {
  display: flex;
  gap: 1rem;
  margin-left: 8rem;
  margin-bottom: 2rem;
}
.action-btn {
  font-family: 'Inter', sans-serif;
  font-weight: 800;
  font-size: 1rem;
  display: flex;
  align-items: center;
  padding: 0.5rem 1.2rem;
  border-radius: 8px;
  cursor: pointer;
  transition: background 0.2s;
}

/* Botón Registrar */
.registrar-btn {
  background: #3001C0 !important;
  color: #fff !important;
  border: 2px solid #3001C0 !important;
}

/* Botón Filtros */
.filtros-btn {
  background: #fff !important;
  color: #3001C0 !important;
  border: 2px solid #3001C0 !important;
}
</style>
