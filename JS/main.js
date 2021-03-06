
let initiated = false;

/*
<link href="Fonts/black_castle/BlackCastleMF.ttf" rel='preload' type='text/css'>
<link href="Fonts/dungeon_sn/DUNGRG__.TTF" rel='preload' type='text/css'>
<link href="Fonts/karmatic_arcade/ka1.ttf" rel='preload' type='text/css'>
<link href="Fonts/old_wise_lord/Old Wise Lord.otf" rel='preload' type='text/css'>
<link href="Fonts/augusta/Augusta-Shadow.ttf" rel='preload' type='text/css'>
//   */

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

class Character {
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


    //============-Gameplay-Combat-=================
    //                 ||
    //                 \/
    //=========-Goes-into-character-Class-======================
    //or subclass if different way to calculate is needed


    //check if a char is dead
    isCharDead () {
    if(this.hp <= 0) {
        this.hp = 0;
        adjustBattleText(`You killed the enemy ${Character.name}`);
        return true;
        }
    return false;
    }

    //everything that happens in 1 attack round
    attack (characterBB) {
        let critical = this.isCriticalHit();
        let dmgBB = this.attackVal() * critical;
    
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
        //counterattack?  TBD
        let dmgAA = 0;    
        let message2 = "";    
        return([message1, dmgAA, dmgBB, message2]);
    }

    //Random way to determine attack-value
    attackVal () {
        let maxValue = this.lvl + this.lefthand.str * this.str;
        console.log(1 + " maxvalue: " + maxValue);
        maxValue = Math.pow(maxValue, (this.str + this.lefthand.str) / (this.lvl * 10 + this.lefthand.minlvl * 10))
        console.log(maxValue);
        let minValue = this.lvl - 1 + Math.floor(this.str/(this.lvl + 3));
        console.log("minvalue: " + minValue);
    
        let attackValue = Math.ceil(Math.random() * ( maxValue - minValue ) ) + minValue;
    
        //let attackValue = this.lvl + Math.ceil(Math.random()*this.lefthand.str) * Math.floor(Math.random()*this.str);
        //attackValue = Math.pow(attackValue, (this.str + this.lefthand.str) / (this.lvl * 10 + this.lefthand.minlvl * 10))
        return attackValue;
    }

    isCriticalHit () {
        let hit =  Math.floor(Math.random()*9);
        if (hit===0) {
            return(0);
        } else if (Math.floor(hit /8) + this.luck * 0.01 > 1) {
            return(2);
        } else {return(1);
        }
    }

    //TBD
    defendVal () {

    }

    getHit () {

    }
    running () {

    }

    counterAttack () {

    }

}

class Human extends Character {
    constructor (...args) {
        super(...args);
    }
}

class Troll extends Character {
    constructor (...args ) {
        super(...args);
    }
}

class Goblin extends Character {
    constructor (...args ) {
        super(...args);
    }
}

class dwarf extends Character {
    constructor (...args ) {
        super(...args);
    }
}

class Bear extends Character {
    constructor (...args) {
        super(...args);
    }
}

class boar extends Character {
    constructor (...args) {
        super(...args);
    }
}

