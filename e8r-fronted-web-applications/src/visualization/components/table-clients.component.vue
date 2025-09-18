<script>
export default {
  name: "table-clients",
  data() {
    return {
      clients: [
        { id: 1, fullName: "JUAN PEREZ", ruc: "20123456789", dni: "12345678" },
        { id: 2, fullName: "ANA GOMEZ", ruc: "20987654321", dni: "87654321" },
        { id: 3, fullName: "CARLOS RUIZ", ruc: "20456789012", dni: "23456789" },
        { id: 4, fullName: "MARIA TORRES", ruc: "20876543210", dni: "98765432" },
        { id: 5, fullName: "LUIS FERNANDEZ", ruc: "20345678901", dni: "34567890" },
        { id: 6, fullName: "PATRICIA SALAS", ruc: "20765432109", dni: "87654320" },
        { id: 7, fullName: "RICARDO DIAZ", ruc: "20234567890", dni: "45678901" },
        { id: 8, fullName: "LUCIA CASTRO", ruc: "20654321098", dni: "76543210" },
        { id: 9, fullName: "MIGUEL ROJAS", ruc: "20543210987", dni: "56789012" },
        { id: 10, fullName: "SOFIA HERRERA", ruc: "20109876543", dni: "89012345" },
      ],
    };
  },
};
</script>

<template>
  <table class="clients-table">
    <thead>
    <tr>
      <th>NRO</th>
      <th>NOMBRES Y APELLIDOS</th>
      <th>RUC</th>
      <th>DNI</th>
      <th></th>
      <th></th>
    </tr>
    </thead>
    <tbody>
    <tr v-for="(client, index) in clients" :key="client.id">
      <td>{{ index + 1 }}</td>
      <td>{{ client.fullName }}</td>
      <td>{{ client.ruc }}</td>
      <td>{{ client.dni }}</td>
      <td>
        <img src="../../assets/icon_more.png" alt="Ver más" class="icon-btn" title="Ver más" />
      </td>
      <td>
        <img src="../../assets/icon_delete.png" alt="Eliminar" class="icon-btn" title="Eliminar" />
      </td>
    </tr>
    </tbody>
  </table>
</template>


<style scoped>
.clients-table {
  width: 80%;
  border-collapse: collapse;
  font-family: 'Inter', sans-serif;
  font-size: 12px;
  margin: 0 auto;
}

.clients-table th,
.clients-table td {
  border-left: none;
  border-right: none;
  border-top: 1px solid #ddd;
  border-bottom: 1px solid #ddd;
  padding: 8px;
  font-weight: 100;
}

.clients-table th {
  background: #C1B3EC;
  text-align: left;
  border-top: 0.1px solid rgba(0,0,0,0.30);
  border-bottom: 0.1px solid rgba(0,0,0,0.30);
  font-weight: 800;
}


.clients-table th:nth-child(1),
.clients-table td:nth-child(1) {
  width: 50px;
}

.icon-btn {
  width: 24px;
  height: 24px;
  cursor: pointer;
  display: block;
  margin: 0 auto;
}
</style>