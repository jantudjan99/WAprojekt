<template>
<!--Popup modal form-->
<div>
  <form id="mojaForma">
    <div class="kontejner">
    <h1>Unesite podatke o turniru</h1>
      <div class="form-group">
        <span class="fw-500">Ime igre</span>
        <input v-model="imeIgre" type="text" class="form-control input-lg" name="grad" id="grad">
      </div>
      <div class="formiraj">
        <div class="lijevo">
        <span class="fw-500">Odaberite grad: </span><br>
        <select v-model="grad">
            <option>Zagreb</option>
            <option>Pula</option>
            <option>Rijeka</option>
            <option>Split</option>
            <option>Varaždin</option>
            <option>Dubrovnik</option>
            <option>Osijek</option>
            <option>Karlovac</option>
            <option>Vukovar</option>
            <option>Zadar</option>
            <option>Virovitica</option>
        </select>
        </div>
      </div><br><br>
      <div class="form-group">
        <span class="fw-500">Datum:</span><br>
        <input v-model="datum" class="form-control input-lg" type="date" id="start" name="trip-start" min="2021-07-15" max="2021-12-31">
      </div>
      <div class="form-group">
        <span class="fw-500">Adresa</span>
        <input v-model="adresa" type="text" class="form-control input-lg" name="adresa" id="adresa" >
      </div>
      <div class="form-group">
        <span class="fw-500">Vrijeme</span>
        <input v-model="vrijeme" type="text" class="form-control input-lg" name="vrijeme" id="vrijeme" >
      </div>
      <div class="formiraj">
        <div class="lijevo">
        <span class="fw-500">Ponijeti opremu: </span><br>
        <input v-model="oprema" type="radio" class="" v-bind:value="0" @click="Ne()">Ne
        <input v-model="oprema" type="radio" class="" v-bind:value="1" @click="Da()">Da
        </div>
      </div>
      <div class="form-group">
        <br><br>
        <span class="fw-500">Url slike</span>
        <input v-model="slika" type="text" class="form-control input-lg" name="slika" id="slika" >
      </div>
      <br><br><br>
      <button type="submit" class="btn" @click.prevent="dodajDogadaj()">Objavi</button>
    </div>
  </form>
  <br><br><br>
</div>

</template>
<style scoped>

.kontejner{
  width:500px;
  margin:auto;
  padding:20px;
  background-color:#c4f5f2;
  border-radius: 22px;
}
.formiraj{
  position:absolute;
  float:left;
}
.btn{
  border-radius: 25px;
  border: 1.5px solid black;
  padding-left:15px;
  padding-right:15px;
}

</style>

<script>
import {Dogadaji} from '@/services';
export default {
    data() {
        return {
          imeIgre: "",
          grad: "",
          datum:"",
          adresa: "",
          oprema: "",
          opremaOdgovor: "",
          slika: "",
          vrijeme: "",
        };
    },
    methods:{
      dodajDogadaj(){
        let dogadaji = {
          imeIgre: this.imeIgre,
          grad: this.grad,
          datum: this.datum,
          adresa: this.adresa,
          vrijeme: this.vrijeme,
          oprema: this.opremaOdgovor,
          slika: this.slika,
        }

        Dogadaji.dodaj_dogadaj(dogadaji);
      },

      
      Da(){
        this.opremaOdgovor="Da"
      },
      Ne(){
        this.opremaOdgovor="Ne"
      },
    },
}
</script>
