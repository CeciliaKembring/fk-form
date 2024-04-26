<script setup>
import { ref } from 'vue';

const isFilledIn = ref(false);
const showIncome = ref(false);
const incomeSelection = ref('');
const showTravel = ref(false);
const travelSelection = ref('');

const toggleVisibility = () => {
      isFilledIn.value = !isFilledIn.value;
      showIncome.value = false;
      showTravel.value = false;

};
</script>
<template>
      <div class="container">
            <h3>4. Mina inkomster</h3>
            <div v-if="!isFilledIn" class="hide">
                  <p>Här fyller du i uppgifter om inkomster.</p>
            </div>

            <div v-if="isFilledIn" class="other">
                  <p>Fyll i vilka inkomster du tror att du kommer att ha i år och nästa år. Om du får högre eller lägre
                        inkomster än du trodde är det viktigt att du ändrar beloppet i efterhand.</p>

                  <h4>Inkomst av tjänst</h4>
                  <p class="bold">Har du haft eller kommer du att ha inkomst av tjänst i år eller nästa år?</p>
                  <p>Inkomst kan vara till exempel lön, a-kassa, föräldrapenning, sjukpenning, sjukersättning,
                        aktivitetsstöd,
                        pension, omvårdnadsbidrag eller omställningsstudiestöd (ej lån).</p>
                  <input type="radio" id="no_income">
                  <label for="no_income">Nej</label><br>
                  <input type="radio" id="yes_income" v-model="incomeSelection" value="yes_income">
                  <label for="yes_income">Ja</label>


                  <div v-if="incomeSelection === 'yes_income' && isFilledIn" class="have_income">
                        <p class="bold">Inkomst av tjänst i kronor före skatt</p>
                        <p>Fyll i dina inkomster så exakt du kan och räkna per år.</p>
                        <div class="input_form">
                              <label for="first_year">1 januari - 31 december 2024</label><br>
                              <input type="text" id="first_year">
                              <p>Kronor</p><br>
                              <label for="second_year">1 januari - 31 december 2025</label><br>
                              <input type="text" id="second_year">
                              <p>Kronor</p><br>
                        </div>

                        <p class="bold">Resekostnader</p>
                        <input type="checkbox" id="travel_expences" v-model="travelSelection" value="yes_travel">

                        <label for="travel_expences">Jag har kostnader för resor till och från arbetet på mer än 11 000
                              kronor
                              per år.</label>
                              <div class="travel_info" v-if="travelSelection === 'yes_travel' && isFilledIn">

                              <p class="bold">Totala resekostnader</p>
                              <div class="input_form">
                                    <label for="first_year_travel">1 januari - 31 december 2024</label><br>
                                    <input type="text" id="first_year_travel">
                                    <p>Kronor</p><br>
                                    <label for="second_year_travel">1 januari - 31 december 2025</label><br>
                                    <input type="text" id="second_year_travel">
                                    <p>Kronor</p><br>
                              </div>
                        </div>
                        <p class="bold">Inkomster från annat land</p>
                        <input type="checkbox" id="other_income">
                        <label for="other_income">Jag har inkomst eller pension från ett annat land som inte beskattas i
                              Sverige eller som beskattas enligt SINK.</label>
                        <div class="travel_info">
                              <p class="bold">Inkomster före skatt – uppskattat belopp för hela året i landets valuta
                              </p>
                              <div class="input_form">
                                    <label for="first_year_other">1 januari - 31 december 2024</label><br>
                                    <input type="text" id="first_year_other">
                                    <p>Kronor</p><br>
                                    <label for="second_year_other">1 januari - 31 december 2025</label><br>
                                    <input type="text" id="second_year_other">
                                    <p>Kronor</p><br>
                              </div>
                        </div>
                  </div>


                  <h4>Inkomst från eget företag</h4>
                  <p class="bold">Har du haft eller kommer du att ha inkomst från eget företag i år eller nästa år?</p>
                  <input type="radio" id="no_company">
                  <label for="no_company">Nej</label><br>
                  <input type="radio" id="yes_company">
                  <label for="yes_company">Ja</label>


                  <div class="have_company">
                        <p class="bold">Beräkna överskott</p>
                        <div class="input_form">
                              <label for="excess_first">1 januari 2024 - 31 decemmber 2024</label><br>
                              <input type="text" id="excess_first"><br>
                              <label for="excess_second">1 januari 2025 - 31 decemmber 2025</label><br>
                              <input type="text" id="excess_second">
                        </div>
                        <p class="bold">Beräkna underskott</p>
                        <div class="input_form">
                              <label for="deficit_first">1 januari 2024 - 31 decemmber 2024</label><br>
                              <input type="text" id="deficit_first"><br>
                              <label for="deficit_second">1 januari 2025 - 31 decemmber 2025</label><br>
                              <input type="text" id="deficit_second">
                        </div>
                        <p class="bold">Beräknad avstämning till periodiseringsfond</p>
                        <div class="input_form">
                              <label for="deposition_first">1 januari 2024 - 31 decemmber 2024</label><br>
                              <input type="text" id="deposition_first"><br>
                              <label for="deposition_second">1 januari 2025 - 31 decemmber 2025</label><br>
                              <input type="text" id="deposition_second">
                        </div>
                        <p class="bold">Beräknad ökning av expansionsfond</p>
                        <div class="input_form">
                              <label for="increase_first">1 januari 2024 - 31 decemmber 2025</label><br>
                              <input type="text" id="increase_first"><br>
                              <label for="increase_second">1 januari 2025 - 31 decemmber 2025</label><br>
                              <input type="text" id="increase_second">
                        </div>
                        <p class="bold">Beräknad utgift för egen pensionsförsäkringspremie</p>
                        <div class="input_form">
                              <label for="pension_first">1 januari 2024 - 31 decemmber 2024</label><br>
                              <input type="text" id="pension_first"><br>
                              <label for="pension_second">1 januari 2025 - 31 decemmber 2025</label><br>
                              <input type="text" id="pension_second">
                        </div>
                        <p class="bold">Beräknat avdrag för underskott från tidigare år</p>
                        <div class="input_form">
                              <label for="deduction_first">1 januari 2024 - 31 decemmber 2024</label><br>
                              <input type="text" id="deduction_first"><br>
                              <label for="deduction_second">1 januari 2025 - 31 decemmber 2025</label><br>
                              <input type="text" id="deduction_second">
                        </div>
                        <p class="bold">Beräknad återföring från periodiseringsfond</p>
                        <div class="input_form">
                              <label for="reversal_first">1 januari 2024 - 31 decemmber 2024</label><br>
                              <input type="text" id="reversal_first"><br>
                              <label for="reversal_second">1 januari 2025 - 31 decemmber 2025</label><br>
                              <input type="text" id="reversal_second">
                        </div>
                        <p class="bold">Beräkna minskning av expansionsfond</p>
                        <div class="input_form">
                              <label for="reduction_first">1 januari 2024 - 31 decemmber 2024</label><br>
                              <input type="text" id="reduction_first"><br>
                              <label for="reduction_second">1 januari 2025 - 31 decemmber 2025</label><br>
                              <input type="text" id="reduction_second">
                        </div>
                  </div>

                  <h4>Skattefria inkomster</h4>
                  <p class="bold">Har du haft eller kommer du att ha skattefria inkomster i år eller nästa år?</p>
                  <input type="radio" id="no_taxFree">
                  <label for="no_taxFree">Nej</label><br>
                  <input type="radio" id="yes_taxFree">
                  <label for="yes_taxFree">Ja</label>

                  <div class="have_taxFree">
                        <p class="bold">Har du studiebidrag eller studiestartsstöd från CSN (inte lån)?</p>
                        <input type="radio" id="no_CSN">
                        <label for="no_CSN">Nej</label><br>
                        <input type="radio" id="yes_CSN">
                        <label for="yes_CSN">Ja</label>

                        <div class="have_CSN">
                              <p class="bold">Beräknat studiebidrag eller studiestartstöd från CSN (inte lån)</p>
                              <div class="input_form">
                                    <label for="CSN_first">1 januari 2024 - 31 decemmber 2024</label><br>
                                    <input type="text" id="CSN_first"><br>
                                    <label for="CSN_second">1 januari 2025 - 31 decemmber 2025</label><br>
                                    <input type="text" id="CSN_second">
                              </div>
                        </div>

                        <p class="bold">Har du etableringsersättning?</p>
                        <input type="radio" id="no_establish">
                        <label for="no_establish">Nej</label><br>
                        <input type="radio" id="yes_establish">
                        <label for="yes_establish">Ja</label>
                        <div class="have_establish">
                              <p class="bold">Beräknad etableringsersättning</p>
                              <div class="input_form">
                                    <label for="establish_first">1 januari 2024 - 31 decemmber 2024</label><br>
                                    <input type="text" id="establish_first"><br>
                                    <label for="establish_second">1 januari 2025 - 31 decemmber 2025</label><br>
                                    <input type="text" id="establish_second">
                              </div>
                        </div>

                        <p class="bold">Har du skattefria stipendier?</p>
                        <input type="radio" id="no_scholarship">
                        <label for="no_scholarship">Nej</label><br>
                        <input type="radio" id="yes_scholarship">
                        <label for="yes_scholarship">Ja</label>
                        <div class="have_scholarship">
                              <p class="bold">Beräknade skattefria stipendier (hela beloppet)</p>
                              <div class="input_form">
                                    <label for="scholarship_first">1 januari 2024 - 31 decemmber 2024</label><br>
                                    <input type="text" id="scholarship_first"><br>
                                    <label for="scholarship_second">1 januari 2025 - 31 decemmber 2025</label><br>
                                    <input type="text" id="scholarship_second">
                              </div>
                        </div>

                  </div>

                  <h4>Inkomst av kapital</h4>
                  <p class="bold">Har du haft eller kommer du att ha inkomst av kapital i år eller nästa år?</p>
                  <p>Det är till exempel ränta på pengar på banken, utdelning, kapitalvinst vid försäljning av aktier
                        eller en
                        bostad, eller inkomster från uthyrning av en bostad.</p>
                  <input type="radio" id="no_capital">
                  <label for="no_capital">Nej</label><br>
                  <input type="radio" id="yes_capital">
                  <label for="yes_capital">Ja</label>

                  <div class="have_capital">
                        <p class="bold">Beräknad inkomst av kapital</p>
                        <div class="input_form">
                              <label for="capital_first">1 januari 2024 - 31 decemmber 2024</label><br>
                              <input type="text" id="capital_first"><br>
                              <label for="capital_second">1 januari 2025 - 31 decemmber 2025</label><br>
                              <input type="text" id="capital_second">
                        </div>
                  </div>

                  <h4>Socialbidrag</h4>
                  <p class="bold">Får du socialbidrag (försörjningsstöd) från kommunen?</p>
                  <input type="radio" id="no_social">
                  <label for="no_social">Nej</label><br>
                  <input type="radio" id="yes_social">
                  <label for="yes_social">Ja</label>

            </div>

            <button type="button" class="app-btn" @click="toggleVisibility">{{ isFilledIn ? 'Gå vidare' : 'Fyll i'
                  }}</button>
      </div>
</template>
<style scoped>
p {
      font-size: 1.3em;
      margin-bottom: 20px;
}

.bold {
      margin-top: 10px;
      margin-bottom: 10px;
      font-size: 1.3em;
}

h4 {
      font-size: 1.8em;
      margin-top: 40px;
      margin-bottom: 20px;
}

h5 {
      font-weight: 800;
      font-size: 1.4em;
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