var health, trolls ;
function fightBattle(health, trolls)
{
  if(health > 1 && health > trolls) {
    console.log("You have won this battle!");
  }  else if(health > 1 || trolls > health) {
    console.log("The trolls have defeated you!"); 
  }  else if(health === 1){
    console.log("Run Away!");
  }
}
 



health = 2;
trolls = 1;
fightBattle(health, trolls);

