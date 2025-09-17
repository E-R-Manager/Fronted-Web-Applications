<script>
import {UserService} from "../../iam/services/user.service.js";
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
            router.push('');
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
  },
  created(){
    if (localStorage.getItem('isActive') === 'true') {
      this.router.push('/home');
    }
  }
}
</script>

<template>
  <form class="login-form">
    <h2>Login</h2>
    <div class="form-group">
      <label for="username">Username:</label>
      <input type="text" id="username" v-model="username" required />
    </div>
    <div class="form-group">
      <label for="password">Password:</label>
      <input type="password" id="password" v-model="password" required />
    </div>
    <div class="form-group-btn">
      <pv-button label="Login" class="btn" @click="login"></pv-button>
    </div>
  </form>
</template>

<style scoped>

</style>