var charChosen;
var charachters = [{
    "c1":{
        name: "Collinsworth", health: 120, attackP: 12, counterAttackP: 10,
    },
    "c2":{
        name: "Mason", health: 200, attackP: 10, counterAttackP: 10,
    },
    "c3":{
        name: "Rodgers", health: 150, attackP: 15, counterAttackP: 10,
    },
    "c4":{
        name: "Adams", health: 110, attackP: 14, counterAttackP: 10,
    }
}];

var enemies = [{
    "e1":{
        name: "Mack", health: 150, counterAttackP: 15,
    },
    "e2":{
        name: "Meyers", health: 200, counterAttackP: 12,
    },
    "e3":{
        name: "Bates", health: 130, counterAttackP: 14,
    },
    "e4":{
        name: "Lecter", health: 105, counterAttackP: 20,
    }
}];

console.log("CHARACTERS:"+charachters);
console.log("ENEMIES:"+enemies);

var characterChosen;
var opponentChosen;

//Character 1
var name1 = document.getElementById("c1Name");
var health1 = document.getElementById("c1Health")
var attackPower1 = document.getElementById("c1AttackPower")
var counterPower1 = document.getElementById("c1CounterPower")

//Character 2
var name2 = document.getElementById("c2Name");
var health2 = document.getElementById("c2Health")
var attackPower2 = document.getElementById("c2AttackPower")
var counterPower2 = document.getElementById("c2CounterPower")

//Character 3
var name3 = document.getElementById("c3Name");
var health3 = document.getElementById("c3Health")
var attackPower3 = document.getElementById("c3AttackPower")
var counterPower3 = document.getElementById("c3CounterPower")

//Character 4
var name4 = document.getElementById("c4Name");
var health4 = document.getElementById("c4Health")
var attackPower4 = document.getElementById("c4AttackPower")
var counterPower4 = document.getElementById("c4CounterPower")



//Opponent 1
var eName1 = document.getElementById("e1Name");
var eHealth1 = document.getElementById("e1Health")
var eCounterPower1 = document.getElementById("e1CounterPower")

//Opponent 2
var eName2 = document.getElementById("e2Name");
var eHealth2 = document.getElementById("e2Health")
var eCounterPower2 = document.getElementById("e2CounterPower")

//Opponent 3
var eName3 = document.getElementById("e3Name");
var eHealth3 = document.getElementById("e3Health")
var eCounterPower3 = document.getElementById("e3CounterPower")

//Opponent 4
var eName4 = document.getElementById("e4Name");
var eHealth4 = document.getElementById("e4Health")
var eCounterPower4 = document.getElementById("e4CounterPower")

//variables to store which character and opponent were chosen
var selectedCharacter = '';
var selectedOpponent;



