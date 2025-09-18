<script setup lang="ts">

</script>

<template>
  <div class="notfound-container">
    <h1>Página no encontrada</h1>
    <p class="error-code">Error 404</p>
  </div>
</template>

<script setup lang="ts">
</script>

<style scoped>
.notfound-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 60vh;
  text-align: center;
}

h1 {
  font-size: 2rem;
  margin-bottom: 0.5rem;
}

.error-code {
  font-size: 1.5rem;
  color: #888;
}
</style>
