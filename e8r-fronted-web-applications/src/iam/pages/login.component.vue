<script>
import {UserService} from "../services/user.service.js";
import {useRouter} from "vue-router";
import {ref, inject} from "vue";
import {AuthenticationService} from "../services/authentication.service.js";
import store from "../../store/store.js";

export default{
  name: "login.component",
  setup(){
    const userService = new UserService();
    const authenticationService = new AuthenticationService();
    const router = useRouter();
    const username = ref('');
    const password = ref('');

    const login = async () => {
      authenticationService.signIn(username.value, password.value).then(
          (response) => {
            let userId = response.data.id;
            let token = response.data.token;
            localStorage.setItem('token', token);
            store.commit('setUserId', userId);
            store.commit('setIsActive', true);
            router.push('/ods/home');
          }
      ).catch((error) => {
        alert("Incorrect username or password");
      });
    };
    return {
      router,
      login,
      username,
      password
    };
  }
}
</script>

<template>
  <div class="login-bg-container">
    <img src="../../assets/LoginBackground.webp" alt="Login Background" class="login-bg-img" />
    <div class="login-card">
      <div class="login-card-img">
        <img src="../../assets/LoginImage.webp" alt="Login" />
      </div>
      <form class="login-form">
        <h2>E&R Manager</h2>
        <div class="form-group">
          <label for="username">Usuario:</label>
          <input type="text" id="username" v-model="username" required />
        </div>
        <div class="form-group">
          <label for="password">Contraseña:</label>
          <input type="password" id="password" v-model="password" required />
        </div>
        <div class="form-group-btn">
          <pv-button label="Iniciar sesión" class="btn" @click="login"></pv-button>
        </div>
      </form>
    </div>
  </div>
</template>

<style scoped>
.login-bg-container {
  position: relative;
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
}
.login-bg-img {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  object-fit: cover;
  z-index: 1;
  pointer-events: none;
}
.login-card {
  font-family: 'Inter', sans-serif;
  position: relative;
  z-index: 2;
  background: #fff;
  border-radius: 16px;
  border: 1px solid #ddd;
  box-shadow: 0 4px 24px rgba(0,0,0,0.08);
  min-width: 600px;
  max-width: 750px;
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: stretch;
  padding: 0;
  overflow: hidden;
}
.login-card-img {
  flex: 1 1 40%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #f5f5f5;
  border-top-left-radius: 16px;
  border-bottom-left-radius: 16px;
  overflow: hidden;
}
.login-card-img img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.login-form {
  flex: 1 1 60%;
  padding: 3rem 2.5rem 2.5rem 2.5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: left;
}
.login-form h2 {
  color: #3001C0;
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 2rem;
  text-align: left;
  letter-spacing: 0.5px;
}
.form-group label {
  color: #3001C0;
  font-weight: 600;
  margin-bottom: 0.5rem;
  display: block;
  font-size: 1rem;
}
.form-group input {
  width: 100%;
  padding: 0.75rem 1rem;
  border: 1px solid #ccc;
  border-radius: 8px;
  font-size: 1rem;
  margin-bottom: 1.5rem;
  font-family: 'Inter', sans-serif;
}
.form-group-btn {
  display: flex;
  justify-content: flex-start;
}
.btn {
  background: #3001C0 !important;
  color: #fff !important;
  font-family: 'Inter', sans-serif !important;
  font-weight: 600 !important;
  font-size: 1.1rem !important;
  border-radius: 8px !important;
  padding: 0.75rem 2rem !important;
  border: none !important;
  box-shadow: 0 2px 8px rgba(48,1,192,0.08);
  transition: background 0.2s;
}
.btn:hover {
  background: #23008a !important;
}
</style>
