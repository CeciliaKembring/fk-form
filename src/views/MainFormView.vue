<script setup>
import Info from '../components/Info.vue'
import Address from '../components/Address.vue'
import Family from '../components/Family.vue'
import Income from '../components/Income.vue'
import Assets from '../components/Assets.vue'
import Other from '../components/Other.vue'

const openInfoModal = () => {
  isInfoModalVisible.value = true;
};

const closeInfoModal = () => {
  isInfoModalVisible.value = false;
};

import { ref } from 'vue';

const isInfoModalVisible = ref(false);
</script>


<template>
    <div class="main-form" action="#">
      <div class="container-form">
        <div class="box">
          <h1>Ansök om bostadsbidrag</h1>
          <h3>Ha gott om tid för att fylla i ansökan</h3>
          <p class="medium">I den här ansökan kan du behöva fylla i många uppgifter. Tyvärr går det inte att spara och
            fortsätta vid ett senare tillfälle.</p>
          <p>För testning: </p>
          <button type="button" class="apply" id="save" @click="openInfoModal">Spara ansökan</button>

          <div v-if="isInfoModalVisible" class="modal">
            <div class="modal-content">
              <span class="close" @click="closeInfoModal">&times;</span>
              <p class="bold">Under konstruktion</p>
              <p>Vill du spara din ansökan och fylla i senare?</p>
              <button @click="closeInfoModal" class="cancel">Avbryt</button>
              <router-link to="/savePage" class="confirm">Bekräfta</router-link>
            </div>
          </div>
        </div>

        <div class="container-wrap">

          <Info />
          <Address />
          <Family />
          <Income />
          <Assets />
          <Other />

        </div>


        <h2>Underskrift</h2>

        <div class="sign-form">
          <input type="checkbox" id="sign" name="signForm" value="sign">
          <label for="sign">Jag intygar på heder och samvete att de uppgifter jag lämnar är riktiga och fullständiga.
            Jag vet att jag kan få betala tillbaka felaktigt utbetald ersättning. Jag vet att jag kan göra mig skyldig
            till brott om jag lämnar oriktiga eller ofullständiga uppgifter, eller inte meddelar Försäkringskassan när
            uppgifterna ändras.</label>
        </div>

        <button class="apply">Signera</button>
      </div>
    </div>

</template>

<style scoped>
.main-form {
  padding: 20px;
}
.close{
  padding: 5px;
  font-size: 2em;
  margin: 5px;
  cursor: pointer;
}
.confirm{
  text-decoration: none;
  padding: 5px;
  color: black;
}
.cancel{
  color: black;
  padding: 5px;
  border: none;
}

</style>