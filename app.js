const characterContainerL = document.getElementById('character_containerL');
const characterContainer = document.getElementById('character_container');
let playerCharacterType = localStorage.getItem('playerCharacterType');
const mageSpell = document.getElementById('spell');
const TheArrow = document.getElementById('TheArrow')
const AttackButtonA = document.getElementById('AttackButtonA');
const AttackButtonB = document.getElementById('AttackButtonB');
const AttackButtonC = document.getElementById('AttackButtonC');
let playerHealth = document.getElementById('playerHealth');
const vilianOneHealtht = document.getElementById('vilanHealthOne');
const greenSquare = document.getElementById('greenSquare');
let playerHealtht = 100;
let vilianOneHealth = 300;
function setMage() {
    localStorage.setItem('playerCharacterType', 'mage');
}


function QuickAttack () {
    let ranNumberForQuickAttack = Math.floor(Math.random() * 4 + 1);
    console.log(ranNumberForQuickAttack);
    
    if (ranNumberForQuickAttack == 1 || ranNumberForQuickAttack == 2 || ranNumberForQuickAttack == 3) {
        if (characterContainerL.classList.contains('mageCl')) {
            mageSpell.classList.add('animationForSpellMage');
            AttackButtonA.style.opacity = "0";
            AttackButtonB.style.opacity = "0";
           AttackButtonC.style.opacity = "0";
           AttackButtonA.removeAttribute('onclick');
           AttackButtonB.removeAttribute('onclick');
           AttackButtonC.removeAttribute('onclick');
           vilianOneHealth -= 20;
           vilianOneHealtht.innerText = vilianOneHealth;
           localStorage.setItem(playerHealth, playerHealtht);
               setTimeout(() => {
            mageSpell.classList.remove('animationForSpellMage');
            AttackButtonA.style.opacity = "1";
            AttackButtonB.style.opacity = "1";
           AttackButtonC.style.opacity = "1";
           AttackButtonA.addEventListener('click', QuickAttack);
           AttackButtonB.addEventListener('click', QuickAttack);
           AttackButtonC.addEventListener('click', QuickAttack);
           checkForLowHpLevelOne(vilianOneHealtht, vilianOneHealth);
           checkForWin(playerHealtht, vilianOneHealth);
           }, 1000);
           }if (characterContainerL.classList.contains('warriorCl')) {
               characterContainerL.classList.add('animationForSpellWarrior');
               AttackButtonA.style.opacity = "0";
            AttackButtonB.style.opacity = "0";
           AttackButtonC.style.opacity = "0";
           AttackButtonA.removeAttribute('onclick');
           AttackButtonB.removeAttribute('onclick');
           AttackButtonC.removeAttribute('onclick');
           vilianOneHealth -= 20;
           vilianOneHealtht.innerText = vilianOneHealth;
           localStorage.setItem(playerHealth, playerHealtht);
                  setTimeout(() => {
                   characterContainerL.classList.remove('animationForSpellWarrior');
                   AttackButtonA.style.opacity = "1";
            AttackButtonB.style.opacity = "1";
           AttackButtonC.style.opacity = "1";
           AttackButtonA.addEventListener('click', QuickAttack);
           AttackButtonB.addEventListener('click', QuickAttack);
           AttackButtonC.addEventListener('click', QuickAttack);
           checkForLowHpLevelOne(vilianOneHealtht, vilianOneHealth);
           checkForWin(playerHealtht, vilianOneHealth);
              }, 1000);
              }
           if(characterContainerL.classList.contains('archerCl')) {
               TheArrow.classList.add('ArcherArrow');
               AttackButtonA.style.opacity = "0";
            AttackButtonB.style.opacity = "0";
           AttackButtonC.style.opacity = "0";
           AttackButtonA.removeAttribute('onclick');
           AttackButtonB.removeAttribute('onclick');
           AttackButtonC.removeAttribute('onclick');
           vilianOneHealth -= 20;
           vilianOneHealtht.innerText = vilianOneHealth;
           localStorage.setItem(playerHealth, playerHealtht);
               setTimeout(() => {
                   TheArrow.classList.remove('ArcherArrow');
                   AttackButtonA.style.opacity = "1";
            AttackButtonB.style.opacity = "1";
           AttackButtonC.style.opacity = "1";
           AttackButtonA.addEventListener('click', QuickAttack);
           AttackButtonB.addEventListener('click', QuickAttack);
           AttackButtonC.addEventListener('click', QuickAttack);
           checkForLowHpLevelOne(vilianOneHealtht, vilianOneHealth);
           checkForWin(playerHealtht, vilianOneHealth);
               }, 1000);
           }
    } else if (ranNumberForQuickAttack == 4) {
        AttackButtonA.style.opacity = "0";
        AttackButtonB.style.opacity = "0";
           AttackButtonC.style.opacity = "0";
           AttackButtonA.removeAttribute('onclick');
           AttackButtonB.removeAttribute('onclick');
           AttackButtonC.removeAttribute('onclick');
           playerHealtht -= 20;
           vilianOneHealtht.innerText = vilianOneHealth;
           localStorage.setItem(playerHealth, playerHealtht);
           playerHealth.innerText = playerHealtht;
           greenSquare.classList.add('greenSquarAni');
        setTimeout(() => {
    AttackButtonA.style.opacity = "1";
    AttackButtonB.style.opacity = "1";
    AttackButtonC.style.opacity = "1";
    AttackButtonA.addEventListener('click', QuickAttack);
    AttackButtonB.addEventListener('click', QuickAttack);
    AttackButtonC.addEventListener('click', QuickAttack);
    checkForLowHpLevelOne(playerHealth, playerHealtht);
    checkForWin(playerHealtht, vilianOneHealth);
    greenSquare.classList.remove('greenSquarAni');
        }, 1000);
    } 
    
    console.log(playerHealtht);
    console.log(vilianOneHealth);
    
}
function NormalAttack () {
    let ranNumberForNormalAttack = Math.floor(Math.random() * 4 + 1);
    console.log(ranNumberForNormalAttack);
    
    if (ranNumberForNormalAttack === 1 || ranNumberForNormalAttack === 2) {
        if (characterContainerL.classList.contains('mageCl')) {
            mageSpell.classList.add('animationForSpellMage');
            AttackButtonA.style.opacity = "0";
            AttackButtonB.style.opacity = "0";
           AttackButtonC.style.opacity = "0";
           AttackButtonA.removeAttribute('onclick');
           AttackButtonB.removeAttribute('onclick');
           AttackButtonC.removeAttribute('onclick');
           localStorage.setItem(playerHealth, playerHealtht);
           vilianOneHealth -= 40;
           vilianOneHealtht.innerText = vilianOneHealth;
               setTimeout(() => {
            mageSpell.classList.remove('animationForSpellMage');
            AttackButtonA.style.opacity = "1";
            AttackButtonB.style.opacity = "1";
           AttackButtonC.style.opacity = "1";
           AttackButtonA.addEventListener('click', NormalAttack);
           AttackButtonB.addEventListener('click', NormalAttack);
           AttackButtonC.addEventListener('click', NormalAttack);
           checkForLowHpLevelOne(vilianOneHealtht, vilianOneHealth);
           checkForWin(playerHealtht, vilianOneHealth);
           }, 1000);
           }if (characterContainerL.classList.contains('warriorCl')) {
               characterContainerL.classList.add('animationForSpellWarrior');
               AttackButtonA.style.opacity = "0";
            AttackButtonB.style.opacity = "0";
           AttackButtonC.style.opacity = "0";
           AttackButtonA.removeAttribute('onclick');
           AttackButtonB.removeAttribute('onclick');
           AttackButtonC.removeAttribute('onclick');
           localStorage.setItem(playerHealth, playerHealtht);
           vilianOneHealth -= 20;
           vilianOneHealtht.innerText = vilianOneHealth;
                  setTimeout(() => {
                   characterContainerL.classList.remove('animationForSpellWarrior');
                   AttackButtonA.style.opacity = "1";
            AttackButtonB.style.opacity = "1";
           AttackButtonC.style.opacity = "1";
           AttackButtonA.addEventListener('click', NormalAttack);
           AttackButtonB.addEventListener('click', NormalAttack);
           AttackButtonC.addEventListener('click', NormalAttack);
           checkForLowHpLevelOne(vilianOneHealtht, vilianOneHealth);
           checkForWin(playerHealtht, vilianOneHealth);
              }, 1000);
              }
           if(characterContainerL.classList.contains('archerCl')) {
               TheArrow.classList.add('ArcherArrow');
               AttackButtonA.style.opacity = "0";
            AttackButtonB.style.opacity = "0";
           AttackButtonC.style.opacity = "0";
           AttackButtonA.removeAttribute('onclick');
           AttackButtonB.removeAttribute('onclick');
           AttackButtonC.removeAttribute('onclick');
           localStorage.setItem(playerHealth, playerHealtht);
           vilianOneHealth -= 40;
           vilianOneHealtht.innerText = vilianOneHealth;
               setTimeout(() => {
                   TheArrow.classList.remove('ArcherArrow');
                   AttackButtonA.style.opacity = "1";
            AttackButtonB.style.opacity = "1";
           AttackButtonC.style.opacity = "1";
           AttackButtonA.addEventListener('click', NormalAttack);
           AttackButtonB.addEventListener('click', NormalAttack);
           AttackButtonC.addEventListener('click', NormalAttack);
           vilianOneHealth -= 40;
           vilianOneHealtht.innerText = vilianOneHealth;
           checkForLowHpLevelOne(vilianOneHealtht, vilianOneHealth);
           checkForWin(playerHealtht, vilianOneHealth);
               }, 1000);
           } 
    }else if (ranNumberForNormalAttack === 4 || ranNumberForNormalAttack === 3) {
        AttackButtonA.style.opacity = "0";
        AttackButtonB.style.opacity = "0";
           AttackButtonC.style.opacity = "0";
           AttackButtonA.removeAttribute('onclick');
           AttackButtonB.removeAttribute('onclick');
           AttackButtonC.removeAttribute('onclick');
           localStorage.setItem(playerHealth, playerHealtht);
           playerHealtht -= 20;
           vilianOneHealtht.innerText = vilianOneHealth;
           localStorage.setItem(playerHealth, playerHealtht);
           playerHealth.innerText = playerHealtht;
           greenSquare.classList.add('greenSquarAni');
        setTimeout(() => {
    AttackButtonA.style.opacity = "1";
    AttackButtonB.style.opacity = "1";
    AttackButtonC.style.opacity = "1";
    AttackButtonA.addEventListener('click', QuickAttack);
    AttackButtonB.addEventListener('click', QuickAttack);
    AttackButtonC.addEventListener('click', QuickAttack);
    checkForLowHpLevelOne(playerHealth, playerHealtht);
    checkForWin(playerHealtht, vilianOneHealth);
    greenSquare.classList.remove('greenSquarAni');
        }, 1000);
    } 
    
    console.log(playerHealth);
    console.log(vilianOneHealth);
    
}
function HeavyAttack () {
    let ranNumberForHeavyAttack = Math.floor(Math.random() * 4 + 1);
    console.log(ranNumberForHeavyAttack);
    
    if (ranNumberForHeavyAttack == 1) {
        if (characterContainerL.classList.contains('mageCl')) {
            mageSpell.classList.add('animationForSpellMage');
            AttackButtonA.style.opacity = "0";
            AttackButtonB.style.opacity = "0";
           AttackButtonC.style.opacity = "0";
           AttackButtonA.removeAttribute('onclick');
           AttackButtonB.removeAttribute('onclick');
           AttackButtonC.removeAttribute('onclick');
           localStorage.setItem(playerHealth, playerHealtht);
           vilianOneHealth -= 60;
           vilianOneHealtht.innerText = vilianOneHealth;
               setTimeout(() => {
            mageSpell.classList.remove('animationForSpellMage');
            AttackButtonA.style.opacity = "1";
            AttackButtonB.style.opacity = "1";
           AttackButtonC.style.opacity = "1";
           AttackButtonA.addEventListener('click', HeavyAttack);
           AttackButtonB.addEventListener('click', HeavyAttack);
           AttackButtonC.addEventListener('click', HeavyAttack);
           checkForLowHpLevelOne(vilianOneHealtht, vilianOneHealth);
           checkForWin(playerHealtht, vilianOneHealth);
           }, 1000);
           }if (characterContainerL.classList.contains('warriorCl')) {
               characterContainerL.classList.add('animationForSpellWarrior');
               AttackButtonA.style.opacity = "0";
            AttackButtonB.style.opacity = "0";
           AttackButtonC.style.opacity = "0";
           AttackButtonA.removeAttribute('onclick');
           AttackButtonB.removeAttribute('onclick');
           AttackButtonC.removeAttribute('onclick');
           localStorage.setItem(playerHealth, playerHealtht);
           vilianOneHealth -= 60;
           vilianOneHealtht.innerText = vilianOneHealth;
                  setTimeout(() => {
                   characterContainerL.classList.remove('animationForSpellWarrior');
                   AttackButtonA.style.opacity = "1";
            AttackButtonB.style.opacity = "1";
           AttackButtonC.style.opacity = "1";
           AttackButtonA.addEventListener('click', HeavyAttack);
           AttackButtonB.addEventListener('click', HeavyAttack);
           AttackButtonC.addEventListener('click', HeavyAttack);
           checkForLowHpLevelOne(vilianOneHealtht, vilianOneHealth);
           checkForWin(playerHealtht, vilianOneHealth);
              }, 1000);
              }
           if(characterContainerL.classList.contains('archerCl')) {
               TheArrow.classList.add('ArcherArrow');
               AttackButtonA.style.opacity = "0";
            AttackButtonB.style.opacity = "0";
           AttackButtonC.style.opacity = "0";
           AttackButtonA.removeAttribute('onclick');
           AttackButtonB.removeAttribute('onclick');
           AttackButtonC.removeAttribute('onclick');
           localStorage.setItem(playerHealth, playerHealtht);
           vilianOneHealth -= 60;
           vilianOneHealtht.innerText = vilianOneHealth;
               setTimeout(() => {
                   TheArrow.classList.remove('ArcherArrow');
                   AttackButtonA.style.opacity = "1";
            AttackButtonB.style.opacity = "1";
           AttackButtonC.style.opacity = "1";
           AttackButtonA.addEventListener('click', HeavyAttack);
           AttackButtonB.addEventListener('click', HeavyAttack);
           AttackButtonC.addEventListener('click', HeavyAttack);
           checkForLowHpLevelOne(vilianOneHealtht, vilianOneHealth);
           checkForWin(playerHealtht, vilianOneHealth);
               }, 1000);
           }
    } if (ranNumberForHeavyAttack == 4 || ranNumberForHeavyAttack == 3 || ranNumberForHeavyAttack == 2) {
        AttackButtonA.style.opacity = "0";
        AttackButtonB.style.opacity = "0";
           AttackButtonC.style.opacity = "0";
           AttackButtonA.removeAttribute('onclick');
           AttackButtonB.removeAttribute('onclick');
           AttackButtonC.removeAttribute('onclick');
           playerHealtht -= 20;
           localStorage.setItem(playerHealth, playerHealtht);
           playerHealth.innerText = playerHealtht;
           greenSquare.classList.add('greenSquarAni');
        setTimeout(() => {
    AttackButtonA.style.opacity = "1";
    AttackButtonB.style.opacity = "1";
    AttackButtonC.style.opacity = "1";
    AttackButtonA.addEventListener('click', QuickAttack);
    AttackButtonB.addEventListener('click', QuickAttack);
    AttackButtonC.addEventListener('click', QuickAttack);
    checkForLowHpLevelOne(playerHealth, playerHealtht);
    checkForWin(playerHealtht, vilianOneHealth);
    greenSquare.classList.remove('greenSquarAni');
        }, 1000);
    } 
    
    console.log(playerHealth);
    console.log(vilianOneHealth);
    
}
function changeCharacterRight() {
    if(characterContainer.classList.contains('mageCl')) {
       localStorage.setItem('playerCharacterType', 'archer');
        characterContainer.classList.remove('mageCl');
        characterContainer.classList.add('archerCl');
    } else if (characterContainer.classList.contains('archerCl')) {
        characterContainer.classList.remove('archerCl');
        characterContainer.classList.add('warriorCl');
        localStorage.setItem('playerCharacterType', 'warrior');
    }else if (characterContainer.classList.contains('warriorCl')) {
        characterContainer.classList.remove('warriorCl');
        characterContainer.classList.add('mageCl');
        localStorage.setItem('playerCharacterType', 'mage');
    }
}
function changeCharacterLeft() {
    if(characterContainer.classList.contains('mageCl')) {
        localStorage.setItem('playerCharacterType', 'warrior');
        characterContainer.classList.remove('mageCl');
        characterContainer.classList.add('warriorCl');
    } else if (characterContainer.classList.contains('archerCl')) {
        characterContainer.classList.remove('archerCl');
        characterContainer.classList.add('mageCl');
        localStorage.setItem('playerCharacterType', 'mage');
    }else if (characterContainer.classList.contains('warriorCl')) {
        characterContainer.classList.remove('warriorCl');
        characterContainer.classList.add('archerCl');
        localStorage.setItem('playerCharacterType', 'archer');
    }
}
function saveCharacterForLevelOne(){
    if (playerCharacterType == "mage") {

        characterContainerL.classList.add('mageCl');

    }else if (playerCharacterType == 'warrior') {

        characterContainerL.classList.add('warriorCl');
        
    }else if (playerCharacterType == 'archer') {
        characterContainerL.classList.add('archerCl');
    }
        
        
}
function checkForLowHpLevelOne (checking, b) {
    if (b <= 50) {
        checking.style.backgroundColor = "yellow";
    } if (b <= 25) {
        checking.style.backgroundColor = "red";
    }

}
function checkForWin(a, b) {
    if(a <= 0) {
        console.log('The player has lost the game');
        window.location.assign("LostPage.html");
    }else if (b <= 0) {
        
        window.location.assign("levelTwo.html");
    }
}
