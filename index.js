let BasicCard = require("./BasicCard");
let ClozeCard = require("./ClozeCard");
let questionsURL = require("./Questions");
var inquirer = require("inquirer");
let ClozedCardQuestions = questionsURL.ClozedCardQuestions;
let index = 0;
let BasicCardQuestions = questionsURL.BasicCardQuestions;

//this function runs when the page load
function start() {
    index = 0;
    inquirer.prompt([{
        type: "list",
        name: "doingWhat",
        message: "Select an option",
        choices: ["BasicCard", "ClozeCard"]
    }]).then(function (user) {

        // If the user guesses the password...
        if (user.doingWhat === "ClozeCard") {
            callCloze();
        } else {
            callBasic()

        }
    });
}

//calls the clozedCard
function callCloze() {
    if (index < ClozedCardQuestions.length) {

        let text = ClozedCardQuestions[index].text;
        let cloze = ClozedCardQuestions[index].cloze;
        questionNo = index + 1;
        let question = ClozeCard(text, cloze);
        console.log("\n Question " + questionNo + " : " + question.partial);

        setTimeout(function () {
            console.log("Answer: " + question.cloze);
            console.log("Full Text: " + question.fullText);
            setTimeout(function () {
                //increament the counter for the cloze Card questions in Question.js 
                index++;
                callCloze();
            }, 2000);
        }, 5000);


    } else {
        console.log('End of Clozed Card Questions');
        console.log('====================================');
        start();
    }
}

//calls the BasicCard
function callBasic() {
    if (index < BasicCardQuestions.length) {

        let front = BasicCardQuestions[index].front;
        let back = BasicCardQuestions[index].back;
        questionNo = index + 1;
        let question = BasicCard(front, back);
        console.log("\n Question " + questionNo + " : " + question.front);
        setTimeout(function () {
            console.log("Answer: " + question.back);
            setTimeout(function () {
                //increament the counter for the Basic Card questions in Question.js 
                index++;
                //recursive call
                callBasic();
            }, 2000);
        }, 5000);
    } else {
        console.log('End of Basic Card Questions');
        console.log('====================================');
        start();
    }
}
//call the start function on page load
start();