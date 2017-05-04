/*
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
Made by Yann Morin Charbonneau - Github : @yannmc
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
*/

//Initialisation of all global variables
var setWarrior = setInterval(warriorAttack,Number(localStorage.warriorAttackSpeed));
var setArcher = setInterval(archerAttack,Number(localStorage.archerAttackSpeed));
var setWizard = setInterval(wizardAttack,Number(localStorage.wizardAttackSpeed));
var setMiner = setInterval(minerGeneration,Number(localStorage.minerGenerationSpeed));

clearInterval(setWarrior);
clearInterval(setArcher);
clearInterval(setWizard);
clearInterval(setMiner);

//Function that display all the tool tips
function toolTip(a){
  if(Number(localStorage.toolTip) == 1){
    if(a == 1){
      document.getElementById("information").innerHTML = "Tool Tips : Delete all current progress.";
    }else if(a == 2){
      document.getElementById("information").innerHTML = "Tool Tips : Upgrade different stats to become more powerful.";
    }else if(a == 3){
      document.getElementById("information").innerHTML = "Tool Tips : " + localStorage.attackDamageCost + " Gold for 15% increase.";
    }else if(a == 4){
      document.getElementById("information").innerHTML = "Tool Tips : " + localStorage.increaseCritCost + " Gold for 0.5% increase.";
    }else if(a == 5){
      document.getElementById("information").innerHTML = "Tool Tips : " + localStorage.goldDropCost + " Gold for 15% increase.";
    }else if(a == 6){
      document.getElementById("information").innerHTML = "Tool Tips : Recrute some minions to help you defeat enemies.";
    }else if(a == 7){
      if(Number(localStorage.warriorBought) === 0){
        document.getElementById("information").innerHTML = "Tool Tips : " + localStorage.warriorCost + " Gold to recruit a Warrior - - - Slow attack speed but powerful";
      }else if(Number(localStorage.warriorBought) == 1){
        document.getElementById("information").innerHTML = "Tool Tips : Level " + localStorage.warriorLevel + " - - - " + localStorage.warriorCurrentExp + " Exp / " + localStorage.warriorLevelUpExp + " Exp - - - Attack Damage : " + localStorage.warriorAttackDamage + " - - - Attack Speed : " + Number(localStorage.warriorAttackSpeed)/1000 + " Sec";
      }
    }else if(a == 8){
      if(Number(localStorage.archerBought) === 0){
        document.getElementById("information").innerHTML = "Tool Tips : " + localStorage.archerCost + " Gold to recruit an Archer - - - Slow attack speed but powerful";
      }else if(Number(localStorage.archerBought) == 1){
        document.getElementById("information").innerHTML = "Tool Tips : Level " + localStorage.archerLevel + " - - - " + localStorage.archerCurrentExp + " Exp / " + localStorage.archerLevelUpExp + " Exp - - - Attack Damage : " + localStorage.archerAttackDamage + " - - - Attack Speed : " + Number(localStorage.archerAttackSpeed)/1000 + " Sec";
      }
    }else if(a == 9){
      if(Number(localStorage.wizardBought) === 0){
        document.getElementById("information").innerHTML = "Tool Tips : " + localStorage.wizardCost + " Gold to recruit a Wizard - - - Small chance to increase your stats.";
      }else if(Number(localStorage.wizardBought) == 1){
        document.getElementById("information").innerHTML = "Tool Tips : Level " + localStorage.wizardLevel + " - - - " + localStorage.wizardCurrentExp + " Exp / " + localStorage.wizardLevelUpExp + " Exp - - - " + localStorage.wizardGoldBonusChance + "% Chance to increase Gold Drop by " + localStorage.wizardGoldDropBonus + " - - - " + localStorage.wizardDamageBonusChance +  "% Chance to increase attack damage by " + localStorage.wizardDamageBonus + " - - - Attack Speed : " + Number(localStorage.wizardAttackSpeed)/1000 + " Sec";
      }
    }else if(a == 10){
      document.getElementById("information").innerHTML = "Tool Tips : Use different skills to help you. !!NOT IMPLEMENTED YET!!";
    }else if(a == 11){
      document.getElementById("information").innerHTML = "Tool Tips : Active Skill1 to do . . . CoolDown X seconds !!NOT IMPLEMENTED YET!!";
    }else if(a == 12){
      document.getElementById("information").innerHTML = "Tool Tips : Active Skill2 to do . . . CoolDown X seconds !!NOT IMPLEMENTED YET!!";
    }else if(a == 13){
      document.getElementById("information").innerHTML = "Tool Tips : Active Skill3 to do . . . CoolDown X seconds !!NOT IMPLEMENTED YET!!";
    }else if(a == 14){
      document.getElementById("information").innerHTML = "Tool Tips : Tweak some settings";
    }else if(a == 15){
      document.getElementById("information").innerHTML = "Tool Tips : Click to attack the monster - - - Currently " + Math.round(localStorage.killExp) + " Exp/Kill";
    }else if(a == 16){
      document.getElementById("information").innerHTML = "Tool Tips : The amount of Health Point the monster has.";
    }else if(a == 17){
      document.getElementById("information").innerHTML = "Tool Tips : Your Gold stash, collect as much as you can!";
    }else if(a == 18){
      document.getElementById("information").innerHTML = "Tool Tips : Leveling-up will increase your attack by 1 and your gold drop by 2";
    }else if(a == 19){
      document.getElementById("information").innerHTML = "Current Attack Damage : " + localStorage.attackDamage + "/Click - - - Current Gold Drop : " + localStorage.goldDrop + "/Kill - - - Current Crit Chance : " + localStorage.critChance + "%";
    }else if(a == 20){
      document.getElementById("information").innerHTML = "Tool Tips : Turn Off the tool tips";
    }else if(a == 21){
      document.getElementById("information").innerHTML = "Tool Tips : Some useful tips";
    }else if(a == 22){
      if(Number(localStorage.minerBought) === 0){
        document.getElementById("information").innerHTML = "Tool Tips : " + localStorage.minerCost + " Gold to recruit a Miner - - - Slowly generates Gold.";
      }else if(Number(localStorage.minerBought) == 1){
        document.getElementById("information").innerHTML = "Tool Tips : Level " + localStorage.minerLevel + " - - - " + localStorage.minerCurrentExp + " Exp / " + localStorage.minerLevelUpExp + " Exp - - - Generates : " + localStorage.minerGoldGeneration + " Gold - - - Generation Speed : " + Number(localStorage.minerGenerationSpeed)/1000 + " sec ";
      }
    }else if(a == 23){
      if(Number(localStorage.warriorBought) == 1){
        document.getElementById("information").innerHTML = "Tool Tips : Level " + localStorage.warriorLevel + " - - - " + localStorage.warriorCurrentExp + " Exp / " + localStorage.warriorLevelUpExp + " Exp - - - Attack Damage : " + localStorage.warriorAttackDamage + " - - - Attack Speed : " + Number(localStorage.warriorAttackSpeed)/1000 + " Sec";
      }
    }else if(a == 24){
      if(Number(localStorage.archerBought) == 1){
        document.getElementById("information").innerHTML = "Tool Tips : Level " + localStorage.archerLevel + " - - - " + localStorage.archerCurrentExp + " Exp / " + localStorage.archerLevelUpExp + " Exp - - - Attack Damage : " + localStorage.archerAttackDamage + " - - - Attack Speed : " + Number(localStorage.archerAttackSpeed)/1000 + " Sec";
      }
    }else if(a == 25){
      if(Number(localStorage.wizardBought) == 1){
        document.getElementById("information").innerHTML = "Tool Tips : Level " + localStorage.wizardLevel + " - - - " + localStorage.wizardCurrentExp + " Exp / " + localStorage.wizardLevelUpExp + " Exp - - - " + localStorage.wizardGoldBonusChance + "% Chance to increase Gold Drop by " + localStorage.wizardGoldDropBonus + " - - - " + localStorage.wizardDamageBonusChance +  "% Chance to increase attack damage by " + localStorage.wizardDamageBonus + " - - - Attack Speed : " + Number(localStorage.wizardAttackSpeed)/1000 + " Sec";
      }
    }else if(a == 26){
      if(Number(localStorage.minerBought) == 1){
        document.getElementById("information").innerHTML = "Tool Tips : Level " + localStorage.minerLevel + " - - - " + localStorage.minerCurrentExp + " Exp / " + localStorage.minerLevelUpExp + " Exp - - - Generates : " + localStorage.minerGoldGeneration + " Gold - - - Generation Speed : " + Number(localStorage.minerGenerationSpeed)/1000 + " sec ";
      }
    }
  }
}

