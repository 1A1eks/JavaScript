
const battleText = document.getElementById('battleText');
const wrapper = document.getElementById('wrapper');
const viewportWidth = window.innerWidth;
const viewportHeight = window.innerHeight;
const buttonStatsChar1 = document.getElementById('statsButtonChar1');
const buttonStatsChar2 = document.getElementById('statsButtonChar2');
const buttonStatsCharW1 = document.getElementById('statsButtonCharW1');
const buttonStatsCharW2 = document.getElementById('statsButtonCharW2');
const surroundings = document.getElementById('surroundings');
var tutorialStarted = false;
var tutorial_Step = 0;
var pressed = false;

function pressedReset () {
    setTimeout(()=>{pressed=false}, 1000);
}



function askName () {
    let name = prompt ('...right, your name was ');
    return name;
}

function saveName (string) {
    allyArray[0].name = string;
}

function startTutorial () { 

    tutorialStarted = true;

   surroundings.style.display = "none";
   /*BIG-SCREENS*/
   if (viewportWidth > 1080) {
        const introSections = document.getElementsByClassName("intro");
        var overlayBackground = document.createElement('section');
        document.body.insertAdjacentElement("afterbegin", overlayBackground);
        overlayBackground.style.backgroundColor = "#eee";
        overlayBackground.className = "overlayBackground";

        alert('You slowly start to come to your senses \n You cant seem to remember who you are or what you were doing...')
        
        var overlayForeground = document.createElement('section');
        overlayForeground.className = "overlayForeground";
        document.body.insertAdjacentElement("afterbegin", overlayForeground);
        var name = askName();
        saveName(name);

        overlayBackground.style.position = "fixed";
        overlayBackground.style.top = "0";
        overlayBackground.style.left = "0";
        overlayBackground.style.backgroundColor = "#2a2929";
        overlayBackground.style.width = "100%";
        overlayBackground.style.height = "100vh";
        overlayBackground.style.overflow = "scroll";
        overlayBackground.style.zIndex = "15";
        /*console.log("ok2" + initiated);
        !!!!! try to loop doubled values!!!
        */
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
        battleText.style.border = "none";
        battleText.style.setProperty('width', '100%');
    /*MEDIUM-SCREENS  */  
    } else if (viewportWidth > 720) {
        const introSections = document.getElementsByClassName("intro");
        var overlayBackground = document.createElement('section');
        document.body.insertAdjacentElement("afterbegin", overlayBackground);
        overlayBackground.className = "overlayBackground";
        overlayBackground.style.backgroundColor = "#eee";

        overlayBackground.style.position = "fixed";
        overlayBackground.style.top = "0";
        overlayBackground.style.left = "0";
        overlayBackground.style.backgroundColor = "#2a2929";
        overlayBackground.style.width = "100%";
        overlayBackground.style.height = "100vh";
        overlayBackground.style.overflow = "scroll";

        alert('You slowly start to come to your senses \n You cant seem to remember who you are or what you were doing...')
        
        var overlayForeground = document.createElement('section');
        document.body.insertAdjacentElement("afterbegin", overlayForeground);
        overlayForeground.className = "overlayForeground";
        var name = askName();
        saveName(name);
        /*console.log("ok2" + initiated);*/
        introSections[0].style.position ="fixed";
        introSections[0].style.zIndex = "99";        
        introSections[0].style.top = "0%";
        introSections[0].style.marginLeft = "-350px";
        introSections[0].style.left = "50%";
        introSections[1].style.position ="fixed";
        introSections[1].style.zIndex = "99";        
        introSections[1].style.marginLeft = "60px";
        introSections[1].style.top = "0%";
        introSections[1].style.left = "50%";
        introSections[2].style.position ="fixed";
        introSections[2].style.zIndex = "99";
        introSections[2].style.top = "55%";
        introSections[2].style.textAlign = "center";
        introSections[2].style.left = "50%";
        introSections[2].style.marginLeft = "-325px";
        battleText.style.border = "none";
        battleText.style.width = "100%";
   /*MOBILE-VERSIONS*/
   } else {
   }
   toggleDivChar2();
   toggleBattleInstanceOff();     
   let skipButton = document.getElementById('skipButton');
   let skipButtonText = document.getElementById('skipButtonText');

   skipButton.style.display = "block";
   skipButtonText.addEventListener("onclick", (event)=>endTutorial());

}

