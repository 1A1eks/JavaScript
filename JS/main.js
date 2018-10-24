
let initiated = false;

//=======Some-generators-and-vars-to-keep-track-of-stuff-============

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


var previousEnemyName = "none";
var avoidRepetitionEnemy = 0;

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

const giveItem  = (NPC) => {return(NPC.itemsToGive)};


class character {
    constructor (name, lvl, hp, mana, str, dex, int, wis, luck, exp, lefthand, righthand) {
        this.name = name,
        this.lvl = lvl,
        this.hp = hp,
        this.mana = mana, 
        this.str = str,
        this.dex = dex,
        this.int = int,
        this.wis = wis,
        this.luck = luck,
        this.exp = exp,
        this.closeToLvlUp = false,
        this.lefthand = lefthand,
        this.righthand = righthand        
    }

}

class human extends character {
    constructor (...args) {
        super(...args);
    }
}

class troll extends character {
    constructor (...args ) {
        super(...args);
    }
}

class goblin extends character {
    constructor (...args ) {
        super(...args);
    }
}

class dwarf extends character {
    constructor (...args ) {
        super(...args);
    }
}

class bear extends character {
    constructor (...args) {
        super(...args);
    }
}

class boar extends character {
    constructor (...args) {
        super(...args);
    }
}

class bunny extends character {
    constructor (...args) {
        super(...args);
    }
}

function makeFist () {
    let fist = new item ("fist", 1, 0, 1, 0, false);
    return fist;
}
//let fist = new item ("fist", 1, 0, 1, 0, false);

