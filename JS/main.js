
let initiated = false;

//=======Some generators============

const generateName = () => {
    let name = "";
    let length = 4+Math.ceil(Math.random()*6);
    for (let i=0;i<length;i++) {
        name += String.fromCharCode("a".charCodeAt(0) + Math.floor(Math.random()*26))
    }
    return(name);
};

 const basicStatGen = () => {
    let number = Math.ceil(Math.random()*9);
    return(number);
};

// =========shop and items===================

var shop = new Array (5);

function item  (name, str, magic, minlvl, price, available) {
    this.name = name,
    this.str = str,
    this.magic = magic,
    this.minlvl = minlvl,
    this.price = price,
    this.available = available
}

const createItem = () => {
    let iteeem = new item (generateName(), Math.ceil(Math.random()*9), Math.ceil(Math.random()*9), Math.ceil(Math.random()*9), Math.ceil(Math.random()*99), true);
    return(iteeem);
};

const initiateShop = () => {
    if (shop.length<2){
        for(i=0;i<5;i++){
            shop.push(createItem());
        }
    } else {console.log("Shop already initiated!!!")}
};

const fillShop = () => {
    let j = 0
    for (let i = 0 ; i<shop.length; i++){
        if(shop[i]===undefined){
            shop[i] = createItem();
        }
    }    
};

//===============NPC and characters and Dungeons==============

var NPC = {name : "", age : 0, itemsToGive : []};

const giveItem  = (character) => {return(character.itemsToGive)};

function Character (name, lvl, hp, str, vit, magic, int, luck, closeToLvlUp, lefthand, righthand) {
    this.name = name,
    this.lvl = lvl,
    this.hp = hp,
    this.str = str,
    this.vit = vit,
    this.magic = magic, 
    this.int = int,
    this.luck = luck,
    this.closeToLvlUp = closeToLvlUp,
    this.lefthand = lefthand,
    this.righthand = righthand        
}

let fist = new item ("fist", 1, 0, 1, 0, false);

function createCharacter () {
    let char = new Character (generateName(), 1, Math.ceil(Math.random()*15), Math.ceil(Math.random()*9), Math.ceil(Math.random()*9), Math.ceil(Math.random()*9), Math.ceil(Math.random()*9),
    Math.ceil(Math.random()*5), false, fist, fist);
    return(char);
}

let dung = new Array(3);

function createEnemy (max) {
    if(max===1){

    } else if (max > 1) {
        let mob = new Array(max);
        for(let i = 0; i < max; i++){

        }
        return(mob);
    }
}

function createDungeon (difficulty) {

}


//============Initiating Game===========
//check for previous starting point or save first
function InitiateAll () {
    




    

}

if(initiated===false){
    const MC = createCharacter();
    InitiateAll();
};
