
const battleText = document.getElementById('battleText');
const wrapper = document.getElementById('wrapper');
const viewportWidth = window.innerWidth;
const viewportHeight = window.innerHeight;
const buttonStatsChar1 = document.getElementById('statsButtonChar1');
const buttonStatsChar2 = document.getElementById('statsButtonChar2');
const buttonStatsCharW1 = document.getElementById('statsButtonCharW1');
const buttonStatsCharW2 = document.getElementById('statsButtonCharW2');
const surroundings = document.getElementById('surroundings');


function startTutorial () {   
    
    if (initiated === false) {          

        surroundings.style.display = "none";
        var overlayBackground = document.createElement('div');
        /*BIG-SCREENS*/
        if (viewportWidth > 1080) {
            const introSections = document.getElementsByClassName("intro");
        document.body.insertAdjacentElement("afterbegin", overlayBackground);

        overlayBackground.style.position = "fixed";
        overlayBackground.style.top = "0";
        overlayBackground.style.left = "0";
        overlayBackground.style.backgroundColor = "#2a2929";
        overlayBackground.style.width = "100%";
        overlayBackground.style.height = "100vh";
        overlayBackground.style.overflow = "scroll";
        overlayBackground.style.zIndex = "15";

        /*console.log("ok2" + initiated);*/
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
        var overlayBackground = document.createElement('div');
        document.body.insertAdjacentElement("afterbegin", overlayBackground);

        overlayBackground.style.position = "fixed";
        overlayBackground.style.top = "0";
        overlayBackground.style.left = "0";
        overlayBackground.style.backgroundColor = "#2a2929";
        overlayBackground.style.width = "100%";
        overlayBackground.style.height = "100vh";
        overlayBackground.style.overflow = "scroll";

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
    }
    introSections[1].style.display = "none";    
}

function endTutorial () {

    console.log("test",surroundings);
        surroundings.style.display = "block";
        /*BIG-SCREENS*/
        if (viewportWidth > 1080) {
        const introSections = document.getElementsByClassName("intro");

        overlayBackground = document.getElementsByTagName('div')[0];
        overlayBackground.style.display = "none";

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
        document.body.insertAdjacentElement("afterbegin", overlayBackground);

        overlayBackground.style.position = "fixed";
        overlayBackground.style.top = "0";
        overlayBackground.style.left = "0";
        overlayBackground.style.backgroundColor = "#2a2929";
        overlayBackground.style.width = "100%";
        overlayBackground.style.height = "100vh";
        overlayBackground.style.overflow = "scroll";

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
      
}