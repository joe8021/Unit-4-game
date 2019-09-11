var charChosen;
//array of objects created for characters
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
//array of objects created for enemies 
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

//Character 1 variables to access ids in HTML
var name1 = document.getElementById("c1Name");
var health1 = document.getElementById("c1Health")
var attackPower1 = document.getElementById("c1AttackPower")
var counterPower1 = document.getElementById("c1CounterPower")

//Character 2 variables to access ids in HTML
var name2 = document.getElementById("c2Name");
var health2 = document.getElementById("c2Health")
var attackPower2 = document.getElementById("c2AttackPower")
var counterPower2 = document.getElementById("c2CounterPower")

//Character 3 variables to access ids in HTML
var name3 = document.getElementById("c3Name");
var health3 = document.getElementById("c3Health")
var attackPower3 = document.getElementById("c3AttackPower")
var counterPower3 = document.getElementById("c3CounterPower")

//Character 4 variables to access ids in HTML
var name4 = document.getElementById("c4Name");
var health4 = document.getElementById("c4Health")
var attackPower4 = document.getElementById("c4AttackPower")
var counterPower4 = document.getElementById("c4CounterPower")



//Opponent 1 variables to access ids in HTML
var eName1 = document.getElementById("e1Name");
var eHealth1 = document.getElementById("e1Health")
var eCounterPower1 = document.getElementById("e1CounterPower")

//Opponent 2 variables to access ids in HTML
var eName2 = document.getElementById("e2Name");
var eHealth2 = document.getElementById("e2Health")
var eCounterPower2 = document.getElementById("e2CounterPower")

//Opponent 3 variables to access ids in HTML
var eName3 = document.getElementById("e3Name");
var eHealth3 = document.getElementById("e3Health")
var eCounterPower3 = document.getElementById("e3CounterPower")

//Opponent 4 variables to access ids in HTML
var eName4 = document.getElementById("e4Name");
var eHealth4 = document.getElementById("e4Health")
var eCounterPower4 = document.getElementById("e4CounterPower")

//variables to store which character and opponent were chosen



$(document).ready(function (){
    //pulling Character details from the array of objects and displaying them on 
    //the HTML page
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

    //pulling opponenet details from the array of objects and displaying them on 
    //the HTML page
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


   

    //console.log("Char: " + selectedCharacter);
    var selectedCharacter = "";
    

    //When object clicked on...its' class and hide. 
    if($(".c1").on("click", function (){
        $(".c1").attr("class","chosen")
        //$(".c2").attr("class","enemies")
        $(".c2").hide();
        $(".c3").hide();
        $(".c4").hide();
        $(".char").hide();
        selectedCharacter = charachters[0].c1.name;
        //console.log(selectedCharacter);
    }));

   // console.log("Char: " + selectedCharacter);
    $(".button-2").hide();
    $("#counterAttackMessage").hide();


    //If object is clicked, show/hide elements and save which character is chosen
    if($(".c2").on("click", function (){
        $(".c1").attr("class","enemies")
        $(".c2").attr("class","chosen")
        $(".c3").attr("class","enemies")
        $(".c4").attr("class","enemies")
        $(".char").attr("class","charChose")

    }));
    
    if($(".c3").on("click", function (){
        $(".c1").attr("class","enemies")
        $(".c2").attr("class","enemies")
        $(".c3").attr("class","chosen")
        $(".c4").attr("class","enemies")
        $(".char").attr("class","charChose")
    }));
    
    if($(".c4").on("click", function (){
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
        $(".button-2").show();
    }));

    
    if($(".e2").on("click", function (){
        $(".e1").attr("class","enemies")
        $(".e2").attr("class","chosenEnemy")
        $(".e3").attr("class","enemies")
        $(".e4").attr("class","enemies")
        $(".opp").attr("class","charChose")
        $(".button-2").show();
    }));
    
    if($(".e3").on("click", function (){
        $(".e1").attr("class","enemies")
        $(".e2").attr("class","enemies")
        $(".e3").attr("class","chosenEnemy")
        $(".e4").attr("class","enemies")
        $(".opp").attr("class","charChose")
        $(".button-2").show();
    }));
    
    if($(".e4").on("click", function (){
        $(".e1").attr("class","enemies")
        $(".e2").attr("class","enemies")
        $(".e3").attr("class","enemies")
        $(".e4").attr("class","chosenEnemy")
        $(".opp").attr("class","charChose")
        $(".button-2").show();

    }));

    //console.log("char: " + selectedCharacter);
  


    //this function attacks the opponent and decreases their health by 10
    function characterAttack(id){
     var charHealth = 0;
       if(id== "e1"){
        charHealth = enemies[0].e1.health;
        charHealth -= 10;
        eHealth1.textContent = "Health:" + charHealth;
       
       }
       if(id == "e2"){
        charHealth = enemies[0].e2.health;
        charHealth -= 10;
        
       }
       if(id == "e3"){
        charHealth = enemies[0].e3.health 
        charHealth -= 10;
        
       }
       if(id == "e4"){
        charHealth = enemies[0].e4.health 
        charHealth -= 10;
        
       }

       return charHealth;

    }


//THIS IS TO ADD POWER TO CHARACTERS POWER ATTACK********.//
    // charachters[0].c1.attackP += charachters[0].c1.attackP;
    // charachters[0].c2.attackP += charachters[0].c3.attackP;
    // charachters[0].c3.attackP += charachters[0].c1.attackP;
    // charachters[0].c4.attackP += charachters[0].c4.attackP;

    //characterAttack("e1");
    //console.log(enemies[0].e1.health);

     
//Need to work on///////
    function counterAttack(id){
        var oppAttack = 0;
        if(id=="c1"){
            oppAttack = charachters[0].c1.health 
            oppAttack -= 10;
           }
           else if(id == "c2"){
            oppAttack = charachters[0].c2.health 
            oppAttack -= 10;
           }
           else if(id == "c3"){
            oppAttack = charachters[0].c3.health 
            oppAttack -= 10;
           }
           else if(id == "c4"){
            oppAttack = charachters[0].c4.health 
            oppAttack -= 10;
           }

           return oppAttack;

           
    }

    $("#mack").hide();

    //counterAttack("c3");
    if($(".e1").on("click", function(){
        $("#mack").show();
    }))
    if($(".e2").on("click", function(){
        $("#mack").show();
    }))
    if($(".e3").on("click", function(){
        $("#mack").show();
    }))
    if($(".e3").on("click", function(){
        $("#mack").show();
    }))
    //FINSIH THESE
    

    //characterAttack();
    var test = 0;
    //var health;
    //console.log(charachters[0].e1.health);
    
      $(".button-2").on("click", function(){
        //characterAttack("e1")

        
        eHealth1.textContent = "Health:" + characterAttack("e1");
        
        eHealth2.textContent = "Health:" + characterAttack("e2");
        eHealth3.textContent = "Health:" + characterAttack("e3");
        eHealth4.textContent = "Health:" + characterAttack("e4");
        //update characters health
        $("#counterAttackMessage").show();
        health1.textContent = "Health:" + counterAttack("c1");
        health2.textContent = "Health:" + counterAttack("c2");
        health3.textContent = "Health:" + counterAttack("c3");
        health4.textContent = "Health:" + counterAttack("c4");       

    })


    //console.log(characterAttack("e2"));
    

    



    


//selectCharacter();
//selectOpponent();

})

