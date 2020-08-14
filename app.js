window.onload = function(){
    show(0)
}

let questions = [
    {
        id:1,
        question:"Which is the best teacher in Web and Mobile hybrid App Devolpment course?",
        answer: "Muhammad Ali Mughal",
        Options: [
            "Muhammad Ali Mughal",
            "Ghous Ahmed",
            "Basit Ahmed",
            "None of these"
        ]

    },
    {
        id:2,
        question:" HTML stand for?",
        answer: "Hyper Text Markup Language",
        Options: [
            "Hyper Text Markup Language",
            "Programming language",
            "Hyper Tention Markup language",
            "None of these"
        ]

    },
    {
        id:3,
        question:"What is the full form of RAM?",
        answer: "Random Access Memory",
        Options: [
            "Random Access Memory",
            "Randomely Access Memory",
            "Run Accept Memory",
            "None of these"
        ]

    },
    {
        id:4,
        question:"What is the full form of E-Mail?",
        answer: "Electronic Mail",
        Options: [
            "Electronic Mail",
            "Electric Mail",
            "Engine Mail",
            "None of these"
        ]

    },

];

let question_count = 0;
let point = 0;


function next(){
    let user_answer = document.querySelector("li.option.active").innerHTML;
    if(user_answer == questions[question_count].answer){
        point += 10;
        sessionStorage.setItem("points",point)
    }
    if(question_count == questions.length -1){
        sessionStorage.setItem("time", `${minutes} minutes and ${seconds} seconds`);
        clearInterval(mytime);
        location.href = "end.html";
        return;
    }
   
    question_count++;
    show(question_count);
}

function show(count){
    let question = document.getElementById("questions");
    // question.innerHTML = "<h2>" + questions[count].question + "</h2>"
    question.innerHTML =`
    <h2>Q${question_count+1}.${questions[count].question}</h2>
    <ul class="option_group">
    <li class="option">${questions[count].Options[0]}</li>
    <li class="option">${questions[count].Options[1]}</li>
    <li class="option">${questions[count].Options[2]}</li>
    <li class="option">${questions[count].Options[3]}</li>
    </ul> 
    
    `;
    toggleActive()
}


function toggleActive() {
    let option = document.querySelectorAll("li.option");
    for (let i = 0; i < option.length; i++) {
      option[i].onclick = function() {
        for (let i = 0; i < option.length; i++) {
          if (option[i].classList.contains("active")) {
            option[i].classList.remove("active");
          }
        }
        option[i].classList.add("active");
      };
    }
  }
  




















function submitForm(e){
    e.preventDefault();
    let name = document.forms["welcome_Form"]["name"].value;
    sessionStorage.setItem("name", name)
    location.href="quiz.html"
}