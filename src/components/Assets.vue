<script setup>
import { ref } from 'vue';

const isFilledIn = ref(false);

const toggleVisibility = () => {
  isFilledIn.value = !isFilledIn.value;
};
</script>
<template>
    <div class="container">
        <h3>5. Tillgångar och skulder</h3>
        <p>Här fyller du i uppgifter om tillgångar och skulder.</p>
        


        <div v-if="isFilledIn" class="assets">
            <p class="bold">Har du och eventuella barn sammanlagda tillgångar på över 100 000 kronor?</p>
            <p>Tillgångar är till exempel pengar på banken, kontanter, aktier, fonder eller fastigheter.</p>
            <input type="radio" id="no_assets">
            <label for="no_assets">Nej</label><br>
            <input type="radio" id="yes_assets">
            <label for="yes_assets">Ja</label>
        </div>

        <button type="button" class="app-btn" @click="toggleVisibility">{{ isFilledIn ? 'Gå vidare' : 'Fyll i' }}</button>
    </div>
    <div class="container" id="assets_a">
        <h3>5a. Dina tillgångar och skulder</h3>
  

        <div class="assets_popup">
            <p class="bold">Har du några tillgångar?</p>
            <input type="radio" id="no_assets_popup">
            <label for="no_assets_popup">Nej</label><br>
            <input type="radio" id="yes_assets_popup">
            <label for="yes_assets_popup">Ja</label>

            <p class="bold">Har du några skulder?</p>
            <p>Skulder är till exempel studielån, kontokortsskulder och banklån (förutom lån för den bostad du söker
                bostadsbidrag för).</p>
            <input type="radio" id="no_debt">
            <label for="no_debt">Nej</label><br>
            <input type="radio" id="yes_debt">
            <label for="yes_debt">Ja</label>

            <div class="has_debt">
                <p class="bold">Skulder</p>
                <div class="input_form">
                    <label for="debt_first" class="input_first">Uppskattat belopp den 31 december 2024</label><br>
                    <input type="text" id="debt_first"><br>
                    <label for="debt_second" class="input_first">Uppskattat belopp den 31 decemmber 2025</label><br>
                    <input type="text" id="debt_second">
                </div>
            </div>
        </div>

    </div>

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
</style>