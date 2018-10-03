var character = {name : "", age : 0, itemsToGive : []};

const giveItem  = (character) => {return(character.itemsToGive)};

var item = {
    "name" : "",
    "str" : 0,
    "magic" : 0,
    "minlvl" : 0,
    "price" : 0,
    "available" : false
};

const generateName = () => {
    let name = "";
    let length = 4+Math.ceil(Math.random()*6);
    for (let i=0;i<length;i++) {
        name += String.fromCharCode("a".charCodeAt(0) + Math.floor(Math.random()*27))
    }
    return(name);
};

 const basicStatGen = () => {

    let number = Math.ceil()*9;
    return(number);
};

const createItem = () => {
    new Item = {generateName(), (Math.ceil()*9), (Math.ceil()*9), (Math.ceil()*9), (Math.ceil()*99), true};

};

var shop = [];

const initiateShop = () => {
    if (shop.length<2){
        for(i=0;i<5;i++){
            shop.push(createItem());
        }
    } else {console.log("Shop already initiated!!!")}
};

const fillShop = () => {
    let j = 0
    for ( i ; i<shop.length; i++){
        if(shop[i]===undefined){
            shop[i] = createItem();
        }
    }
    if (shop[i])
};

var player = {
    "name" : "",
    "lvl" : 0,
    "hp" : 1,
    "str" : 0,
    "vit" : 0,
    "magic" : 0, 
    "int" : 0,
    "luck" : 0,
    "closeToLvlUp" : false,
    "equipment" : {
        head : {};,
        arms : {};,
        lefthand : {};,
        righthand : {};,
        chest : {};,
        legs : {};,
        feet : {};,
         };
};