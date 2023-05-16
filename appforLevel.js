function saveCharacterForLevelOne(){
    if (playerCharacterType == "mage") {
        characterContainerL.classList.remove('warriorCl');
        characterContainerL.classList.remove('archerCl');
        characterContainerL.classList.add('mageCl');
        
    }else if (playerCharacterType == 'warrior') {
        characterContainer.classList.remove('mageCl');
        characterContainer.classList.remove('archerCl');
        characterContainer.classList.add('warriorCl');
        
    }else if (playerCharacterType == 'archer') {
        characterContainerL.classList.remove('mageCl');
        characterContainerL.classList.remove('warriorCl');
        characterContainerL.classList.add('archerCl');
    }
        
        
}
saveCharacterForLevelOne();
setInterval(saveCharacterForLevelOne, 1);