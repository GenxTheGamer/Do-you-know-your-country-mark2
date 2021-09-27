var readlineSync = require("readline-sync");


const quest1 = {
    question: "What is capital of India? ",
    answer: "Delhi"
}

const quest2 = {
  question: "When is The Republic Day? ",
  answer: "26 January"
}

const quest3 = {
  question: "How many states are in India? ",
  answer: "29"
}


const leaderboardHighestScore = {
  name:"Vaibhav Vyas",
  score: "3"
}




let score = 0;

function question1(){
  const question = quest1.question;
  var askQuestion = readlineSync.question(question);
  if(askQuestion === quest1.answer){
    score +=1;
    console.log("Correct answer, you got 1 point");
  }else{
    console.log("Wrong answer :( . You obtained 0 points.")
  }
};


function question2(){
  const question = quest2.question;
  var askQuestion = readlineSync.question(question);
  if(askQuestion === quest2.answer){
    score +=1;
    console.log("Good work ! You obtained 1 point");
  }else{
    console.log("Wrong answer :( . You obtained 0 points.")
  }
};

function question3(){
  const question = quest3.question;
  var askQuestion = readlineSync.question(question);
  if(askQuestion === quest3.answer){
    score +=1;
    console.log("Good work ! You obtained 1 point");
  }else{
    console.log("Wrong answer :( . You obtained 0 points.")
  }
};


function calScore(score){
  console.log("Your Current Score is " + score);
}

function totalScore(score){
  console.log("Your Total score is " + score);
}

function showLeaderboard(){
  console.log("Currently Highest score is of " + leaderboardHighestScore.name + " with score of " + leaderboardHighestScore.score );
}



var q1 = question1();
calScore(score);
var q2 = question2();
calScore(score);
var q3 = question3();
totalScore(score);
showLeaderboard();

