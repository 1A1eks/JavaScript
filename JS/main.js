
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

var shop = new Array ();

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
    if (shop.length<4){
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

var allyArray = new Array();
var enemyArray = new Array();

var NPC = {name : "", age : 0, itemsToGive : []};

const giveItem  = (character) => {return(character.itemsToGive)};

function Character (name, lvl, hp, str, vit, magic, int, wis, luck, closeToLvlUp, lefthand, righthand) {
    this.name = name,
    this.lvl = lvl,
    this.hp = hp,
    this.str = str,
    this.vit = vit,
    this.magic = magic, 
    this.int = int,
    this.wis = wis,
    this.luck = luck,
    this.closeToLvlUp = closeToLvlUp,
    this.lefthand = lefthand,
    this.righthand = righthand        
}

let fist = new item ("fist", 1, 0, 1, 0, false);

function createCharacter () {
    let char = new Character (generateName(), 1, Math.ceil(Math.random()*15), Math.ceil(Math.random()*9), Math.ceil(Math.random()*9), Math.ceil(Math.random()*9), Math.ceil(Math.random()*9), Math.ceil(Math.random()*9),
    Math.ceil(Math.random()*5), false, fist, fist);
    return(char);
}


//===============For when making large scale dungeons && stuf later on===============================
/*
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
*/

//============Initiating Game===========
//check for previous starting point or save first
function InitiateAll () {
    enemyArray.push(createCharacter());
    initiateShop();





}

if(initiated===false){
    const MC = createCharacter();
    allyArray.push(MC);
    InitiateAll();
};

//==================-Gameplay--visuals/html&CSS-==========================

function refreshVisuals() {
    document.getElementsByClassName('lvl')[0].innerHTML = "Lvl" + allyArray[0].lvl + "  ";
    document.getElementsByClassName('name')[0].innerHTML = " " + allyArray[0].name;
    document.getElementsByClassName('hp')[0].innerHTML = allyArray[0].hp;
    document.getElementsByClassName('str')[0].innerHTML = allyArray[0].str;
    document.getElementsByClassName('vit')[0].innerHTML = allyArray[0].vit;
    document.getElementsByClassName('int')[0].innerHTML = allyArray[0].int;
    document.getElementsByClassName('wis')[0].innerHTML = allyArray[0].wis;
    document.getElementsByClassName('luck')[0].innerHTML = allyArray[0].luck;
    document.getElementsByClassName('nameWeapon')[0].innerHTML = allyArray[0].lefthand.name;
    document.getElementsByClassName('strWeapon')[0].innerHTML = allyArray[0].lefthand.str;
    document.getElementsByClassName('magicWeapon')[0].innerHTML = allyArray[0].lefthand.magic;
    document.getElementsByClassName('minLvlWeapon')[0].innerHTML = allyArray[0].lefthand.minlvl;
    document.getElementsByClassName('priceWeapon')[0].innerHTML = allyArray[0].lefthand.price;
    //document.getElementsByClassName('')[0].innerHTML = allyArray[0].;
    //document.getElementsByClassName('')[0].innerHTML = allyArray[0].;
    //document.getElementsByClassName('')[0].innerHTML = allyArray[0].;

    document.getElementsByClassName('lvl')[1].innerHTML = "Lvl" + enemyArray[0].lvl + "  ";
    document.getElementsByClassName('name')[1].innerHTML = " " + enemyArray[0].name;
    document.getElementsByClassName('hp')[1].innerHTML = enemyArray[0].hp;
    document.getElementsByClassName('str')[1].innerHTML = enemyArray[0].str;
    document.getElementsByClassName('vit')[1].innerHTML = enemyArray[0].vit;
    document.getElementsByClassName('int')[1].innerHTML = enemyArray[0].int;
    document.getElementsByClassName('wis')[1].innerHTML = enemyArray[0].wis;
    document.getElementsByClassName('luck')[1].innerHTML = enemyArray[0].luck;
    document.getElementsByClassName('nameWeapon')[1].innerHTML = enemyArray[0].lefthand.name;
    document.getElementsByClassName('strWeapon')[1].innerHTML = enemyArray[0].lefthand.str;
    document.getElementsByClassName('magicWeapon')[1].innerHTML = enemyArray[0].lefthand.magic;
    document.getElementsByClassName('minLvlWeapon')[1].innerHTML = enemyArray[0].lefthand.minlvl;
    document.getElementsByClassName('priceWeapon')[1].innerHTML = enemyArray[0].lefthand.price;
    //document.getElementsByClassName('')[1].innerHTML = enemyArray[0].;
    //document.getElementsByClassName('')[1].innerHTML = enemyArray[0].;
}

//============-Gameplay-Combat-=================

function attack (characterAA, characterBB) {
    let critical = isCriticalHit(characterAA);
    let dmgBB = attackVal(characterAA) * critical;

    let message = "";
    switch (critical){
        case (0):
        message = "miss";
        break;
        case (1):
        message = "You hit..";
        break;
        case(2):
        message = "~Critical Hit!~"
        break;
    }

    //counterattack?
    let dmgAA = 0;

    return(message1, dmgBB, dmgAA);
}

function attackVal (character) {
    let attackValue = this.lvl + Math.floor(Math.random()*this.lefthand.str) * Math.floor(Math.random()*this.str);

}

function defendVal () {

}

function getHit () {

}

function isCriticalHit (character) {
    let hit =  Math.floor(Math.random()*9);
    if (hit===0) {
        return(0);
    } else if (Math.floor(hit /8) + this.luck * 0.01 > 1) {
        return(2);
    } else {return(1);
    }
}

function running () {

}

function counterAttack () {

}

//===========-Actually calling functions to play-=============================

InitiateAll();
refreshVisuals();