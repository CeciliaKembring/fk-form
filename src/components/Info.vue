<script setup>

</script>
<template>
    <form action="#">
    <div class="container" id="uppgifter">
        <h3>1. Mina uppgifter</h3>
        <p>Namn Namnsson</p>
        <p>Personnummer</p>
        <p class="bold">Adress</p>
        <p>Adress</p>
        <p>Adress</p>
        <p class="bold">Telefonnummer</p>
        <p>Telefonnummer</p>

        <h4>Konto för utbetalning</h4>
        <p>Alla utbetalningar från Försäkringskassan betalas ut till det här kontot.</p>
        <p class="bold">Bank</p>
        <p>Namn på bank</p>

        <button type="button" class="app-btn">Ändra</button>
    </div>
</form>
</template>

<style scoped>
p{
    font-size: 1.3em;
}
h4{
    font-size: 1.7em;
    margin-top: 40px;
    margin-bottom: 20px;
}
.bold{
    margin-top: 30px;
}
</style>