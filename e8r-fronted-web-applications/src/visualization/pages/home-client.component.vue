<script>
import HeaderBar from "../../public/components/header-bar.component.vue";
import TableClients from "../components/table-clients.component.vue";

import {Customer} from "../../registration/models/client.entity.js";
import {CustomerService} from "../../registration/services/client.service.js";

export default{
  name: "home-client",
  components: {
    HeaderBar,
    TableClients
  },
  computed: {
    id(){
      return this.$route.params.id;
    }
  },
  data(){
    return {
      customerService: new CustomerService(),
      customers: [],
      customer: Customer,
    }
  }
}
</script>

<template>
  <HeaderBar/>
  <TableClients class="table-clients"/>
</template>

<style scoped>
.table-clients {
  margin-top: 13rem;
}
</style>