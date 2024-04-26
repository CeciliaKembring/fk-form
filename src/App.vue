<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>


    <div class="wrapper">
   
      <nav>
        <RouterLink to="/">Startsida</RouterLink>
        <RouterLink to="/mainForm">Ansök om bostadsbidrag</RouterLink>
      </nav>
    </div>
  </header>
<main>
  <RouterView />
</main>
</template>

<style scoped>
  nav {
    display: flex;
    flex-direction: column;
  }

</style>
