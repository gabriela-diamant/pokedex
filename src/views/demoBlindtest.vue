<template>
    <div class="container">

<h1> 
  qui est ce pokemon? 

</h1>

      <br>
      <br>
       <br>
      <br>
  
<div> 
</div>

</template>

<script>

import { PokemonService } from '../services/pokemonService.js'

export default {
  name: 'Demo',
 
  data(){
    return{
      maVariable: "Bonjour",
      compteur : 0,
      firstName : "",
      pokemons: [
      

      ],
      service: new PokemonService
    }
  },
  methods:{
direBonjour(){
  alert("Bonjour " + this.firstName)
}
  },
  created(){
    console.log('created')
  },
  mounted(){
    //cette fonction sera appele lorsque le composant est pret a lemploi
    //alert('composant pret'),
    setInterval(function(){
this.compteur++
    },1000)
this.service.getPokemons().then(pokemons=>{
  this.pokemons = pokemons
})

  }
}


</script>
<style scoped>
.container {
   display: flex;
   flex-wrap: wrap;}
rout-link{
  margin: 1%;
}
</style>