//Function that re-initialises all the stats when starting a new game
function newGame(){
  localStorage.gold = 0;
  localStorage.goldDrop = 75;
  localStorage.goldDropCost = 150;
  localStorage.health = 100;
  localStorage.maxHealth = 100;
  localStorage.attackDamage = 12;
  localStorage.attackDamageCost = 250;
  localStorage.battle = 1;
  localStorage.level = 1;
  localStorage.currentExp = 0;
  localStorage.levelUpExp = 100;
  localStorage.critChance = 0.5; //%
  localStorage.increaseCritCost = 300;
  localStorage.monsterType = Math.round(Math.random()*2)+1;
  localStorage.toolTip = 1;
  localStorage.killExp = 25;
  localStorage.userExpWon = 0;
  localStorage.minionsExpWon = 0;

  //warrior
  localStorage.warriorCost = 1000; //default value : 1000
  localStorage.warriorCurrentExp = 0;
  localStorage.warriorLevelUpExp = 100;
  localStorage.warriorAttackDamage = 5;
  localStorage.warriorAttackSpeed = 3000; //3 sec
  localStorage.warriorLevel = 1;
  localStorage.warriorBought = 0;

  //archer
  localStorage.archerCost = 2500; //default value : 2500
  localStorage.archerCurrentExp = 0;
  localStorage.archerLevelUpExp = 100;
  localStorage.archerAttackDamage = 2;
  localStorage.archerAttackSpeed = 1000; //1 sec
  localStorage.archerLevel = 1;
  localStorage.archerBought = 0;

  //wizard
  localStorage.wizardCost = 5000; //default value : 5000
  localStorage.wizardCurrentExp = 0;
  localStorage.wizardLevelUpExp = 100;
  localStorage.wizardAttackSpeed = 1000; //1 sec
  localStorage.wizardLevel = 1;
  localStorage.wizardBought = 0;
  localStorage.wizardGoldBonusChance = 0.5; //%
  localStorage.wizardDamageBonusChance = 0.25; //%
  localStorage.wizardGoldDropBonus = 5;
  localStorage.wizardDamageBonus = 2;

  //miner
  localStorage.minerCost = 6500; //default value : 6500
  localStorage.minerCurrentExp = 0;
  localStorage.minerLevelUpExp = 100;
  localStorage.minerGoldGeneration = 5;
  localStorage.minerGenerationSpeed = 1000; //1 sec
  localStorage.minerLevel = 1;
  localStorage.minerBought = 0;
  location.reload();
}

