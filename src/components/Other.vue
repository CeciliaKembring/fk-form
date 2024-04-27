<script setup>
import { ref } from 'vue';

const isFilledIn = ref(false);

const toggleVisibility = () => {
  isFilledIn.value = !isFilledIn.value;
};
</script>

<template>
    <form action="#">
    <div class="container">
        <h3>6. Övriga frågor</h3>
        <div v-if="!isFilledIn" class="hide">
            <p>Till sist kommer några korta frågor om du bor, jobbar eller får ersättning från utlandet.</p>
        </div>

        <div v-if="isFilledIn" class="other">
            <p class="bold">Bor eller vistas du utomlands?</p>
            <p>Till exempel om du är eller kommer vara i något annat land än Sverige i mer än sex månader.</p>
            <input type="radio" id="no_abroad">
            <label for="no_abroad">Nej</label><br>
            <input type="radio" id="yes_abroad">
            <label for="yes_abroad">Ja</label>

            <p class="bold">Jobbar du utomlands?</p>
            <input type="radio" id="no_abroad_work">
            <label for="no_abroad_work">Nej</label><br>
            <input type="radio" id="yes_abroad_work">
            <label for="yes_abroad_work">Ja</label>

            <p class="bold">Jobbar du i Serige?</p>
            <input type="radio" id="no_work_sweden">
            <label for="no_work_sweden">Nej</label><br>
            <input type="radio" id="yes_work_sweden">
            <label for="yes_work_sweden">Ja</label>

            <p class="bold">Har du ersättning från utlandet?</p>
            <p>Här menar vi inte lön utan till exempel a-kassa, sjukpenning eller föräldrapenning från något annat land
                än Sverige.</p>
            <input type="radio" id="no_benefit">
            <label for="no_benefit">Nej</label><br>
            <input type="radio" id="yes_benefit">
            <label for="yes_benefit">Ja</label>

            <p class="bold">Jobbar du för en offentlig utländsk arbetsgivare eller en internationell organisation?</p>
            <p>Världsbanken och Unicef är exempel på internationella organisationer.</p>
            <input type="radio" id="no_employer">
            <label for="no_employer">Nej</label><br>
            <input type="radio" id="yes_employer">
            <label for="yes_employer">Ja</label>

            <p class="bold">Är du utsänd till Sverige för att jobba?</p>
            <p>Till exempel om du normalt jobbar i ett annat land men tillfälligt jobbar i Sverige på uppdrag av din
                utländska arbetsgivare.</p>
            <input type="radio" id="no_sent">
            <label for="no_sent">Nej</label><br>
            <input type="radio" id="yes_sent">
            <label for="yes_sent">Ja</label>

        </div>

        <button type="button" class="app-btn" @click="toggleVisibility">{{ isFilledIn ? 'Gå vidare' : 'Fyll i' }}</button>

    </div>
</form>
</template>

<style scoped>
p{
    font-size: 1.3em;
    margin-bottom: 15px;
}
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