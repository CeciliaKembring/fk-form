<script setup>
import { ref } from 'vue';

const isFilledIn = ref(false);
const isAssetsFilledIn = ref(false);
const isDebtFilledIn = ref(false);
const isAssetsOverFilledIn = ref(false);

const toggleVisibility = () => {
  isFilledIn.value = !isFilledIn.value;
};

const toggleAssetsVisibility = (value) => {
    isAssetsFilledIn.value = value;
};

const toggleAssetsOverVisibility = (value) => {
    isAssetsOverFilledIn.value = value;
};

const toggleDebtVisibility = (value) => {
    isDebtFilledIn.value = value;
};
</script>
<template>
    <form action="#">
    <div class="container">
        <h3>5. Tillgångar och skulder</h3>
        <p>Här fyller du i uppgifter om tillgångar och skulder.</p>
        


        <div v-if="isFilledIn" class="assets">
            <p class="bold">Har du och eventuella barn sammanlagda tillgångar på över 100 000 kronor?</p>
            <p>Tillgångar är till exempel pengar på banken, kontanter, aktier, fonder eller fastigheter.</p>
            <input type="radio" id="no_assets" @change="toggleAssetsVisibility(false)">
            <label for="no_assets">Nej</label><br>
            <input type="radio" id="yes_assets" @change="toggleAssetsVisibility(true)">
            <label for="yes_assets">Ja</label>
        </div>

        <button type="button" class="app-btn" @click="toggleVisibility">{{ isFilledIn ? 'Gå vidare' : 'Fyll i' }}</button>
    </div>
    <div class="container" id="assets_a"  v-if="isAssetsFilledIn">
        <h3>5a. Dina tillgångar och skulder</h3>
  

        <div class="assets_popup">
            <p class="bold">Har du några tillgångar?</p>
            <input type="radio" id="no_assets_popup" @change="toggleAssetsOverVisibility(false)">
            <label for="no_assets_popup">Nej</label><br>
            <input type="radio" id="yes_assets_popup" @change="toggleAssetsOverVisibility(true)">
            <label for="yes_assets_popup">Ja</label>

            <div class="has_assets" v-if="isAssetsOverFilledIn">
                <p class="bold">Tillgångar</p>
            </div>

            <p class="bold">Har du några skulder?</p>
            <p>Skulder är till exempel studielån, kontokortsskulder och banklån (förutom lån för den bostad du söker
                bostadsbidrag för).</p>
            <input type="radio" id="no_debt" @change="toggleDebtVisibility(false)">
            <label for="no_debt">Nej</label><br>
            <input type="radio" id="yes_debt" @change="toggleDebtVisibility(true)">
            <label for="yes_debt">Ja</label>

            <div class="has_debt" v-if="isDebtFilledIn">
                <p class="bold">Skulder</p>
                <div class="input_form">
                    <label for="debt_first" class="input_first">Uppskattat belopp den 31 december 2024</label><br>
                    <input type="text" id="debt_first"><br>
                    <label for="debt_second" class="input_first">Uppskattat belopp den 31 decemmber 2025</label><br>
                    <input type="text" id="debt_second">
                </div>
                <button type="button" class="app-btn">Gå vidare</button>
            </div>
        </div>

    </div>
</form>
</template>
<style scoped>

p{
    font-size: 1.3em;
    margin-bottom: 15px;
}s
.bold{
    margin-top: 40px;
    margin-bottom: 10px;
    font-size: 1.3em;
}

input[type="radio"] {
margin-right: 8px;
margin-bottom: 8px;
}
label{
    font-size: 1.3em;
}
.input_form {
      display: flex;
      flex-direction: column;
}

.input_form input {
      width: 500px;
}

input {
      padding: 10px;
      border-radius: 5px;

}
</style>