function createHuman () {
    let char = new human (generateName(), 1, makeHitPoints(), 0, Math.ceil(Math.random()*9), Math.ceil(Math.random()*9), Math.ceil(Math.random()*9), Math.ceil(Math.random()*9),
    Math.ceil(Math.random()*5), 0, makeFist(), makeFist());
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

Only to make sure page is displayed properly, + menu functions for mobile.
not actually doing other stuff
*/
function InitiateAll () {
    if(enemyArray.length < 1){
        enemyArray.push(createHuman());
    }
    initiateShop();
    introStart();    
    initiated=true;
}

if(initiated===false){
    const MC = createHuman();
    allyArray.push(MC);
    InitiateAll();
    initiated=true;
};

// update so doms go into variables!!
const topbarMargin = document.getElementById('topbarBackground').style.marginRight;
const topbarHeight = document.getElementById('topbarBackground').style.maxHeight;
const topnavMargin = document.getElementById('topnavList').style.marginLeft;
const externalLinks = document.getElementById("Links");
const topNav = document.getElementById("Navs");

function showExternalLinksClick() {
    if (externalLinks.style.display === "block") {
        externalLinks.style.display = "none";
        topbarMargin  = "10%";
        topbarHeight = "50px";
    } else {
        externalLinks.style.display = "block";
        topbarMargin = "0";
        topbarHeight = "300px";
    }
  }

function showTopNav() {
    if (topNav.style.display === "block") {
        topNav.style.display = "none";
        topnavMargin = "10%";
    } else {
        topNav.style.display = "block";
        topnavMargin = "0";
    }
}

//==================-Gameplay--visuals/html&CSS-==========================
//char-stats etc
const lvlA = document.getElementsByClassName('lvl')[0];
const nameA = document.getElementsByClassName('name')[0];
const hpA = document.getElementsByClassName('hp')[0];
const strA = document.getElementsByClassName('str')[0];
const dexA = document.getElementsByClassName('dex')[0];
const intA = document.getElementsByClassName('int')[0];
const wisA = document.getElementsByClassName('wis')[0];
const luckA = document.getElementsByClassName('luck')[0];
const nameWeaponA = document.getElementsByClassName('nameWeapon')[0];
const strWeaponA = document.getElementsByClassName('strWeapon')[0];
const magicWeaponA = document.getElementsByClassName('magicWeapon')[0];
const minLvlWeaponA = document.getElementsByClassName('minLvlWeapon')[0];
const priceWeaponA = document.getElementsByClassName('priceWeapon')[0];

const lvlB = document.getElementsByClassName('lvl')[1];
const nameB =  document.getElementsByClassName('name')[1];
const hpB = document.getElementsByClassName('hp')[1];
const strB = document.getElementsByClassName('str')[1];
const dexB = document.getElementsByClassName('dex')[1];
const intB = document.getElementsByClassName('int')[1];
const wisB = document.getElementsByClassName('wis')[1];
const luckB = document.getElementsByClassName('luck')[1];
const nameWeaponB = document.getElementsByClassName('nameWeapon')[1];
const strWeaponB = document.getElementsByClassName('strWeapon')[1];
const magicWeaponB = document.getElementsByClassName('magicWeapon')[1];
const minLvlWeaponB = document.getElementsByClassName('minLvlWeapon')[1];
const priceWeaponB = document.getElementsByClassName('priceWeapon')[1];

//other visual dom-elements
const attackCommandDiv = document.getElementById('attack');
const defendCommandDiv = document.getElementById('defend');
const escapeCommandDiv = document.getElementById('escape');
const lookAroundCommandDiv = document.getElementById('lookAround');
const restCommandDiv = document.getElementById('rest');
const hideCommandDiv = document.getElementById('hide');

function refreshVisuals() {
    lvlA.innerHTML = `Lvl ${allyArray[0].lvl}  `;
    nameA.innerHTML = ` ${allyArray[0].name}`;
    hpA.innerHTML = allyArray[0].hp;
    strA.innerHTML = allyArray[0].str;
    dexA.innerHTML = allyArray[0].dex;
    intA.innerHTML = allyArray[0].int;
    wisA.innerHTML = allyArray[0].wis;
    luckA.innerHTML = allyArray[0].luck;
    nameWeaponA.innerHTML = allyArray[0].lefthand.name;
    strWeaponA.innerHTML = allyArray[0].lefthand.str;
    magicWeaponA.innerHTML = allyArray[0].lefthand.magic;
    minLvlWeaponA.innerHTML = allyArray[0].lefthand.minlvl;
    priceWeaponA.innerHTML = allyArray[0].lefthand.price;

    lvlB.innerHTML = `Lvl ${enemyArray[0].lvl} `;
    nameB.innerHTML = ` ${enemyArray[0].name}`;
    hpB.innerHTML = enemyArray[0].hp;
    strB.innerHTML = enemyArray[0].str;
    dexB.innerHTML = enemyArray[0].dex;
    intB.innerHTML = enemyArray[0].int;
    wisB.innerHTML = enemyArray[0].wis;
    luckB.innerHTML = enemyArray[0].luck;
    nameWeaponB.innerHTML = enemyArray[0].lefthand.name;
    strWeaponB.innerHTML = enemyArray[0].lefthand.str;
    magicWeaponB.innerHTML = enemyArray[0].lefthand.magic;
    minLvlWeaponB.innerHTML = enemyArray[0].lefthand.minlvl;
    priceWeaponB.innerHTML = enemyArray[0].lefthand.price;
}

function toggleBattleInstanceOn () {
    attackCommandDiv.style.display = "block";
    defendCommandDiv.style.display = "block";
    escapeCommandDiv.style.display = "block";
    lookAroundCommandDiv.style.display = "none";
    restCommandDiv.style.display = "none";
    hideCommandDiv.style.display = "none";
}

function toggleBattleInstanceOff () {
    attackCommandDiv.style.display = "none";
    defendCommandDiv.style.display = "none";
    escapeCommandDiv.style.display = "none";
    lookAroundCommandDiv.style.display = "block";
    restCommandDiv.style.display = "block";
    hideCommandDiv.style.display = "block";    
}

var statsChar1 = document.getElementById('statsChar1');
var statsChar2 = document.getElementById('statsChar2');
var statsCharWeapon1 = document.getElementById('statsCharW1');
var statsCharWeapon2 = document.getElementById('statsCharW2');

function toggleCharStats1 () {
    if (statsChar1.style.display === "block") {
        statsChar1.style.display = "none";
    } else {
        statsChar1.style.display = "block";
    }
}

function toggleCharStats2 () {
    if (statsChar2.style.display === "block") {
        statsChar2.style.display = "none";
    } else {
        statsChar2.style.display = "block";
    }
}

function toggleCharStatsWeapon1 () {
    if (statsCharWeapon1.style.display === "block") {
        statsCharWeapon1.style.display = "none";
    } else {
        statsCharWeapon1.style.display = "block";
    }
}

function toggleCharStatsWeapon2 () {
    if (statsCharWeapon2.style.display === "block") {
        statsCharWeapon2.style.display = "none";
    } else {
        statsCharWeapon2.style.display = "block";
    }
}

function introStart () {
    if (initiated === false) {

        var viewportWidth = window.innerWidth;
        var viewportHeight = window.innerHeight;
        //BIG-SCREENS
        if (viewportWidth > 1080) {
        var batText = document.getElementsByClassName('battleText')[0];
        var introSections = document.getElementsByClassName("intro");
        var overlayBackground = document.createElement('div');
        document.body.insertAdjacentElement("afterbegin", overlayBackground);

        overlayBackground.style.position = "fixed";
        overlayBackground.style.top = "0";
        overlayBackground.style.left = "0";
        overlayBackground.style.backgroundColor = "#2a2929";
        overlayBackground.style.width = "100%";
        overlayBackground.style.height = "100vh";
        overlayBackground.style.overflow = "scroll";

        console.log("ok2" + initiated);
        introSections[0].style.position ="fixed";
        introSections[0].style.zIndex = "100";
        introSections[0].style.width = "50%";
        introSections[0].style.top = "0%";
        introSections[0].style.marginLeft = "-500px";
        introSections[0].style.left = "50%";

        introSections[1].style.position ="fixed";
        introSections[1].style.zIndex = "100";
        introSections[1].style.width = "50%";
        introSections[1].style.marginLeft = "350px";
        introSections[1].style.top = "0%";
        introSections[1].style.left = "5%";

        introSections[2].style.position ="fixed";
        introSections[2].style.zIndex = "99";
        introSections[2].style.top = "10%";
        introSections[2].style.textAlign = "center";
        introSections[2].style.left = "50%";
        introSections[2].style.marginLeft = "-325px";

        batText.style.border = "none";
        //MEDIUM-SCREENS    
        } else if (viewportWidth > 720) {
        var batText = document.getElementsByClassName('battleText')[0];
        var introSections = document.getElementsByClassName("intro");
        var overlayBackground = document.createElement('div');
        document.body.insertAdjacentElement("afterbegin", overlayBackground);

        overlayBackground.style.position = "fixed";
        overlayBackground.style.top = "0";
        overlayBackground.style.left = "0";
        overlayBackground.style.backgroundColor = "#2a2929";
        overlayBackground.style.width = "100%";
        overlayBackground.style.height = "100vh";
        overlayBackground.style.overflow = "scroll";

        console.log("ok2" + initiated);
        introSections[0].style.position ="fixed";
        introSections[0].style.zIndex = "99";
        introSections[0].style.width = "50%";
        introSections[0].style.top = "0%";
        introSections[0].style.marginLeft = "-350px";
        introSections[0].style.left = "50%";

        introSections[1].style.position ="fixed";
        introSections[1].style.zIndex = "99";
        introSections[1].style.width = "50%";
        introSections[1].style.marginLeft = "180px";
        introSections[1].style.top = "0%";
        introSections[1].style.left = "5%";

        introSections[2].style.position ="fixed";
        introSections[2].style.zIndex = "99";
        introSections[2].style.top = "50%";
        introSections[2].style.textAlign = "center";
        introSections[2].style.left = "50%";
        introSections[2].style.marginLeft = "-325px";

        batText.style.border = "none";
        //MOBILE-VERSIONS
        } else {

        }
    }    
}
//============-Gameplay-Combat-=================

//=========-Goes-into-character-Class?-======================

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
    let messagep = "";
   if(document.getElementsByClassName('battleText')[0].childElementCount > 8) {
    if (enemyArray[0].hp <= 0) {
        enemyArray[0].hp = 0;
        messagep     = "You killed the enemy."
    adjustBattleText(messagep);
    refreshVisuals();
    return;
    }     
    switch (returned[0]) {
         case "miss":
         messagep         = "You missed.."
         break;
         case "You hit..":
         messagep         = "You hit the enemy " + enemyArray[0].name + " for " + returned[2] + " damage!"
         break;
         case "~Critical Hit!~":
         messagep         = "~Critical Hit!~ \n  You Critical hit for " + returned[2] + " damage!"
         break;
    }
    adjustBattleText(messagep);
    refreshVisuals();
    return;
   }

   //===killing the enemy
   if (enemyArray[0].hp <= 0) {
       enemyArray[0].hp = 0;
       messagep    = "You killed the enemy."
    adjustBattleText(messagep);
    toggleBattleInstanceOff();
    refreshVisuals();
    return;
   }
    
   switch (returned[0]) {
        case "miss":
        messagep        = "You missed.."
        break;
        case "You hit..":
        messagep        = "You hit the enemy " + enemyArray[0].name + " for " + returned[2] + " damage!"
        break;
        case "~Critical Hit!~":
        messagep        = "~Critical Hit!~ \n  You Critical hit for " + returned[2] + " damage!"
        break;
   }
   adjustBattleText(messagep);
   refreshVisuals();
}
// seperate function to adjust the battletext innerhtml so problems might be avoided...