//Function that clears the tool tip
function clearInfo(){
  document.getElementById("information").innerHTML = "";
}

//Function that calculates the attack damage of the user
function attack(){
  var crit = Math.random()*101; //0-100
  if(Number(localStorage.critChance) >= Number(crit)){
    localStorage.critDamage = Number(localStorage.attackDamage)*4;
    return Number(localStorage.critDamage);
  }else{
    return Number(localStorage.attackDamage);
  }
}

//Function to check if current monster is dead or still alive
function isDead(){
  if(Math.round(parseInt(localStorage.health)) - attack() <= 0){
    localStorage.maxHealth = Math.round(parseInt(localStorage.maxHealth) * 1.01);
    localStorage.health = Math.round(parseInt(localStorage.maxHealth));
    localStorage.gold = Number(localStorage.gold) + Number(localStorage.goldDrop);
    localStorage.goldDrop = Number(localStorage.goldDrop); //add increase gold drop bonus
    localStorage.battle = Number(localStorage.battle) + 1;
    localStorage.monsterType = Math.round(Math.random() * 2 ) + 1;
    newMonster();
    getEXP();
    levelUp();
    document.getElementById("Exp").innerHTML = "Level " + localStorage.level + " - " + localStorage.currentExp + " exp / " + localStorage.levelUpExp + " exp";
    document.getElementById("Gold").innerHTML = localStorage.gold + "  Gold";
    document.getElementById("bar").innerHTML = "Encounter #" + localStorage.battle + " - " + localStorage.health + " HP / " + localStorage.maxHealth + " HP";
    document.getElementById("information").innerHTML = "Tool Tips : Click to attack the monster - - - Currently " + Math.round(localStorage.killExp) + " Exp/Kill";
  }else{
    localStorage.health = Math.round(parseInt(localStorage.health)) - attack();
    document.getElementById("bar").innerHTML = "Encounter #" + localStorage.battle + " - " + localStorage.health + " HP / " + localStorage.maxHealth + " HP";
  }
}

