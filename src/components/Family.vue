<script setup>
import { ref } from 'vue';

const isFilledIn = ref(false);
const isKidsFilledIn = ref(false);
const isLodgerFilledIn = ref(false);

const toggleVisibility = () => {
    isFilledIn.value = !isFilledIn.value;
};

const toggleKidsVisibility = (value) => {
    isKidsFilledIn.value = value;
};

const toggleLodgerVisibility = (value) => {
    isLodgerFilledIn.value = value;
};
</script>

<template>
    <form action="#">
        <div class="container">
        <h3>3. Barn och inneboende</h3>
        <div v-if="!isFilledIn" class="hide">
        <p>Här fyller du i uppgifter om barn och inneboende</p>
        </div> 
            <div class="kids" v-if="isFilledIn">
                <h4>Barn</h4>
                <p class="bold">Har du barn som bor hos dig?</p>
                <p>Det kan vara egna barn eller familjehemsplacerade barn.</p>
                <input type="radio" id="no_kids" @change="toggleKidsVisibility(false)">
                <label for="no_kids">Nej</label><br>
                <input type="radio" id="yes_kids" @change="toggleKidsVisibility(true)">
                <label for="yes_kids">Ja</label>

                <div v-if="isKidsFilledIn" class="numberOfKids">
                    <p class="bold">Hur många barn bor hos dig?</p>
                    <select name="kidsNumber" id="kidsNumber">
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <option value="6">6</option>
                        <option value="7">7</option>
                        <option value="8">8</option>
                        <option value="9">9</option>
                        <option value="10">10</option>
                        <option value="12">11</option>
                        <option value="13">12</option>
                    </select>
                </div>


                <div class="lodger">
                    <h4>Inneboende</h4>
                    <p class="bold">Bor det någon annan hos dig?</p>
                    <p>Det kan till exempel vara en släkting som bor hos dig.</p>
                    <input type="radio" id="no_lodger" @change="toggleLodgerVisibility(false)">
                    <label for="no_lodger">Nej</label><br>
                    <input type="radio" id="yes_lodger" @change="toggleLodgerVisibility(true)">
                    <label for="yes_lodger">Ja</label>

                    <div v-if="isLodgerFilledIn" class="lodger_info">
                        <label for="firstname">Förnamn</label><br>
                        <input type="text" id="firstname"><br>
                        <label for="surname">Efternamn</label><br>
                        <input type="text" id="surname"><br>
                        <label for="persNumber">Personnummer</label><br>
                        <input type="text" id="persNumbere"><br>
                    </div>
                </div>
            </div>

            <button type="button" class="app-btn" @click="toggleVisibility">{{ isFilledIn ? 'Gå vidare' : 'Fyll i'
                }}</button>
        </div>
    </form>
</template>

<style scoped>
p {
    font-size: 1.3em;
    margin-bottom: 15px;
}

.bold {
    margin-top: 10px;
    margin-bottom: 10px;
    font-size: 1.3em;
}

input[type="radio"] {
    margin-right: 8px;
    margin-bottom: 8px;
}

label {
    font-size: 1.3em;
}

h4 {
    font-size: 2em;
    margin-top: 30px;
}

input {
    padding: 8px;
    border-radius: 5px;
}

.lodger_info {
    margin-top: 50px;
}

.lodger_info input {
    width: 400px;
    margin-top: 10px;
}
</style>