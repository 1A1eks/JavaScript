
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

function makeFist () {
    let fist = new item ("fist", 1, 0, 1, 0, false);
    return fist;
}
//let fist = new item ("fist", 1, 0, 1, 0, false);

function createCharacter () {
    let char = new Character (generateName(), 1, makeHitPoints(), Math.ceil(Math.random()*9), Math.ceil(Math.random()*9), Math.ceil(Math.random()*9), Math.ceil(Math.random()*9), Math.ceil(Math.random()*9),
    Math.ceil(Math.random()*5), false, makeFist(), makeFist());
    return(char);
}

function makeHitPoints () {
    let hp = Math.ceil(Math.random()*15);
    if (hp > 9){
        return hp;
    } else {
        return 10;
    }
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

/*============Initiating Game===========
check for previous starting point or save first & other stuff

Only to make sure page is displayed properly, 
not actually doing other stuff
*/
function InitiateAll () {
    if(enemyArray.length < 1){
        enemyArray.push(createCharacter());
    }
    initiateShop();    
    initiated=true;
}

if(initiated===false){
    const MC = createCharacter();
    allyArray.push(MC);
    InitiateAll();
    initiated=true;
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

    let message1 = "";
    switch (critical){
        case (0):
        message1 = "miss";
        break;
        case (1):
        message1 = "You hit..";
        break;
        case(2):
        message1 = "~Critical Hit!~"
        break;
    }
    console.log(message1 + "  " + dmgBB);
    //counterattack?
    let dmgAA = 0;

    let message2 = "";

    return([message1, dmgAA, dmgBB, message2]);
}

function attackVal (character) {
    let maxValue = character.lvl + character.lefthand.str * character.str;
    console.log(1 + " maxvalue: " + maxValue);
    maxValue = Math.pow(maxValue, (character.str + character.lefthand.str) / (character.lvl * 10 + character.lefthand.minlvl * 10))
    console.log(maxValue);
    let minValue = character.lvl - 1 + Math.floor(character.str/(character.lvl + 3));
    console.log("minvalue: " + minValue);

    let attackValue = Math.ceil(Math.random() * ( maxValue - minValue ) ) + minValue;

    //let attackValue = character.lvl + Math.ceil(Math.random()*character.lefthand.str) * Math.floor(Math.random()*character.str);
    //attackValue = Math.pow(attackValue, (character.str + character.lefthand.str) / (character.lvl * 10 + character.lefthand.minlvl * 10))
    return attackValue;
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
//==============-Visual output from combat-=====================

function executeAttack () {
   let returned =  attack(allyArray[0], enemyArray[0]);
   allyArray[0].hp-=returned[1];
   enemyArray[0].hp-=returned[2];

   if(document.getElementsByClassName('battleText')[0].childElementCount > 8) {
    if (enemyArray[0].hp <= 0) {
        enemyArray[0].hp = 0;
     document.getElementsByTagName('p')[document.getElementsByTagName('p').length-1].innerHTML 
     = "You killed the enemy."
     refreshVisuals();
     return;
    }     
    switch (returned[0]) {
         case "miss":
         document.getElementsByTagName('p')[document.getElementsByTagName('p').length-1].innerHTML 
         = "You missed.."
         break;
         case "You hit..":
         document.getElementsByTagName('p')[document.getElementsByTagName('p').length-1].innerHTML 
         = "You hit the enemy " + enemyArray[0].name + " for " + returned[2] + " damage!"
         break;
         case "~Critical Hit!~":
         document.getElementsByTagName('p')[document.getElementsByTagName('p').length-1].innerHTML 
         = "~Critical Hit!~ \n  You Critical hit for " + returned[2] + " damage!"
         break;
    }
   refreshVisuals();
   return;
   }

   var p = `<p id="p${document.getElementsByClassName('battleText')[0].childElementCount}">paragraph</p>`;
   console.log(p);

   //document.getElementsByClassName('battleText')[0]
   //document.createElement('p');
   var count = document.getElementsByClassName('battleText')[0].childElementCount -1;
   console.log(document.getElementsByClassName('battleText')[0].childElementCount + "   " + `p${count}`);
   
   document.getElementById(`p${count}`).insertAdjacentHTML('afterend', p);

   //===killing the enemy
   if (enemyArray[0].hp <= 0) {
       enemyArray[0].hp = 0;
    document.getElementsByTagName('p')[document.getElementsByTagName('p').length-1].innerHTML 
    = "You killed the enemy."
    refreshVisuals();
    return;
   }
    
   switch (returned[0]) {
        case "miss":
        document.getElementsByTagName('p')[document.getElementsByTagName('p').length-1].innerHTML 
        = "You missed.."
        break;
        case "You hit..":
        document.getElementsByTagName('p')[document.getElementsByTagName('p').length-1].innerHTML 
        = "You hit the enemy " + enemyArray[0].name + " for " + returned[2] + " damage!"
        break;
        case "~Critical Hit!~":
        document.getElementsByTagName('p')[document.getElementsByTagName('p').length-1].innerHTML 
        = "~Critical Hit!~ \n  You Critical hit for " + returned[2] + " damage!"
        break;
   }
   refreshVisuals();
}
// returns message, dmgA, dmgB, message if charB counterattacks
//    attack(allyArray[0], enemyArray[0]);

  /* up to 5 turns or so shown, from there on, don't create more p's, but change text.
    Idea for later

  var target = document.getElementsByClassName('battleText')[0];

  if ( document.getElementsByClassName("battleText")[0].childElementCount > 10) {

  } else {
      document.getElementsByClassName('battleText')[0]
      document.createElement('p');
       
      document.getElementsByClassName('battleText')[0].parentNode.insertBefore( 'p', target.nextSibling );   

  }
  */

//===========-Actually calling functions to play-=============================

InitiateAll();
refreshVisuals();

console.log(document.getElementById("attack"));

document.getElementById("attack").addEventListener("click", (event)=>executeAttack());

/*
document.getElementById("defend").addEventListener("click", );
document.getElementById("escape").addEventListener("click", );
*/