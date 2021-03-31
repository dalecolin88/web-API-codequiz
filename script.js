var container = document.querySelector(".container")
container.append

var questions = [
    {
    promt: "inside which element do we put the javascript?\n(1) js\n\ (2) scripting\n (3) Script",
    answer: "3"
    },
    {
    prompt: "Which of these tools can you use to ensure code qulaity?\n(1) angular\n\ (2)jQurey\n (3) Eslint",
    answer: "3"
    },

    {
    prompt: "Is it possible to nest functions in Javascript?\n (1)Yes\n (2) No",
    answer: "1"
    },

    {
    prompt: "Which of the following is the client side JS object?\n (1)FileUpload\n (2)object\n (3)boolean",
    answer: "1"
    },
    {
    prompt: "which of the following is used to declar a variable in js?\n (1)V/n (2)Var\n (3)ver",
    answer: "2"
    }
                

]
var score = 0

for(var i=0; i < questions.length; i++){
    var comment = window.prompt(questions[i].prompt)
    if(comment == questions[i].answer){
        score++;
        alert("You're Right!");}
        else {
        alert("You're Wrong!");
        }
        

    } 