//Functiob that calculates the amount of exp received when killing a monster based the difficulty of the monster
function getEXP(){
  localStorage.userExpWon = Math.round(Number(localStorage.killExp));
  if((Number(localStorage.warriorBought) + Number(localStorage.archerBought) + Number(localStorage.wizardBought) + Number(localStorage.minerBought)) > 0){
    localStorage.userExpWon = (Math.round(Number(localStorage.userExpWon)))/2;
    localStorage.minionsExpWon = Math.round(Number(localStorage.userExpWon))/Math.round(Number(localStorage.warriorBought) + Number(localStorage.archerBought) + Number(localStorage.wizardBought) + Number(localStorage.minerBought));
    localStorage.currentExp = Math.round(Number(localStorage.currentExp)) + Math.round(Number(localStorage.userExpWon));
    if(localStorage.warriorBought == 1){
      localStorage.warriorCurrentExp = Math.round(Number(localStorage.warriorCurrentExp)) + Number(localStorage.minionsExpWon);
      warriorLevelUp();
    }
    if(localStorage.archerBought == 1){
      localStorage.archerCurrentExp = Math.round(Number(localStorage.archerCurrentExp)) + Number(localStorage.minionsExpWon);
      archerLevelUp();
    }
    if(localStorage.wizardBought == 1){
      localStorage.wizardCurrentExp = Math.round(Number(localStorage.wizardCurrentExp)) + Number(localStorage.minionsExpWon);
      wizardLevelUp();
    }
    if(localStorage.minerBought == 1){
      localStorage.minerCurrentExp = Math.round(Number(localStorage.minerCurrentExp)) + Number(localStorage.minionsExpWon);
      minerLevelUp();
    }
    document.getElementById("Exp").innerHTML = "Level " + localStorage.level + " - " + localStorage.currentExp + " exp / " + localStorage.levelUpExp + " exp";
  }else{
    localStorage.currentExp = Math.round(Number(localStorage.currentExp)) + Math.round(Number(localStorage.userExpWon));
  }
  if(Number(localStorage.battle) % 20 === 0){
    localStorage.killExp = Math.round(Number(localStorage.killExp)) * 1.3;
  }
}

//Function that is called when the page loads
function onLoad(){
  newMonster();
  if(Number(localStorage.toolTip) == 1){
    document.getElementById("tips").innerHTML = "Tool Tips Off";
  }else if(Number(localStorage.toolTip) === 0){
    document.getElementById("tips").innerHTML = "Tool Tips ON";
  }
  if(Number(localStorage.warriorBought) == 1){
    setInterval(warriorAttack,Number(localStorage.warriorAttackSpeed));
    document.getElementById("Warrior").innerHTML = "Warrior";
    document.getElementById('minionWarrior').style.backgroundImage="url(image/warrior.gif)";
    document.getElementById('minionWarrior').style.backgroundSize="140px";
  }else if(Number(localStorage.warriorBought) === 0){
    document.getElementById("Warrior").innerHTML = "Buy Warrior";
  }
  if(Number(localStorage.archerBought) == 1){
    setInterval(archerAttack,Number(localStorage.archerAttackSpeed));
    document.getElementById("Archer").innerHTML = "Archer";
    document.getElementById('minionArcher').style.backgroundImage="url(image/archer.gif)";
    document.getElementById('minionArcher').style.backgroundSize="150px";
  }else if(Number(localStorage.archerBought) === 0){
    document.getElementById("Archer").innerHTML = "Buy Archer";
  }
  if(Number(localStorage.wizardBought) == 1){
    setInterval(wizardAttack,Number(localStorage.wizardAttackSpeed));
    document.getElementById("Wizard").innerHTML = "Wizard";
    document.getElementById('minionWizard').style.backgroundImage="url(image/wizard.gif)";
    document.getElementById('minionWizard').style.backgroundSize="150px";
  }else if(Number(localStorage.wizardBought) === 0){
    document.getElementById("Wizard").innerHTML = "Buy Wizard";
  }
  if(Number(localStorage.minerBought) == 1){
    setInterval(minerGeneration,Number(localStorage.minerGenerationSpeed));
    document.getElementById("Miner").innerHTML = "Miner";
    document.getElementById('minionMiner').style.backgroundImage="url(image/miner.gif)";
    document.getElementById('minionMiner').style.backgroundSize="160px";
  }else if(Number(localStorage.minerBought) === 0){
    document.getElementById("Miner").innerHTML = "Buy Miner";
  }
  document.getElementById("Gold").innerHTML = localStorage.gold + "  Gold";
  document.getElementById("bar").innerHTML = "Encounter #" + localStorage.battle + " - " + localStorage.health + " HP / " + localStorage.maxHealth + " HP";
  document.getElementById("Exp").innerHTML = "Level " + localStorage.level + " - " + localStorage.currentExp + " exp / " + localStorage.levelUpExp + " exp";
}

