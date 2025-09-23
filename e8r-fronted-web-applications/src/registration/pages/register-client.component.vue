<script>
import HeaderBar from "../../public/components/header-bar.component.vue";
import { BaseService } from "../../shared/services/base.service";

const customerService = new BaseService("customer");

export default {
  components: { HeaderBar },
  data() {
    return {
      showSidebar: true,
      customer: {
        name: "",
        dni: "",
        ruc: "",
        phoneNumber: "",
        email: "",
        address: "",
        customerType: 0
      },
      errorMessage: ""
    };
  },
  methods: {
    toggleSidebar() {
      this.showSidebar = !this.showSidebar;
    },
    toUppercase(field) {
      this.customer[field] = this.customer[field].toUpperCase();
    },
    onlyNumbers(field, maxLength) {
      this.customer[field] = this.customer[field].replace(/\D/g, "").slice(0, maxLength);
    },
    cancelRegister() {
      this.$router.push({ path: '/client/home' });
    },
    async registerCustomer() {
      const camposObligatorios = [
        { campo: "name", label: "NOMBRES Y APELLIDOS" },
        { campo: "dni", label: "DNI" },
        { campo: "ruc", label: "RUC" },
        { campo: "phoneNumber", label: "TELEFONO" },
        { campo: "email", label: "CORREO ELECTRONICO" },
        { campo: "address", label: "DIRECCION" }
      ];
      for (const item of camposObligatorios) {
        if (!this.customer[item.campo] || this.customer[item.campo].trim() === "") {
          alert(`El campo ${item.label} no puede estar vacío.`);
          return;
        }
      }
      if (this.customer.phoneNumber.length !== 9) {
        alert("El campo TELEFONO debe tener exactamente 9 dígitos.");
        return;
      }
      if (this.customer.dni.length !== 8) {
        alert("El campo DNI debe tener exactamente 8 dígitos.");
        return;
      }
      if (this.customer.ruc.length !== 11) {
        alert("El campo RUC debe tener exactamente 11 dígitos.");
        return;
      }
      if (!this.customer.email.includes("@")) {
        alert("El campo CORREO ELECTRONICO debe contener un '@'.");
        return;
      }
      try {
        await customerService.create(this.customer);
        this.$router.push({ path: '/client/home' });
      } catch (error) {
        alert("Error al registrar cliente. Verifica los datos.");
        console.error("Error al registrar cliente:", error);
      }
    }
  }
}
</script>

<template>
  <HeaderBar/>
  <p class="main-title">REGISTRO DE CLIENTE</p>
  <p class="sub-title">DATOS DEL CLIENTE</p>
  <div class="client-form">
    <label> NOMBRES Y APELLIDOS
      <input type="text" v-model="customer.name" @input="toUppercase('name')" style="text-transform: uppercase;" />
    </label>
    <div class="row">
      <label>TIPO DE CLIENTE
        <select v-model="customer.customerType" class="input-like">
          <option :value="0">PERSONA</option>
          <option :value="1">EMPRESA</option>
        </select>
      </label>
      <label>TELEFONO
        <input type="text" v-model="customer.phoneNumber" @input="onlyNumbers('phoneNumber', 9)" maxlength="9" />
      </label>
    </div>
    <div class="row">
      <label>DNI
        <input type="text" v-model="customer.dni" @input="onlyNumbers('dni', 8)" maxlength="8" />
      </label>
      <label>RUC
        <input type="text" v-model="customer.ruc" @input="onlyNumbers('ruc', 11)" maxlength="11" />
      </label>
    </div>
    <label>CORREO ELECTRONICO
      <input type="text" v-model="customer.email" />
    </label>
    <label>DIRECCION
      <input type="text" v-model="customer.address" @input="toUppercase('address')" style="text-transform: uppercase;" />
    </label>
  </div>
  <button class="toggle-sidebar-btn" @click="toggleSidebar">
    {{ showSidebar ? 'OCULTAR' : 'OPCIONES' }}
  </button>
  <div
      class="sidebar"
      :class="{ 'sidebar-visible': showSidebar }"
  >
    <button class="sidebar-btn" style="background: #9A3131;" @click="cancelRegister">CANCELAR</button>
    <button class="sidebar-btn" style="background: #29378F;" @click="registerCustomer">REGISTRAR</button>
    <p v-if="errorMessage" style="color: red;">{{ errorMessage }}</p>
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
.client-form {
  margin-left: 8rem;
  margin-bottom: 2rem;
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
  max-width: 700px;
}
.client-form label {
  display: flex;
  flex-direction: column;
  font-family: 'Inter', sans-serif;
  font-size: 1rem;
  font-weight: 700;
  color: #222;
  text-transform: uppercase;
  margin-bottom: 0.2rem;
  gap: 0.3rem;
}
.client-form .row {
  display: flex;
  gap: 2rem;
}
.client-form input {
  background: #f3f3f3;
  border: 1px solid #ccc;
  border-radius: 6px;
  padding: 0.6rem 1rem;
  font-size: 1rem;
  color: #888;
  font-family: 'Inter', sans-serif;
  font-weight: 500;
}
.client-form input:enabled {
  color: #222;
  background: #fff;
  border: 1px solid #3001C0;
}

.toggle-sidebar-btn {
  position: fixed;
  top: 6rem;
  right: 3rem;
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
.input-like {
  background: #f3f3f3;
  border: 1px solid #ccc;
  border-radius: 6px;
  padding: 0.6rem 1rem;
  font-size: 1rem;
  color: #888;
  font-family: 'Inter', sans-serif;
  font-weight: 500;
}
.input-like:enabled {
  color: #222;
  background: #fff;
  border: 1px solid #3001C0;
}
</style>
