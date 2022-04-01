<template>
<div class="container1" >
    <h1>

        Quel est le bon pokemon ?
        

        </h1>
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