function adjustBattleText(message1) {

    if (document.getElementsByClassName('battleText')[0].childElementCount < 10){
   var count = document.getElementsByClassName('battleText')[0].childElementCount -1;
   console.log(document.getElementsByClassName('battleText')[0].childElementCount + "   " + `p${count}`);
     
   
   let p = `<p id="p${document.getElementsByClassName('battleText')[0].childElementCount}">paragraph</p>`;
   console.log(p);

   document.getElementById(`p${count}`).insertAdjacentHTML('afterend', p);

   document.getElementsByTagName('p')[document.getElementsByTagName('p').length-1].innerHTML 
   = message1;
   //document.getElementById(`p${count}`).scrollIntoView();
   return;
    }

   var count = document.getElementsByClassName('battleText')[0].childElementCount -1;
   console.log(document.getElementsByClassName('battleText')[0].childElementCount + "   " + `p${count}`);

    let temporary = "";
    for (let i = count; i >  0; i--) {
        temporary = document.getElementsByTagName('p')[i].innerHTML;
        document.getElementsByTagName('p')[i].innerHTML = message1;
        message1 = temporary;
    }
    //document.getElementById(`p${count}`).scrollIntoView();
    return;
}

////needs updating for performance!------------------------------------------------------------------------------










// returns message, dmgA, dmgB, message if charB counterattacks
//    attack(allyArray[0], enemyArray[0]);

//===========-Actually calling functions to play-=============================

InitiateAll();
refreshVisuals();

console.log(document.getElementById("attack"));

document.getElementById("attack").addEventListener("click", (event)=>executeAttack());

/*
document.getElementById("defend").addEventListener("click", );
document.getElementById("escape").addEventListener("click", );
*/