//Function that increases the amount of damage dealt by the user
function increaseDamage(){
  if(Math.round(parseInt(localStorage.gold)) >= Math.round(parseInt(localStorage.attackDamageCost))){
    localStorage.gold = Math.round(parseInt(localStorage.gold)) - Math.round(parseInt(localStorage.attackDamageCost));
    localStorage.attackDamageCost = Math.round(parseInt(localStorage.attackDamageCost) * 1.25);
    localStorage.attackDamage = Math.round(parseInt(localStorage.attackDamage) * 1.15);
    document.getElementById("Gold").innerHTML = localStorage.gold + "  Gold";
    toolTip(3);
  }else{
    alert("You can't afford it!");
  }
}

//Function that displays the monster
function newMonster(){
  if(Number(localStorage.monsterType) == 1){
    document.getElementById('monster').style.backgroundImage="url(image/monster1.gif)";
  }else if(Number(localStorage.monsterType) == 2){
    document.getElementById('monster').style.backgroundImage="url(image/monster2.gif)";
  }else if(Number(localStorage.monsterType) == 3){
    document.getElementById('monster').style.backgroundImage="url(image/monster3.gif)";
  }
}

//Function that increases the critical hit chance of the user
function increaseCritChance(){
  if(Math.round(parseInt(localStorage.gold)) >= Math.round(parseInt(localStorage.increaseCritCost))){
    localStorage.gold = Math.round(parseInt(localStorage.gold)) - Math.round(parseInt(localStorage.increaseCritCost));
    localStorage.increaseCritCost = Math.round(parseInt(localStorage.increaseCritCost) * 1.75);
    localStorage.critChance = Number(localStorage.critChance) + 0.5;
    document.getElementById("Gold").innerHTML = localStorage.gold + "  Gold";
    toolTip(4);
  }else{
    alert("You can't afford it!");
  }
}

//Function that increases the amount of gold dropped by the monsters
function increaseGoldDrop(){
  if(Math.round(parseInt(localStorage.gold)) >= Math.round(parseInt(localStorage.goldDropCost))){
    localStorage.gold = Math.round(parseInt(localStorage.gold)) - Math.round(parseInt(localStorage.goldDropCost));
    localStorage.goldDropCost = Math.round(parseInt(localStorage.goldDropCost) * 1.20);
    localStorage.goldDrop = Math.round(parseInt(localStorage.goldDrop) * 1.15);
    document.getElementById("Gold").innerHTML = localStorage.gold + "  Gold";
    toolTip(5);
  }else{
    alert("You can't afford it!");
  }
}

//Function that increases stats when the user levels up
function levelUp(){
  if(Math.round(parseInt(localStorage.currentExp)) >= Math.round(parseInt(localStorage.levelUpExp))){
    localStorage.level = Math.round(parseInt(localStorage.level) + 1);
    localStorage.currentExp = Math.round(parseInt(localStorage.currentExp)) - Math.round(parseInt(localStorage.levelUpExp));
    localStorage.levelUpExp = Math.round(parseInt(localStorage.levelUpExp) * 1.2);
    localStorage.attackDamage = Math.round(parseInt(localStorage.attackDamage) + 1);
    localStorage.goldDrop = Math.round(parseInt(localStorage.goldDrop) + 2);
  }
}

//Function to trigger on/off the tool tips
function toolTipState(){
  if(Number(localStorage.toolTip) == 1){
    localStorage.toolTip = 0;
    document.getElementById("tips").innerHTML = "Tool Tips ON";
  }else if(Number(localStorage.toolTip) === 0){
    localStorage.toolTip = 1;
    document.getElementById("tips").innerHTML = "Tool Tips OFF";
  }
}

//Function that buys the warrior minion
function buyWarrior(){
  if(Number(localStorage.warriorBought) === 0){
    if(Math.round(parseInt(localStorage.gold)) >= Math.round(parseInt(localStorage.warriorCost))){
      localStorage.gold = Math.round(parseInt(localStorage.gold)) - Math.round(parseInt(localStorage.warriorCost));
      localStorage.warriorBought = 1;
      document.getElementById("information").innerHTML = "Tool Tips : Level " + localStorage.warriorLevel + " - - - " + localStorage.warriorCurrentExp + " Exp / " + localStorage.warriorLevelUpExp + " Exp - - - Attack Damage : " + localStorage.warriorAttackDamage + " - - - Attack Speed : " + Number(localStorage.warriorAttackSpeed)/1000 + " Sec";
      document.getElementById("Warrior").innerHTML = "Warrior";
      document.getElementById("Gold").innerHTML = localStorage.gold + "  Gold";
      document.getElementById('minionWarrior').style.backgroundImage="url(image/warrior.gif)";
      document.getElementById('minionWarrior').style.backgroundSize="140px";
      location.reload();
    }else{
      alert("You are missing " + (Number(localStorage.warriorCost) - Number(localStorage.gold)) + " Gold to buy the Warrior.");
    }
  }else{
    alert("You already bought the Warrior");
  }
}

