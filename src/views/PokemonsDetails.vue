<template>
<div class="container1" >
    <h1>

        Bonjour je suis {{ pokemon.name }} !
        

        </h1>
       <img v-bind:src="pokemon.sprite" alt="" width=10%>
       <p> PV : {{ pokemon.hp }}</p>
       <p> Attack : {{ pokemon.attack }}</p> 
       <p> Defense : {{ pokemon.defense }}</p>
        <p> Attack Special : {{ pokemon.special_attack }}</p>
        <p> Defense Special : {{ pokemon.special_defense }}</p>
        <p> Vitesse : {{ pokemon.speed}}</p>
        <div class="containerCenter">
        <!-- v-for permet de ranger dans "a" et de repter la div -->
        <p class="needSpace">Capacités : </p>
        <div  v-for=" (a, index) in pokemon.abilities" v-bind:key="index">
            <!-- Ici on va afficher en prenant a car ca a été stocké dedans-->
             <p class="needSpace"> {{ a.ability.name }} </p>
       </div></div>
       <div class="containerCenter">
        <p class="needSpace">Type : </p>
        <p class="needSpace" v-for=" (t, index) in pokemon.types" v-bind:key="index">
              {{ t.type.name }} 
       </p>
       <!--Affiche couleur selon le type -->
       
       <div class="color" v-bind:style="getColor"> </div></div>
</div>
</template>

<script>
import { PokemonService } from '../services/pokemonService'
export default{
    name: 'PokemonDetails',
    data(){
        return{
            pokemonId:0,
            pokemonName:"",
            service: new PokemonService(),
            pokemon:{},
        }
        
    },
    computed: {
        //Affiche couleur selon le type 
        getColor(){
            console.log(this.pokemon.types)
            if (this.pokemon.types != undefined){

            
                let colors = []
                //on recupere couleur correspondant a chaque type
                this.pokemon.types.forEach(t => {
                    switch (t.type.name){
                    case 'normal':

                            colors.push('#A7A8A8')

                            break;

                        

                        case 'grass':

                            colors.push('#22B230')

                            break;



                        case 'fire':

                            colors.push('#C6371B')

                            break;

                    

                        case 'water':

                            colors.push('#2762C9')

                            break;

                        

                        case 'fighting':

                            colors.push('#632B06')

                            break;
                        
                        case 'flying':

                            colors.push('#4B729F')

                            break;

                        

                        case 'poison':

                            colors.push('#96169F')

                            break;

                        

                        case 'ground':

                            colors.push('yellow')

                            break;

                        

                        case 'rock':

                            colors.push('brown')

                            break;

                        

                        case 'bug':

                            colors.push('lime')

                            break;

                        

                        case 'ghost':

                            colors.push('darkblue')

                            break;

                           case 'electric':

                        colors.push('yellow')

                        break;

                       

                    case 'psychic':

                        colors.push('pink')

                        break;

                       

                    case 'ice':

                        colors.push('lightblue')

                        break;

                       

                    case 'dragon':

                        colors.push('purple')

                        break;

                       

                    case 'dark':

                        colors.push('black')

                        break;

                       

                    case 'steel':

                        colors.push('grey')

                        break;

               

                    case 'fairy':

                        colors.push('pink')

                        break;

                       



                    default:

                        break;
                    }
                })
                console.log(colors)
                
                if (colors.length > 1){
                    let result = colors.join(',')
                    return 'background: linear-gradient(45deg,'+ result +')';
                }
                else{
                    return 'background:'+ colors[0]
                }
                
            }
            return ''
            
        }
    },
    mounted(){
       let route = this.$route
      
       this.pokemonId = route.params.id
       this.service.getPokemon(this.pokemonId).then(pokemon =>{
          
           this.pokemon = pokemon
       })
     
    
       
    }
}
</script>

<style scoped>
.containerCenter {
   display: flex;
   flex-wrap: wrap;
   text-align: center;
   justify-content: center;
   margin: 0;
   align-items: center;
 
   }
.needSpace{
padding-left: 5px;
padding-right: 5px;
   }
.color{
    width: 20px;
    height: 20px;
    border-radius: 50%;
    text-align: center;
    
}
rout-link{
  margin: 1%;
}
</style>