var charChosen;
//array of objects created for characters
var charachters = [{
    "c1":{
        name: "Collinsworth", health: 120, attackP: 12,
    },
    "c2":{
        name: "Mason", health: 200, attackP: 10,
    },
    "c3":{
        name: "Rodgers", health: 150, attackP: 15,
    },
    "c4":{
        name: "Adams", health: 110, attackP: 14,
    }
}];
//array of objects created for enemies 
var enemies = [{
    "e1":{
        name: "Mack", health: 150, counterAttackP: 10,
    },
    "e2":{
        name: "Meyers", health: 200, counterAttackP: 10,
    },
    "e3":{
        name: "Bates", health: 130, counterAttackP: 10,
    },
    "e4":{
        name: "Lecter", health: 105, counterAttackP: 10,
    }
}];

console.log("CHARACTERS:"+charachters);
console.log("ENEMIES:"+enemies);

var characterChosen;
var opponentChosen;

$("#win").hide();

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
    $("#attack_button").hide();
    $("#counterAttackMessage").hide();

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
        $("#attack_button").show();
    }));

    
    if($(".e2").on("click", function (){
        $(".e1").attr("class","enemies")
        $(".e2").attr("class","chosenEnemy")
        $(".e3").attr("class","enemies")
        $(".e4").attr("class","enemies")
        $(".opp").attr("class","charChose")
        $("#attack_button").show();
    }));
    
    if($(".e3").on("click", function (){
        $(".e1").attr("class","enemies")
        $(".e2").attr("class","enemies")
        $(".e3").attr("class","chosenEnemy")
        $(".e4").attr("class","enemies")
        $(".opp").attr("class","charChose")
        $("#attack_button").show();
    }));
    
    if($(".e4").on("click", function (){
        $(".e1").attr("class","enemies")
        $(".e2").attr("class","enemies")
        $(".e3").attr("class","enemies")
        $(".e4").attr("class","chosenEnemy")
        $(".opp").attr("class","charChose")
        $("#attack_button").show();

    }));
    
  


    //this function attacks the opponent and decreases their health by the according character attack power
    
    function characterAttack(id){
        //Enemy 1
            //console.log(i);
            if(id == "c1"){
                //e1
                enemies[0].e1.health -= charachters[0].c1.attackP;
                charHealth = enemies[0].e1.health;
                eHealth1.textContent = "Health:" + charHealth;
                //e2
                enemies[0].e2.health -= charachters[0].c1.attackP;;
                charHealth = enemies[0].e2.health;
                eHealth2.textContent = "Health:" + charHealth;
                //e3
                enemies[0].e3.health -= charachters[0].c1.attackP;;
                charHealth = enemies[0].e3.health;
                eHealth3.textContent = "Health:" + charHealth;
                //e4
                enemies[0].e4.health -= charachters[0].c1.attackP;;
                charHealth = enemies[0].e4.health;
                eHealth4.textContent = "Health:" + charHealth;

                //Shows counter attack message
                $("#counterAttackMessage").show();
                //opponent loses 10 health
                charachters[0].c1.health -= 10;
                charHealth = charachters[0].c1.health;
                health1.textContent = "Health:" + charHealth;

                //characters attack power doubles
                charachters[0].c1.attackP += charachters[0].c1.attackP;
            }
            if(id == "c2"){
                //e1
                enemies[0].e1.health -= charachters[0].c2.attackP;
                charHealth = enemies[0].e1.health;
                eHealth1.textContent = "Health:" + charHealth;
                //e2
                enemies[0].e2.health -= charachters[0].c2.attackP;;
                charHealth = enemies[0].e2.health;
                eHealth2.textContent = "Health:" + charHealth;
                //e3
                enemies[0].e3.health -= charachters[0].c2.attackP;;
                charHealth = enemies[0].e3.health;
                eHealth3.textContent = "Health:" + charHealth;
                //e4
                enemies[0].e4.health -= charachters[0].c2.attackP;;
                charHealth = enemies[0].e4.health;
                eHealth4.textContent = "Health:" + charHealth;

                //Shows counter attack message
                $("#counterAttackMessage").show();
                //opponent loses 10 health
                charachters[0].c2.health -= 10;
                charHealth = charachters[0].c2.health;
                health2.textContent = "Health:" + charHealth;

                //characters attack power doubles
                charachters[0].c2.attackP += charachters[0].c2.attackP;
            }
            if(id == "c3"){
                //e3
                enemies[0].e1.health -= charachters[0].c3.attackP;
                charHealth = enemies[0].e1.health;
                eHealth1.textContent = "Health:" + charHealth;
                //e2
                enemies[0].e2.health -= charachters[0].c3.attackP;;
                charHealth = enemies[0].e2.health;
                eHealth2.textContent = "Health:" + charHealth;
                //e3
                enemies[0].e3.health -= charachters[0].c3.attackP;;
                charHealth = enemies[0].e3.health;
                eHealth3.textContent = "Health:" + charHealth;
                //e4
                enemies[0].e4.health -= charachters[0].c3.attackP;;
                charHealth = enemies[0].e4.health;
                eHealth4.textContent = "Health:" + charHealth;

                //Shows counter attack message
                $("#counterAttackMessage").show();
                //opponent loses 10 health
                charachters[0].c3.health -= 10;
                charHealth = charachters[0].c3.health;
                health3.textContent = "Health:" + charHealth;

                //characters attack power doubles
                charachters[0].c3.attackP += charachters[0].c3.attackP;
            }
            if(id == "c4"){
                //e1
                enemies[0].e1.health -= charachters[0].c4.attackP;
                charHealth = enemies[0].e1.health;
                eHealth1.textContent = "Health:" + charHealth;
                //e2
                enemies[0].e2.health -= charachters[0].c4.attackP;;
                charHealth = enemies[0].e2.health;
                eHealth2.textContent = "Health:" + charHealth;
                //e3
                enemies[0].e3.health -= charachters[0].c4.attackP;;
                charHealth = enemies[0].e3.health;
                eHealth3.textContent = "Health:" + charHealth;
                //e4
                enemies[0].e4.health -= charachters[0].c4.attackP;;
                charHealth = enemies[0].e4.health;
                eHealth4.textContent = "Health:" + charHealth;

                //Shows counter attack message
                $("#counterAttackMessage").show();
                //opponent loses 10 health
                charachters[0].c4.health -= 10;
                charHealth = charachters[0].c4.health;
                health4.textContent = "Health:" + charHealth;

                //characters attack power doubles
                charachters[0].c4.attackP += charachters[0].c4.attackP;
            }
            
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
        var counterAttack = ["Collinsworth","Mason",];
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
    $("#lecter").hide();
    $("#meyers").hide();
    $("#bates").hide();
    $("#collinsworth").hide();
    $("#rodgers").hide();
    $("#crosby").hide();
    $("#adams").hide();


    //Characters
    if($(".c1").on("click", function(){
        $("#collinsworth").show();
    }))
    if($(".c2").on("click", function(){
        $("#crosby").show();
    }))
    if($(".c3").on("click", function(){
        $("#rodgers").show();
    }))
    if($(".c4").on("click", function(){
        $("#adams").show();
    }))
    //Enemies
    if($(".e1").on("click", function(){
        $("#mack").show();
    }))
    if($(".e2").on("click", function(){
        $("#meyers").show();
    }))
    if($(".e3").on("click", function(){
        $("#bates").show();
    }))
    if($(".e4").on("click", function(){
        $("#lecter").show();
    }))



    
    
    // $("#charcter2").on("click", function(){
    //     characterAttack("c1");
    // })

    function fade(){
        var interval = $("#attackDiv").html("<h2>" + "Click Your Character to Attack!" + "</h2>");
        interval.animate({ opacity: "1" });
        interval.animate({ opacity: "0.9" });
        interval.animate({ opacity: "0.8" });
        interval.animate({ opacity: "0.7" });
        interval.animate({ opacity: "0.5" });
        interval.animate({ opacity: "0.3" });
        interval.animate({ opacity: "0.0" });
        $("#charcter2").on("click", function(){

        })
    }
    

    //characterAttack();
    var test = 0;
    //var health;
    //console.log(charachters[0].e1.health);
    
      $(document).one("click", "#attack_button", function(){ 
        fade();
        $("#charcter1").on("click", function(){
            characterAttack("c1");
            if(enemies[0].e1.health < 0){
                $("#win").show();
                setInterval(confirm("YOU WIN! Choose a new character!"),2000);
                if(confirm=true){
                    location.reload();
                }
            }
            else if(enemies[0].e2.health < 0){
                $("#win").show();
                setInterval(confirm("YOU WIN! Choose a new character!"),2000);
                if(confirm=true){
                    location.reload();
                }
            }
            else if(enemies[0].e3.health < 0){
                $("#win").show();
                setInterval(confirm("YOU WIN! Choose a new character!"),2000);
                if(confirm=true){
                    location.reload();
                }
            }
            else if(enemies[0].e4.health < 0){
                $("#win").show();
                setInterval(confirm("YOU WIN! Choose a new character!"),2000);
                if(confirm=true){
                    location.reload();
                }
            }
//LOSE CASE
            characterAttack("c1");
            if(charachters[0].c1.health < 0){
                setInterval(confirm("YOU LOSE! Choose a new character!"),2000);
                if(confirm=true){
                    location.reload();
                }
            }
            else if(charachters[0].c2.health < 0){
                setInterval(confirm("YOU LOSE! Choose a new character!"),2000);
                if(confirm=true){
                    location.reload();
                }
            }
            else if(charachters[0].c3.health < 0){
                setInterval(confirm("YOU LOSE! Choose a new character!"),2000);
                if(confirm=true){
                    location.reload();
                }
            }
            if(charachters[0].c4.health < 0){
                setInterval(confirm("YOU LOSE! Choose a new character!"),2000);
                if(confirm=true){
                    location.reload();
                }
            }
        
        })
        $("#charcter2").on("click", function(){
            characterAttack("c2");
            if(enemies[0].e1.health < 0){
                $("#win").show();
                setInterval(confirm("YOU WIN! Choose a new character!"),2000);
                if(confirm=true){
                    
                }
            }
            else if(enemies[0].e2.health < 0){
                $("#win").show();
                setInterval(confirm("YOU WIN! Choose a new character!"),2000);
                if(confirm=true){
                    location.reload();
                }
            }
            else if(enemies[0].e3.health < 0){
                $("#win").show();
                setInterval(confirm("YOU WIN! Choose a new character!"),2000);
                if(confirm=true){
                    location.reload();
                }
            }
            else if(enemies[0].e4.health < 0){
                $("#win").show();
                setInterval(confirm("YOU WIN! Choose a new character!"),2000);
                if(confirm=true){
                    location.reload();
                }
            }
//LOSE CASE
            characterAttack("c1");
            if(charachters[0].c1.health < 0){
                setInterval(confirm("YOU LOSE! Choose a new character!"),2000);
                if(confirm=true){
                    location.reload();
                }
            }
            else if(charachters[0].c2.health < 0){
                setInterval(confirm("YOU LOSE! Choose a new character!"),2000);
                if(confirm=true){
                    location.reload();
                }
            }
            else if(charachters[0].c3.health < 0){
                setInterval(confirm("YOU LOSE! Choose a new character!"),2000);
                if(confirm=true){
                    location.reload();
                }
            }
            if(charachters[0].c4.health < 0){
                setInterval(confirm("YOU LOSE! Choose a new character!"),2000);
                if(confirm=true){
                    location.reload();
                }
            }
        })
        $("#charcter3").on("click", function(){
            characterAttack("c3");
            if(enemies[0].e1.health < 0){
                $("#win").show();
                setInterval(confirm("YOU WIN! Choose a new character!"),2000);
                if(confirm=true){
                    
                }
            }
            else if(enemies[0].e2.health < 0){
                $("#win").show();
                setInterval(confirm("YOU WIN! Choose a new character!"),2000);
                if(confirm=true){
                    location.reload();
                }
            }
            else if(enemies[0].e3.health < 0){
                $("#win").show();
                setInterval(confirm("YOU WIN! Choose a new character!"),2000);
                if(confirm=true){
                    location.reload();
                }
            }
            else if(enemies[0].e4.health < 0){
                $("#win").show();
                setInterval(confirm("YOU WIN! Choose a new character!"),2000);
                if(confirm=true){
                    location.reload();
                }
            }
//LOSE CASE
            characterAttack("c1");
            if(charachters[0].c1.health < 0){
                setInterval(confirm("YOU LOSE! Choose a new character!"),2000);
                if(confirm=true){
                    location.reload();
                }
            }
            else if(charachters[0].c2.health < 0){
                setInterval(confirm("YOU LOSE! Choose a new character!"),2000);
                if(confirm=true){
                    location.reload();
                }
            }
            else if(charachters[0].c3.health < 0){
                setInterval(confirm("YOU LOSE! Choose a new character!"),2000);
                if(confirm=true){
                    location.reload();
                }
            }
            if(charachters[0].c4.health < 0){
                setInterval(confirm("YOU LOSE! Choose a new character!"),2000);
                if(confirm=true){
                    location.reload();
                }
            }
        })
        $("#charcter4").on("click", function(){
            characterAttack("c4");
            if(enemies[0].e1.health < 0){
                $("#win").show();
                setInterval(confirm("YOU WIN! Choose a new character!"),2000);
                if(confirm=true){
                    
                }
            }
            else if(enemies[0].e2.health < 0){
                $("#win").show();
                setInterval(confirm("YOU WIN! Choose a new character!"),2000);
                if(confirm=true){
                    location.reload();
                }
            }
            else if(enemies[0].e3.health < 0){
                $("#win").show();
                setInterval(confirm("YOU WIN! Choose a new character!"),2000);
                if(confirm=true){
                    location.reload();
                }
            }
            else if(enemies[0].e4.health < 0){
                $("#win").show();
                setInterval(confirm("YOU WIN! Choose a new character!"),2000);
                if(confirm=true){
                    location.reload();
                }
            }
//LOSE CASE
            characterAttack("c1");
            if(charachters[0].c1.health < 0){
                setInterval(confirm("YOU LOSE! Choose a new character!"),2000);
                if(confirm=true){
                    location.reload();
                }
            }
            else if(charachters[0].c2.health < 0){
                setInterval(confirm("YOU LOSE! Choose a new character!"),2000);
                if(confirm=true){
                    location.reload();
                }
            }
            else if(charachters[0].c3.health < 0){
                setInterval(confirm("YOU LOSE! Choose a new character!"),2000);
                if(confirm=true){
                    location.reload();
                }
            }
            if(charachters[0].c4.health < 0){
                setInterval(confirm("YOU LOSE! Choose a new character!"),2000);
                if(confirm=true){
                    location.reload();
                }
            }
        })
               

    })



    //console.log(characterAttack("e2"));
    

    



    


//selectCharacter();
//selectOpponent();

})

