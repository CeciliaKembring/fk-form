<script setup>
import TheWelcome from '../components/TheWelcome.vue'
</script>

<template>
  <main>
    <TheWelcome />
    <form action="#">
      <label for="test_input">Test</label>
      <input type="text" id="test_input">
      <input type="submit" value="skicka">
    </form>
  </main>
</template>
