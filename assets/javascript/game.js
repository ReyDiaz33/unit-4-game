$(document).ready(function () {
    console.log("ready!");
    
    var losses = 0;
    var wins = 0;
    var totalScore = 0;
// I know this could be shortend but HEY it works lol
var goalNumber = Math.floor(Math.random() * 100);
console.log(goalNumber);

var random = Math.floor(Math.random() * 12);
console.log(random);

var random2 = Math.floor(Math.random() * 12);
console.log(random2);

var random3 = Math.floor(Math.random() * 12);
console.log(random3);

var random4 = Math.floor(Math.random() * 12);
console.log(random4);





    $("#goalsNumber").on("ready", function(){
        $("#goalsNumber").val(goalNumber);
        console.log($("#goalsNumber").val());
        goalNumber = goalNumber + parseInt($("#goalsNumber").val());
        $("#goalsNumber").text(goalNumber);
    });



   /* Psuedo coding
    - 4 crystals X
    - every crystal has a random number between 1 - 12 X*/


    // stone 1
    $("#infinityStone1").on("click", function () {
        $("#infinityStone1").val(random);
        console.log($("#infinityStone1").val());
        totalScore = totalScore + parseInt($("#infinityStone1").val());
        $("#totalScore").text(totalScore);
    })

    // stone 2
    $("#infinityStone2").on("click", function () {
        $("#infinityStone2").val(random2);
        console.log($("#infinityStone2").val());
        totalScore = totalScore + parseInt($("#infinityStone2").val());
        $("#totalScore").text(totalScore)
    })

    // stone 3
    $("#infinityStone3").on("click", function () {
        $("#infinityStone3").val(random3);
        console.log($("#infinityStone3").val());
        totalScore = totalScore + parseInt($("#infinityStone3").val());
        $("#totalScore").text(totalScore)
    });

    // stone 4
    $("#infinityStone4").on("click", function () {
        $("#infinityStone4").val(random4);
        console.log($("#infinityStone4").val());
        totalScore = totalScore + parseInt($("#infinityStone4").val());
        $("#totalScore").text(totalScore)
    })
    
    if(totalScore === goalNumber){
        alert("YOU COLLECTED THE STONES BEFORE THANOS AND SAVED US ALL!");
        wins++;
    }
    else{}

    if(totalScore > goalNumber){
        alert("THANOS HAS COLLECTED THE STONES AND HAS SNAPPED YOU INTO DUST!")
        losses++;
    }


    /*
    - a new radom number given to each crystal whether win or lose
    - clicking a crystal should add to previous click until total score
    - if less then goal number then continue.
    - if equal to goal number, increment win game reset 
    - if greater than goal number, increment loss game reset
    */

});