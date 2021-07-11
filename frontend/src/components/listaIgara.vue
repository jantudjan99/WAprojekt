<template>
<div>
    <div class="l-container">
        <div v-for="(kartice) in kartice" :key="kartice.id" class="b-game-card">
            <div class="b-game-card__cover"><img :src="kartice.slika" @click="gumb(kartice)"  class="cijelaSlika"><div class="delete">X</div><h1 class="ime_igre">{{kartice.imeIgre}}</h1><h1 class="datum">Datum turnira: {{kartice.datum}}</h1></div>

        </div>
        

    
</div>
<div>
          <form>
            <br><br><br><br>
          <input v-model="igraBrisi" type="text">
          <br><br>
          <button @click="brisiIgru()">Obriši igru</button>
          </form>
        </div>
</div>
</template>

<script>
import {Dogadaji} from '@/services'
import {Service} from '@/services'

export default {
    props: ['info'],
    data() {
        return{
            kartice: [],
            id: this.$route.params.id,
            igraBrisi: ""
        }
    },
    methods:{
        gumb(kartice){
            this.$router.push({ path: `/detalji/${kartice.id}` })
            console.log(this.$route.params.id);
            
        },

        brisiIgru() {
          Service.post("/dogadaji/delete/" + this.igraBrisi);
		},  
    },
    async created(){
        this.kartice = await Dogadaji.salji_dogadaj();
        console.log("Objave su tu: ",this.kartice);
    }
};
</script>


<style scoped>
.zatvori {
	position: absolute;
  background-color:black;
  width: 50px;
  height: 50px;
  
  z-index:99;
}
.cijelaSlika{
    width:100%;
    height:100%;
}
.l-container {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 30px;
  width: 80%;
  max-width: 1500px;
  padding: 30px;
  margin:auto;
 
}
.b-game-card {
  position: relative;
  z-index: 1;
  width: 100%;
  padding-bottom: 150%;
  perspective: 1000px;
}
.b-game-card::before {
  display: block;
  content: "";
  position: absolute;
  top: 80px;
  left: 5%;
  width: 90%;
  height: 90%;
  background: rgba(0, 0, 0, 0.5);
  box-shadow: 0 6px 12px 12px rgba(0, 0, 0, 0.4);
  will-change: opacity;
  transform-origin: top center;
  transform: skewX(0.001deg);
  transition: transform 0.35s ease-in-out, opacity 0.5s ease-in-out;
}
.b-game-card:hover::before {
  opacity: 0.6;
  transform: rotateX(7deg) translateY(-6px) scale(1.05);
}
.b-game-card__cover {
  position: absolute;
  z-index: 1;
  top: 80px;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  background-image: linear-gradient(120deg, #f6d365 0%, #fda085 100%);
  background-size: cover;
  perspective-origin: 50% 50%;
  transform-style: preserve-3d;
  transform-origin: top center;
  will-change: transform;
  transform: skewX(0.001deg);
  transition: transform 0.35s ease-in-out;
}

.b-game-card:hover .b-game-card__cover {
  transform: rotateX(7deg) translateY(-6px);
}
.b-game-card:hover .b-game-card__cover::after {
  transform: translateY(0%);
}
.ime_igre{
    color:white;
    position:absolute;
    bottom:0px;
    margin-left:10px;
    font-family:Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
	-webkit-text-stroke: 1.2px black;
	font-size: 27px;
    z-index:99;
}
.datum{
    z-index:99;
    bottom:80px;
    margin-left:20px;
    font-size:15px;
    position:absolute;
    color:white;
}
.delete{
  z-index:99;
  color:white;
}
</style>