function endTutorial () {

    tutorialStarted = false;
    console.log("test",surroundings);
    surroundings.style.display = "block";

    /*BIG-SCREENS*/
    if (viewportWidth > 1080) {
        const introSections = document.getElementsByClassName("intro");

        overlayBackground = document.getElementsByTagName('section')[1];
        overlayBackground.style.display = "none";

        overlayForeground = document.getElementsByTagName('section')[0];
        overlayForeground.style.display = "none";

        /*console.log("ok2" + initiated);*/
        introSections[0].style.position ="static";
        introSections[0].style.zIndex = "1";
        introSections[0].style.width = "auto";
        introSections[0].style.top = "";
        introSections[0].style.marginLeft = "10px";
        introSections[0].style.left = "";

        introSections[1].style.position ="static";
        introSections[1].style.zIndex = "1";
        introSections[1].style.width = "auto";
        introSections[1].style.marginLeft = "350px";
        introSections[1].style.top = "";
        introSections[1].style.left = "";

        introSections[2].style.position ="static";
        introSections[2].style.zIndex = "0";
        introSections[2].style.top = "";
        introSections[2].style.textAlign = "center";
        introSections[2].style.left = "";
        introSections[2].style.marginLeft = "";

        battleText.style.border = "none";
        battleText.style.setProperty('width', '100%');

    /*MEDIUM-SCREENS  */  
    } else if (viewportWidth > 720) {
            const introSections = document.getElementsByClassName("intro");
        var overlayBackground = document.createElement('div');
        overlayBackground = document.getElementsByTagName('section')[1];
        overlayBackground.style.display = "none";

        overlayForeground = document.getElementsByTagName('section')[0];
        overlayForeground.style.display = "none";

        /*console.log("ok2" + initiated);*/
        introSections[0].style.position ="static";
        introSections[0].style.zIndex = "1";
        introSections[0].style.width = "auto";
        introSections[0].style.top = "";
        introSections[0].style.marginLeft = "10px";
        introSections[0].style.left = "";

        introSections[1].style.position ="static";
        introSections[1].style.zIndex = "1";
        introSections[1].style.width = "auto";
        introSections[1].style.marginLeft = "350px";
        introSections[1].style.top = "";
        introSections[1].style.left = "";

        introSections[2].style.position ="static";
        introSections[2].style.zIndex = "0";
        introSections[2].style.top = "";
        introSections[2].style.textAlign = "center";
        introSections[2].style.left = "";
        introSections[2].style.marginLeft = "";

        battleText.style.border = "none";
        battleText.style.setProperty('width', '100%');
    /*MOBILE-VERSIONS*/
    } else {

    }
    toggleDivChar2();
    toggleBattleInstance();
    toggleBattleInstance();  
    let skipButton = document.getElementById('skipButton');
    let skipButtonText = document.getElementById('skipButtonText');
 
    skipButton.style.display = "block";
    console.log("what?why?");
    skipButtonText.removeEventListener("onclick"); 
}

//==========-Control-For-Tutorial-=========

function tutorialProgress () {
    if (tutorialStarted && pressed === false) {
        switch (tutorial_Step) {
            case 0:
            console.log("test", tutorial_Step);
            break;
            case 1: 

            break;
            case 2:

            break;
            case 3: 

            break;
            case 4:

            break;
            case 5: 

            break;
            case 6:

            break;
            case 7: 

            break;
            case 8:

            break;
            case 9: 

            break;
            case 10:

            break;
            case 11: 

            break;
        }

        tutorial_Step++;
        pressed = true;
        pressedReset();

        console.log("after switch", tutorial_Step, tutorialStarted);

        
    }
}

document.addEventListener("keydown", (event)=>tutorialProgress());

