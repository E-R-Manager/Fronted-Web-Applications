<script>
import HeaderBar from "../../public/components/header-bar.component.vue";
import TableClients from "../components/table-clients.component.vue";

export default{
  components: {
    HeaderBar,
    TableClients
  }
}
</script>

<template>
  <HeaderBar/>
  <TableClients class="table-clients"/>
</template>

<style scoped>
.table-clients {
  margin-top: 5rem;
}
</style>