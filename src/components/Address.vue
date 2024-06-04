<script setup>
import { ref } from 'vue';

const isShow = ref(false);

const toggleShow = () => {
  isShow.value = !isShow.value;
};

const addressStatus = ref('yes');

const selectedAccommodation = ref('choose'); 
</script>

<template>
  <form action="#">
  <div class="container" id="bostad">
    <h3>2. Bostad</h3>
    <p class="medium">Här fyller du i uppgifter om den bostad som du vill ha bostadsbidrag för</p>

    <div class="show" v-if="isShow">
      <div class="address">
        <p class="bold">Folkbokföringsadress</p>
        <p>ADRESS</p>
      </div>

      <div class="address_step2">
        <p class="bold">Gäller din ansökan den här adressen?</p>
        <input type="radio" id="yes_address">
        <label for="yes_address">Ja</label><br>
        <input type="radio" id="no_address">
        <label for="no_address">Nej</label>

        <div class="firstApply" v-if="addressStatus === 'no'">
          <p class="bold">Bostadsadress som ansökan gäller</p>
          <label for="address_input">Adress</label><br>
          <input type="text" id="address_input"><br>
          <label for="zipcode_input">Postnummer</label><br>
          <input type="text" id="zipcode_input"><br>
          <label for="city_input">Postort</label><br>
          <input type="text" id="city_input">
        </div>
      </div>

      <div class="select_accomondation">
        <p class="bold">Typ av boende</p>
        <label for="accommodation">Välj typ av boende</label><br>
        <select id="accomodation" name="accomodation" v-model="selectedAccommodation">
          <option value="choose">Välj typ av boende</option>
          <option value="hyresratt">Hyresrätt</option>
          <option value="andraHand">Andra hand</option>
          <option value="bostadsratt">Bostadsrätt</option>
          <option value="smahus">Småhus (villa, parhus, kedjehus)</option>
          <option value="inneboende">Inneboende med barn</option>
          <option value="annat">Annat typ av boende</option>
        </select>
      </div>

      <div class="hyresratt" v-if="selectedAccommodation === 'hyresratt' || selectedAccommodation === 'andraHand'">
        <p class="bold">Detta är första gången jag ansöker om bostadsbidrag för den här bostaden</p>
        <input type="radio" id="no_apply">
        <label for="no_apply">Nej</label><br>
        <input type="radio" id="yes_apply">
        <label for="yes_apply">Ja</label>


        <p class="bold">Övriga uppgifter</p>
        <p>Kryssa i om någon av följande uppgifter gäller för dig.</p>
        <input type="checkbox" id="rent_period">
        <label for="rent_period">Jag har hyresfria perioder</label><br>
        <input type="checkbox" id="rent_discount">
        <label for="rent_discount">Jag har hyresrabatt</label><br>
        <input type="checkbox" id="rent_function">
        <label for="rent_function">Någon i bostaden har en funktionsnedsättning som medför högre boendekostnad</label>

        <h4>Lägg till bilagor</h4>
        <p>Vi behöver följande bilagor från dig:</p>
        <h5>Hyresavi</h5>
        <p>Din senaste hyresavi eller hyresspecifikation</p>
        <input type="radio" id="send_later">
        <label for="send_later">Jag har inte denna bilaga just nu, men jag skickar in den digitalt onom 7
          dagar</label><br>
        <input type="radio" id="not_send">
        <label for="not_send">Jag behöver inte skicka in denna bilaga, eftersom min hyra inte ändrats sedan den förra
          ansökan</label>
      </div>

      <div class="bostadsratt" v-if="selectedAccommodation === 'bostadsratt'">
        <p class="bold">Detta är första gången jag ansöker om bostadsbidrag för den här bostaden</p>
        <input type="radio" id="no_apply">
        <label for="no_apply">Nej</label><br>
        <input type="radio" id="yes_apply">
        <label for="yes_apply">Ja</label>


        <p class="bold">Har du lån på bostaden där räntan överstigen 3 procent?</p>
        <input type="radio" id="no_loan">
        <label for="no_loan">Nej</label><br>
        <input type="radio" id="yes_loan">
        <label for="yes_loan">Ja</label>

        <p class="bold">Övriga uppgifter</p>
        <p>Kryssa i de uppgifter som gäller för dig.</p>
        <input type="checkbox" id="rent_period">
        <label for="rent_period">Jag har avgiftsfria perioder</label><br>
        <input type="checkbox" id="rent_discount">
        <label for="rent_discount">Jag har avgiftsrabatt</label><br>
        <input type="checkbox" id="rent_function">
        <label for="rent_function">Någon i bostaden har en funktionsnedsättning som medför högre boendekostnad</label>


        <h4 class="link">Lägg till bilagor</h4>
        <p>Vi behöver följande bilagor från dig:</p>
        <p class="bold">Avgiftsspecifikation</p>
        <p>Din senaste avgiftsspecifikation</p>
      </div>

      <div class="smahus" v-if="selectedAccommodation === 'smahus'">
        <p class="bold">Detta är första gången jag ansöker om bostadsbidrag för den här bostaden</p>
        <input type="radio" id="no_apply">
        <label for="no_apply">Nej</label><br>
        <input type="radio" id="yes_apply">
        <label for="yes_apply">Ja</label>

        <p class="bold">Antal rum i bostaden (utom köket)</p>
        <select name="rooms" id="rooms">
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
          <option value="6">6</option>
          <option value="7">7</option>
          <option value="8">8</option>
          <option value="9">9 eller fler</option>
        </select>

        <p class="bold">Har du lån på bostaden där räntan överstiger 3 procent?</p>
        <input type="radio" id="no_loan">
        <label for="no_loan">Nej</label><br>
        <input type="radio" id="yes_loan">
        <label for="yes_loan">Ja</label>

        <p class="bold">Övriga uppgifter</p>
        <p>Kryssa i om någon av följande uppgifter gäller för dig</p>
        <input type="checkbox" id="house">
        <label for="house">Jag bor i ett tvåfamiljshus</label><br>
        <input type="checkbox" id="plot">
        <label for="plot">Jag bor i en fastighet med tomträttsavgäld</label><br>
        <input type="checkbox" id="function">
        <label for="function">Någon i bostaden har en funktionsnedsättning som medför högre boendekostnad</label>
      </div>

      <div class="inneboende" v-if="selectedAccommodation === 'inneboende'">
        <p class="bold">Detta är första gången jag ansöker om bostadsbidrag för den här bostaden</p>
        <input type="radio" id="no_apply">
        <label for="no_apply">Nej</label><br>
        <input type="radio" id="yes_apply">
        <label for="yes_apply">Ja</label>
      </div>


      <div class="annatBoende" v-if="selectedAccommodation === 'annat'">
        <p class="bold">Beskriv ditt boende (max 600 tecken).</p>
        <textarea id="text_living" name="textarea_living" rows="15"
          cols="80"></textarea>

        <p class="bold">Detta är första gången jag ansöker om bostadsbidrag för den här bostaden</p>
        <input type="radio" id="no_apply">
        <label for="no_apply">Nej</label><br>
        <input type="radio" id="yes_apply">
        <label for="yes_apply">Ja</label>

        <p class="bold">Antal rum i bostaden (utom köket)</p>
        <select name="rooms" id="rooms">
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
          <option value="6">6</option>
          <option value="7">7</option>
          <option value="8">8</option>
          <option value="9">9 eller fler</option>
        </select>
        <p class="bold">Övriga uppgifter</p>
        <p>Kryssa i de uppgifter som gäller för dig.</p>
        <input type="checkbox" id="rent_period">
        <label for="rent_period">Jag har hyresfria perioder</label><br>
        <input type="checkbox" id="rent_discount">
        <label for="rent_discount">Jag har hyresrabatt</label><br>
        <input type="checkbox" id="rent_function">
        <label for="rent_function">Någon i bostaden har en funktionsnedsättning som medför högre boendekostnad</label>


        <h4>Lägg till bilagor</h4>
        <p>Vi behöver följande bilagor från dig:</p>
        <p class="bold">Dokument som styrker ditt boende</p>
        <p>Om du har dokument som styrker ditt boende kan du lägga till det här.</p>
      </div>
    </div>


    <input type="button" value="Fyll i" class="app-btn" @click="toggleShow">
  </div>
</form>
</template>

<style scoped>
p {
  font-size: 1.3em;
  margin-bottom: 15px;
}

.bold {
  margin-top: 40px;
  margin-bottom: 10px;
  font-size: 1.3em;
}

h4 {
  font-size: 1.6em;
  margin-top: 40px;
  margin-bottom: 20px;
}

h5 {
  font-weight: 800;
  font-size: 1.4em;
}
</style>