class Bunny extends Character {
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
    let char = new Human (generateName(), 1, makeHitPoints(), 0, Math.ceil(Math.random()*9), Math.ceil(Math.random()*9), Math.ceil(Math.random()*9), Math.ceil(Math.random()*9),
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

//============-Getting-And-Setting-Cookies-/-localstorage-==============

function saveEverything () {
    localStorage.setItem('allyArray', JSON.stringify(allyArray));
    localStorage.setItem('enemyArray', JSON.stringify(enemyArray));
    //everything else there is to save?
}

function clearEverything () {
    localStorage.clear();
}

function loadLocalStorage () {
    allyArray = JSON.parse(localStorage.getItem('allyArray'));
    enemyArray = JSON.parse(localStorage.getItem('enemyArray'));
}

/*============Loading Game & Toggling functions===========
check for previous starting point or save first & other stuff

Only to make sure page is displayed properly, + menu functions for mobile.
not actually doing other stuff

!!!!not calling anything yet, only making it.

update so doms go into variables!!*/
const topbarBackground = document.getElementById('topbarBackground');
const topbarHeight = document.getElementById('topbarBackground');
const topnavMargin = document.getElementById('topnavList');
const externalLinks = document.getElementById("Links");
const topNav = document.getElementById("Navs");

/*other visual dom-elements*/
const attackCommandDiv = document.getElementById('attack');
const defendCommandDiv = document.getElementById('defend');
const escapeCommandDiv = document.getElementById('escape');
const lookAroundCommandDiv = document.getElementById('lookAround');
const restCommandDiv = document.getElementById('rest');
/*elements needed for overlay*/
var statsChar1 = document.getElementById('statsChar1');
var statsChar2 = document.getElementById('statsChar2');
var statsCharWeapon1 = document.getElementById('statsCharW1');
var statsCharWeapon2 = document.getElementById('statsCharW2');
/*toggleable elements for tutorial and maybe later*/
const charEnemy = document.getElementById('char2');


function showExternalLinksClick() {
    if (externalLinks.style.display === "block") {
        externalLinks.style.display = "none";
        topbarBackground.style.marginRight  = "1em";
        topbarBackground.style.maxHeight = "50px";
    } else {
        externalLinks.style.display = "block";
        topbarBackground.style.marginRight = "0em";
        topbarBackground.style.maxHeight = "300px";
    }
  }

function showTopNav() {
    if (topNav.style.display === "block") {
        topNav.style.display = "none";
        topnavMargin.style.marginLeft = "1em";
    } else {
        topNav.style.display = "block";
        topnavMargin.style.marginLeft = "0em";
    }
}

function toggleBattleInstance () {
    if (attackCommandDiv.style.display === "none" || restCommandDiv.style.display === "block") {
    attackCommandDiv.style.display = "block";
    defendCommandDiv.style.display = "block";
    escapeCommandDiv.style.display = "block";
    lookAroundCommandDiv.style.display = "none";
    restCommandDiv.style.display = "none";
    } else {        
    attackCommandDiv.style.display = "none";
    defendCommandDiv.style.display = "none";
    escapeCommandDiv.style.display = "none";
    lookAroundCommandDiv.style.display = "block";
    restCommandDiv.style.display = "block";
    }
}

function toggleBattleInstanceOff () {   
    attackCommandDiv.style.display = "none";
    defendCommandDiv.style.display = "none";
    escapeCommandDiv.style.display = "none";
    lookAroundCommandDiv.style.display = "none";
    restCommandDiv.style.display = "none";
}

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

function toggleDivChar2 () {
    if (charEnemy.style.display === "none") {
    charEnemy.style.display = "block";  
    } else {
        charEnemy.style.display = "none"; 
    }  
}

//*==================-Gameplay--visuals/html&CSS-==========================
//char-stats etc*/
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

//==============-Visual output from combat-=====================

//hardcoded for now, FIRST
function attackMessage (attackResult) {
    let messagep = "";
    switch (attackResult[0]) {        
        case "miss":
        messagep        = "You missed.."
        break;
        case "You hit..":
        messagep        = "You hit the enemy " + enemyArray[0].name + " for " + attackResult[2] + " damage!"
        break;
        case "~Critical Hit!~":
        messagep        = "~Critical Hit!~ \n  \n You hit for " + attackResult[2] + " damage!"
        break;       
    }
    return messagep;
}


//attack returns [(msg),(dmg done to A),(dmg done to B),(msg)]
function executeAttack () {
   let attackResult =  allyArray[0].attack(enemyArray[0]);
   allyArray[0].hp -= attackResult[1];
   enemyArray[0].hp -= attackResult[2];
   let messagep = "";
   if(document.getElementsByClassName('battleText')[0].childElementCount > 8) {
    if (enemyArray[0].isCharDead) {
        
        adjustBattleText(`You killed the enemy ${Character.name}`);
        toggleBattleInstance();
        refreshVisuals();
        return;
    } else { 
        messagep = attackMessage(attackResult);
        console.log(messagep);
        adjustBattleText(messagep);
        refreshVisuals();
        return;
    }
   }

   //===killing the enemy
   if (enemyArray[0].isCharDead()){
    toggleBattleInstance();
    refreshVisuals();
    return;
   };
    messagep = attackMessage(attackResult);
   adjustBattleText(messagep);
   refreshVisuals();
}
// seperate function to adjust the battletext innerhtml so problems might be avoided...

function adjustBattleText(message1) {
    if (document.getElementsByClassName('battleText')[0].childElementCount < 10) {
    var count = document.getElementsByClassName('battleText')[0].childElementCount -1;     
    let p = `<p id="p${document.getElementsByClassName('battleText')[0].childElementCount}">paragraph</p>`;
    document.getElementById(`p${count}`).insertAdjacentHTML('afterend', p);
    document.getElementsByTagName('p')[document.getElementsByTagName('p').length-1].innerHTML = message1;
    return;
    }
    var count = document.getElementsByClassName('battleText')[0].childElementCount -1;
    let temporary = "";
    for (let i = count; i >  0; i--) {
        temporary = document.getElementsByTagName('p')[i].innerHTML;
        document.getElementsByTagName('p')[i].innerHTML = message1;
        message1 = temporary;
    }
    return;
}
////maybe could be better? TBD

//==========-Initiating-localstorage-or coockie?-==========

var introSections = document.getElementsByClassName("intro");
function initiateAll () {    
    initiateShop(); 
    initiated=true;
}


if(localStorage.getItem('allyArray')) {
    loadLocalStorage();
    initiateAll();
    initiated === true
} else {
    //console.log("localstorage doesn't exist: ok?")
};

if(initiated===false){
    const MC = createHuman();
    allyArray.push(MC);
    if(enemyArray.length < 1){
        enemyArray.push(createHuman());
    }
    //console.log("initiated = false: ok?")
    initiateAll();
    initiated=true;
    //startTutorial();   
};

//===========-Actually calling functions to play-=============================

refreshVisuals();
document.getElementById("attack").addEventListener("click", (event)=>executeAttack());

/*
document.getElementById("defend").addEventListener("click", );
document.getElementById("escape").addEventListener("click", );
*/

document.onkeydown = function(e) {
    if (e.ctrlKey && e.keyCode === 83) {
        console.log("saved!");
        saveEverything();
        //little notification to show it has saved.        
        return false;
    }
};