//Function that returns the warrior damage
function warriorDamage(){
  return Math.round(parseInt(localStorage.warriorAttackDamage));
}

//Function that makes the warrior auto-attack
function warriorAttack(){
  if(Math.round(parseInt(localStorage.health)) - warriorDamage() <= 0){
    localStorage.maxHealth = Math.round(parseInt(localStorage.maxHealth) * 1.07);
    localStorage.health = Math.round(parseInt(localStorage.maxHealth));
    localStorage.gold = Number(localStorage.gold) + Number(localStorage.goldDrop);
    localStorage.goldDrop = Number(localStorage.goldDrop); //add increase gold drop bonus
    localStorage.battle = Number(localStorage.battle) + 1;
    localStorage.monsterType = Math.round(Math.random() * 2 ) + 1;
    newMonster();
    getEXP();
    levelUp();
    document.getElementById("Exp").innerHTML = "Level " + localStorage.level + " - " + localStorage.currentExp + " exp / " + localStorage.levelUpExp + " exp";
    document.getElementById("Gold").innerHTML = localStorage.gold + "  Gold";
    document.getElementById("bar").innerHTML = "Encounter #" + localStorage.battle + " - " + localStorage.health + " HP / " + localStorage.maxHealth + " HP";
    document.getElementById("information").innerHTML = "Tool Tips : Click to attack the monster - - - Currently " + Math.round(localStorage.killExp) + " Exp/Kill";
  }else{
    localStorage.health = Math.round(parseInt(localStorage.health)) - warriorDamage();
    document.getElementById("bar").innerHTML = "Encounter #" + localStorage.battle + " - " + localStorage.health + " HP / " + localStorage.maxHealth + " HP";
  }
}

//Function that displays the 'tutorial'
function help(){
  alert("Useful informations : " + "\n" + "\n" +
  "1 - Hovering your mouse hover things will provide you with tool tips about them." + "\n" + "\n" +
  "2 - Every 20 monsters, the EXP awarded for killing them is increased by 30%." + "\n" + "\n" +
  "3 - If you have minions, they EXP awarded for killing a monster is split between you and your minions, you get 50% and the other 50% is equally split to your minions." + "\n" + "\n" +
  "4 - Just like you, your minions can level-up, which will increase their attack damage as well as the speed at which they attack." + "\n" + "\n" +
  "5 - You can view your stats; you attack damage, gold drop and critical hit chance when hovering over the 'stats' tab." + "\n" + "\n" +
  "6 - The Wizard will attemp to increase your gold drop and you damage every second. As he levels up, the amount at which he increases your stats will get bigger and bigger. Keep in mind that only one or both stats could increase at the same time." + "\n" + "\n" +
  "7 - You can hover your mouse over the minions you bought to see their stats.");
}

//Function that buys the archer minion
function buyArcher(){
  if(Number(localStorage.archerBought) === 0){
    if(Math.round(parseInt(localStorage.gold)) >= Math.round(parseInt(localStorage.archerCost))){
      localStorage.gold = Math.round(parseInt(localStorage.gold)) - Math.round(parseInt(localStorage.archerCost));
      localStorage.archerBought = 1;
      document.getElementById("information").innerHTML = "Tool Tips : Level " + localStorage.archerLevel + " - - - " + localStorage.archerCurrentExp + " Exp / " + localStorage.archerLevelUpExp + " Exp - - - Attack Damage : " + localStorage.archerAttackDamage + " - - - Attack Speed : " + Number(localStorage.archerAttackSpeed)/1000 + " Sec";
      document.getElementById("Archer").innerHTML = "Archer";
      document.getElementById("Gold").innerHTML = localStorage.gold + "  Gold";
      document.getElementById('minionArcher').style.backgroundImage="url(image/archer.gif)";
      document.getElementById('minionArcher').style.backgroundSize="150px";
      location.reload();
    }else{
      alert("You are missing " + (Number(localStorage.archerCost) - Number(localStorage.gold)) + " Gold to buy the Archer.");
    }
  }else{
    alert("You already bought the Archer");
  }
}

