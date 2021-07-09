<template>
  <div class="about">
    <DodajIgru />
    <listaIgara />
    <!--<TablicaDogadaja />-->
  </div>
</template>
<script>
/*import TablicaDogadaja from '@/components/TablicaDogadaja.vue'*/
import DodajIgru from '@/components/DodajIgru.vue'
import listaIgara from '@/components/listaIgara.vue'

export default{
components:{
  /*TablicaDogadaja,*/
  DodajIgru,
  listaIgara
}
}
</script>

