<script>
import HeaderBar from "../../public/components/header-bar.component.vue";
import TableClients from "../components/table-clients.component.vue";
import {CustomerService} from "../../registration/services/client.service.js";

export default {
  name: "home-client",
  components: {
    HeaderBar,
    TableClients
  },
  data() {
    return {
      customerService: new CustomerService(),
      customers: []
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
  <TableClients :clients="customers" class="table-clients"/>
</template>

<style scoped>
.table-clients {
  margin-top: 10rem;
}
</style>