//Function that returns the archer damage
function archerDamage(){
  return Math.round(parseInt(localStorage.archerAttackDamage));
}

//Function that makes the warrior auto-attack
function archerAttack(){
  if(Math.round(parseInt(localStorage.health)) - archerDamage() <= 0){
    localStorage.maxHealth = Math.round(parseInt(localStorage.maxHealth) * 1.07);
    localStorage.health = Math.round(parseInt(localStorage.maxHealth));
    localStorage.gold = Number(localStorage.gold) + Number(localStorage.goldDrop);
    localStorage.goldDrop = Number(localStorage.goldDrop); //add increase gold drop bonus
    localStorage.battle = Number(localStorage.battle) + 1;
    localStorage.monsterType = Math.round(Math.random() * 2 ) + 1;
    newMonster();
    getEXP();
    levelUp();
    document.getElementById("Exp").innerHTML = "Level " + localStorage.level + " - " + localStorage.currentExp + " exp / " + localStorage.levelUpExp + " exp";
    document.getElementById("Gold").innerHTML = localStorage.gold + "  Gold";
    document.getElementById("bar").innerHTML = "Encounter #" + localStorage.battle + " - " + localStorage.health + " HP / " + localStorage.maxHealth + " HP";
    document.getElementById("information").innerHTML = "Tool Tips : Click to attack the monster - - - Currently " + Math.round(localStorage.killExp) + " Exp/Kill";
  }else{
    localStorage.health = Math.round(parseInt(localStorage.health)) - archerDamage();
    document.getElementById("bar").innerHTML = "Encounter #" + localStorage.battle + " - " + localStorage.health + " HP / " + localStorage.maxHealth + " HP";
  }
}

//Function that buys the wizard minion
function buyWizard(){
  if(Number(localStorage.wizardBought) === 0){
    if(Math.round(parseInt(localStorage.gold)) >= Math.round(parseInt(localStorage.wizardCost))){
      localStorage.gold = Math.round(parseInt(localStorage.gold)) - Math.round(parseInt(localStorage.wizardCost));
      localStorage.wizardBought = 1;
      document.getElementById("information").innerHTML = "Tool Tips : Level " + localStorage.wizardLevel + " - - - " + localStorage.wizardCurrentExp + " Exp / " + localStorage.wizardLevelUpExp + " Exp - - - " + localStorage.wizardGoldBonusChance + "% Chance to increase Gold Drop by " + localStorage.wizardGoldDropBonus + " - - - " + localStorage.wizardDamageBonusChance +  "% Chance to increase attack damage by " + localStorage.wizardDamageBonus + " - - - Attack Speed : " + Number(localStorage.wizardAttackSpeed)/1000 + " Sec";
      document.getElementById("Wizard").innerHTML = "Wizard";
      document.getElementById("Gold").innerHTML = localStorage.gold + "  Gold";
      document.getElementById('minionWizard').style.backgroundImage="url(image/wizard.gif)";
      document.getElementById('minionWizard').style.backgroundSize="150px";
      location.reload();
    }else{
      alert("You are missing " + (Number(localStorage.wizardCost) - Number(localStorage.gold)) + " Gold to buy the Wizard.");
    }
  }else{
    alert("You already bought the Wizard");
  }
}

//Function that makes the wizard auto-attack
function wizardAttack(){
  var goldBonus = Math.random()*101; //0-100
  var damageBonus = Math.random()*101; //0-100
  if(Number(localStorage.wizardGoldBonusChance) >= Number(goldBonus)){
    localStorage.goldDrop = Number(localStorage.goldDrop) + Number(localStorage.wizardGoldDropBonus);
  }
  if(Number(localStorage.wizardDamageBonusChance) >= Number(damageBonus)){
    localStorage.attackDamage = Number(localStorage.attackDamage) + Number(localStorage.wizardDamageBonus);
  }
}

