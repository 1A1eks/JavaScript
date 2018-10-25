
var battleText = document.getElementById('battleText');
var wrapper = document.getElementById('wrapper');




function introStart () {   
    if (initiated === false) {  

        var viewportWidth = window.innerWidth;
        var viewportHeight = window.innerHeight;
        /*BIG-SCREENS*/
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

        batText.style.border = "none";
        battleText.style.setProperty('width', '100%');
        /*MEDIUM-SCREENS  */  
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

        batText.style.border = "none";
        battleText.style.width = "100%";
        /*MOBILE-VERSIONS*/
        } else {

        }
    }    
}