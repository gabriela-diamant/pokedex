<template>
    <div class="container">
     <!-- <p>{{maVariable}}</p>
      <span>{{compteur}}</span>
      <br>
      <br>
      <input type="text" v-model="firstName">
      <br>
      <span v-if="firstName != ''">
        bonjour {{ firstName }}
        </span>
        <span v-else>Merci d'entrer votre prenom </span>
<br>
      <button v-on:click="direBonjour"> Bonjour </button>-->
      <br>
      <br>
       <br>
      <br>
  
<div> 

</div>
<br>
<div v-for=" (p, index) in pokemons" v-bind:key="index">
<h1>
<router-link v-bind:to="'/pokemons/' + p.id">
<img v-bind:src="p.sprite">
 <!--<img v-bind:src="pokemon.sprites.back_default" alt="" width=10%>-->
</router-link>
</h1>
<span>
{{ p. description }}
</span>
<ul>
<li v-for='(t, i) in p.types' v-bind:key="i">
</li>
</ul>



        </div>
        </div>
</template>
<style scoped>
li{
  list-style-type: none;
}
</style>


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