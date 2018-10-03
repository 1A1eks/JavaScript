var character = {"name" = "", "age" = 0, "itemsToGive" = []};

const giveItem  = (character) => {return(character.itemsToGive)};

var item = {
    "name" = "",
    "str" = 0,
    "magic" = 0,
    "minlvl" = 0,
    "available" = false
};

var shop = [];

var player = {
    "name" = "",
    "lvl" = 0,
    "hp" = 1,
    "str" = 0,
    "vit" = 0,
    "magic" = 0, 
    "int" = 0,
    "luck" = 0,
    "closeToLvlUp" = false,
    "equipment" = {
        "head" = {};,
        "arms" = {};,
        "lefthand" = {};,
        "righthand" = {};,
        "chest" = {};,
        "legs" = {};,
        "feet" = {};,
         };
};