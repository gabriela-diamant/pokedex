export class Blindtest {
    //proprietes d'un blindest
    id;
    name;
    height;
    types;
    base_experience;
    sprite;
    hp;
    defense;
    attack;
    special_attack;
    special_defense;
    speed;
    //constructeur de la classe blindtest
    constructor(anid, aname, anheight, atypes){
        this.id = anid
        this.name = aname
        this.height = anheight
        this.types = atypes
    }
}
