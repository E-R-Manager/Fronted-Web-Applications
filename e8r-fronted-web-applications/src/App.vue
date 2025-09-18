<script setup>
import { useRoute } from 'vue-router';
import HeaderBar from "../src/public/components/header-bar.component.vue";

const route = useRoute();
</script>

<template>
  <HeaderBar v-if="route.path !== '/login'" />
  <router-view />
</template>
