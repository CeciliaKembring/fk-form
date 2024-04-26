<script setup>
import { useRouter } from 'vue-router';

const navigateToMainForm = () => {
  const router = useRouter();
  if (router) {
    router.push({ name: 'mainForm' });
  } else {
    console.error("Router is not defined.");
  }
};
</script>

<template>
<div class="main-form">
<div class="container-form">
<div class="box">
<h1>Ansök om bostadsbidrag</h1>
<p class="large">För att vi ska kunna anpassa ansökan till din situation behöver du först svara på några frågor.</p>
</div>

<div class="box">
<h3>Du eller ni som ansöker</h3>
<p class="bold">Ansöker du själv eller gemensamt med någon?</p>
<form class="first-form" action="#">
  <input type="radio" id="alone" name="application" value="alone">
  <label for="alone">Jag ansöker själv</label><br>
  <input type="radio" id="together" name="application" value="together">
  <label for="together">Jag ansöker gemensamt med någon</label><br>
</form>
</div>

<div class="box">
<h3>Barn över 18 år</h3>
<p class="bold">Bor det barn som har fyllt 18 år i bostaden?</p>
<form class="first-form" action="#">
  <input type="radio" id="no" name="kids" value="no">
  <label for="no">Nej, Inga barn över 18 år bor där</label><br>
  <input type="radio" id="yes" name="kids" value="yes">
  <label for="yes">Ja, det bor barn över 18 där</label><br>
</form>
</div>
<button type="button" class="apply" @click="navigateToMainForm">Till ansökan</button>
</div>
</div>
</template>

<style scoped>
.bold{
    margin-bottom: 20px;
}
</style>