//Function that buys the miner minion
function buyMiner(){
  if(Number(localStorage.minerBought) === 0){
    if(Math.round(parseInt(localStorage.gold)) >= Math.round(parseInt(localStorage.minerCost))){
      localStorage.gold = Math.round(parseInt(localStorage.gold)) - Math.round(parseInt(localStorage.minerCost));
      localStorage.minerBought = 1;
      document.getElementById("information").innerHTML = "Tool Tips : Level " + localStorage.minerLevel + " - - - " + localStorage.minerCurrentExp + " Exp / " + localStorage.minerLevelUpExp + " Exp - - - Generates : " + localStorage.minerGoldGeneration + " Gold - - - Generation Speed : " + Number(localStorage.minerGenerationSpeed)/1000 + " sec ";
      document.getElementById("Miner").innerHTML = "Miner";
      document.getElementById("Gold").innerHTML = localStorage.gold + "  Gold";
      document.getElementById('minionMiner').style.backgroundImage="url(image/miner.gif)";
      document.getElementById('minionMiner').style.backgroundSize="160px";
      location.reload();
    }else{
      alert("You are missing " + (Number(localStorage.minerCost) - Number(localStorage.gold)) + " Gold to buy the Miner.");
    }
  }else{
    alert("You already bought the Miner");
  }
}

//Function that makes the miner auto-mine
function minerGeneration(){
  localStorage.gold = Number(localStorage.gold) + Number(localStorage.minerGoldGeneration);
  document.getElementById("Gold").innerHTML = localStorage.gold + "  Gold";
}

//Function that increases stats when the minion levels up
function warriorLevelUp(){
  if(Math.round(parseInt(localStorage.warriorCurrentExp)) >= Math.round(parseInt(localStorage.warriorLevelUpExp))){
    localStorage.warriorLevel = Math.round(parseInt(localStorage.warriorLevel) + 1);
    localStorage.warriorCurrentExp = Math.round(parseInt(localStorage.warriorCurrentExp)) - Math.round(parseInt(localStorage.warriorLevelUpExp));
    localStorage.warriorLevelUpExp = Math.round(parseInt(localStorage.warriorLevelUpExp) * 1.2);
    localStorage.warriorAttackDamage = Math.round(parseInt(localStorage.warriorAttackDamage) + 1);
    localStorage.warriorAttackSpeed = Number(localStorage.warriorAttackSpeed) - 10;
    clearInterval(setWarrior);
    var setWarrior = setInterval(warriorAttack,Number(localStorage.warriorAttackSpeed));
  }
}

//Function that increases stats when the minion levels up
function archerLevelUp(){
  if(Math.round(parseInt(localStorage.archerCurrentExp)) >= Math.round(parseInt(localStorage.archerLevelUpExp))){
    localStorage.archerLevel = Math.round(parseInt(localStorage.archerLevel) + 1);
    localStorage.archerCurrentExp = Math.round(parseInt(localStorage.archerCurrentExp)) - Math.round(parseInt(localStorage.archerLevelUpExp));
    localStorage.archerLevelUpExp = Math.round(parseInt(localStorage.archerLevelUpExp) * 1.2);
    localStorage.archerAttackDamage = Number(localStorage.archerAttackDamage) + 1;
    localStorage.archerAttackSpeed = Number(localStorage.archerAttackSpeed) - 10;
  }
}

//Function that increases stats when the minion levels up
function wizardLevelUp(){
  if(Math.round(parseInt(localStorage.wizardCurrentExp)) >= Math.round(parseInt(localStorage.wizardLevelUpExp))){
    localStorage.wizardLevel = Math.round(parseInt(localStorage.wizardLevel) + 1);
    localStorage.wizardCurrentExp = Math.round(parseInt(localStorage.wizardCurrentExp)) - Math.round(parseInt(localStorage.wizardLevelUpExp));
    localStorage.wizardLevelUpExp = Math.round(parseInt(localStorage.wizardLevelUpExp) * 1.2);
    localStorage.wizardAttackDamage = Math.round(parseInt(localStorage.wizardAttackDamage) + 1);
    localStorage.wizardGoldDropBonus = Number(localStorage.wizardGoldBonus) + 0.5;
    localStorage.wizardDamageBonus = Number(localStorage.wizardDamageBonus) + 0.25;
  }
}

//Function that increases stats when the minion levels up
function minerLevelUp(){
  if(Math.round(parseInt(localStorage.minerCurrentExp)) >= Math.round(parseInt(localStorage.minerLevelUpExp))){
    localStorage.minerLevel = Math.round(parseInt(localStorage.minerLevel) + 1);
    localStorage.minerCurrentExp = Math.round(parseInt(localStorage.minerCurrentExp)) - Math.round(parseInt(localStorage.minerLevelUpExp));
    localStorage.minerLevelUpExp = Math.round(parseInt(localStorage.minerLevelUpExp) * 1.2);
    localStorage.minerGoldGeneration = Number(localStorage.minerGoldGeneration) + 2;
    localStorage.minerGenerationSpeed = Number(localStorage.minerGenerationSpeed) - 10;
  }
}