$(document).ready(function (){
    //Character details
    name1.textContent = "Name:" + charachters[0].c1.name;
    name2.textContent = "Name:" + charachters[0].c2.name;
    name3.textContent = "Name:" + charachters[0].c3.name;
    name4.textContent = "Name:" + charachters[0].c4.name;
    health1.textContent = "Health:" + charachters[0].c1.health;
    health2.textContent = "Health:" + charachters[0].c2.health;
    health3.textContent = "Health:" + charachters[0].c3.health;
    health4.textContent = "Health:" + charachters[0].c4.health;
    attackPower1.textContent = "Attack Power:" + charachters[0].c1.attackP;
    attackPower2.textContent = "Attack Power:" + charachters[0].c2.attackP;
    attackPower3.textContent = "Attack Power:" + charachters[0].c3.attackP;
    attackPower4.textContent = "Attack Power:" + charachters[0].c4.attackP;
    counterPower1.textContent = "Counter Power:" + charachters[0].c1.counterAttackP;
    counterPower2.textContent = "Counter Power:" + charachters[0].c2.counterAttackP;
    counterPower3.textContent = "Counter Power:" + charachters[0].c3.counterAttackP;
    counterPower4.textContent = "Counter Power:" + charachters[0].c4.counterAttackP;

    //Opponent details
    eName1.textContent = "Name:" + enemies[0].e1.name;
    eName2.textContent = "Name:" + enemies[0].e2.name;
    eName3.textContent = "Name:" + enemies[0].e3.name;
    eName4.textContent = "Name:" + enemies[0].e4.name;
    eHealth1.textContent = "Health:" + enemies[0].e1.health;
    eHealth2.textContent = "Health:" + enemies[0].e2.health;
    eHealth3.textContent = "Health:" + enemies[0].e3.health;
    eHealth4.textContent = "Health:" + enemies[0].e4.health;
    eCounterPower1.textContent = "Counter Power:" + enemies[0].e1.counterAttackP;
    eCounterPower2.textContent = "Counter Power:" + enemies[0].e2.counterAttackP;
    eCounterPower3.textContent = "Counter Power:" + enemies[0].e3.counterAttackP;
    eCounterPower4.textContent = "Counter Power:" + enemies[0].e4.counterAttackP;


    //functions to save selected character and and opponent 
    function charactedSelected(name){
        selectedCharacter = name;
        //console.log(selectedCharacter);
       
    }

    function opponentSelected(name){
        selectedOpponent = name;
       
    }

    if($(".c1").on("click", function (){
        //name1.textContent = "Name:" + charachters[0].c1.name;
        $(".c1").attr("class","chosen")
        $(".c2").attr("class","enemies")
        $(".c3").attr("class","enemies")
        $(".c4").attr("class","enemies")
        $(".char").attr("class","charChose")
        // charactedSelected("c1");
        //****SAVE CHARACTER NAME TO selectedCharacter VARIABLE */
        selectedCharacter = charachters[0].c1.name;
    }));

    console.log(selectedCharacter);
    
    if($(".c2").on("click", function (){
        //name2.textContent = "Name:" + charachters[0].c2.name;
        $(".c1").attr("class","enemies")
        $(".c2").attr("class","chosen")
        $(".c3").attr("class","enemies")
        $(".c4").attr("class","enemies")
        $(".char").attr("class","charChose")
    }));
    
    if($(".c3").on("click", function (){
        //name3.textContent = "Name:" + charachters[0].c3.name;
        $(".c1").attr("class","enemies")
        $(".c2").attr("class","enemies")
        $(".c3").attr("class","chosen")
        $(".c4").attr("class","enemies")
        $(".char").attr("class","charChose")
    }));
    
    if($(".c4").on("click", function (){
        //name4.textContent = "Name:" + charachters[0].c4.name;
        $(".c1").attr("class","enemies")
        $(".c2").attr("class","enemies")
        $(".c3").attr("class","enemies")
        $(".c4").attr("class","chosen")
        $(".char").attr("class","charChose")
    }));



    if($(".e1").on("click", function (){
        $(".e1").attr("class","chosenEnemy")
        $(".e2").attr("class","enemies")
        $(".e3").attr("class","enemies")
        $(".e4").attr("class","enemies")
        $(".opp").attr("class","charChose")
    }));
    
    if($(".e2").on("click", function (){
        $(".e1").attr("class","enemies")
        $(".e2").attr("class","chosenEnemy")
        $(".e3").attr("class","enemies")
        $(".e4").attr("class","enemies")
        $(".opp").attr("class","charChose")
    }));
    
    if($(".e3").on("click", function (){
        $(".e1").attr("class","enemies")
        $(".e2").attr("class","enemies")
        $(".e3").attr("class","chosenEnemy")
        $(".e4").attr("class","enemies")
        $(".opp").attr("class","charChose")
    }));
    
    if($(".e4").on("click", function (){
        $(".e1").attr("class","enemies")
        $(".e2").attr("class","enemies")
        $(".e3").attr("class","enemies")
        $(".e4").attr("class","chosenEnemy")
        $(".opp").attr("class","charChose")

    }));

    console.log(selectedCharacter);
  



    function characterAttack(id){
       if(id== "c1"){
        enemies[0].c1.health -= 10;
        charachters[0].c1.attackP += charachters[0].c1.attackP;
       }
       else if(id == "c2"){
        enemies[0].c2.health -= 10;
        charachters[0].c2.attackP += charachters[0].c3.attackP;
       }
       else if(id == "c3"){
        enemies[0].c3.health -= 10;
        charachters[0].c3.attackP += charachters[0].c1.attackP;
       }
       else if(id == "c4"){
        enemies[0].c4.health -= 10;
        charachters[0].c4.attackP += charachters[0].c4.attackP;
       }

    }

     
//Need to work on///////
    function counterAttack(id){
        if(id=="e1"){
            charachters[0].e1.health -= 10;
           }
           else if(id == "e2"){
            charachters[0].e2.health -= 10;
           }
           else if(id == "e3"){
            charachters[0].e3.health -= 10;
           }
           else if(id == "e4"){
            charachters[0].e4.health -= 10;
           }
    }

    console.log(charachters[0].c1.attackP);

    //characterAttack();



    


//selectCharacter();
//selectOpponent();

})

