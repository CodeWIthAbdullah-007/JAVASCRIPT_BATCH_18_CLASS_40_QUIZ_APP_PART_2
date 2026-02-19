import { htmlData, cssData, jsData } from "./data.js";
let htmlBtn = document.getElementById('htmlBtn');
let cssBtn = document.getElementById('cssBtn');
let jsBtn = document.getElementById('jsBtn');
let quizArray;
let quest = document.getElementById('quest');
let labelA = document.getElementById('labelA');
let labelB = document.getElementById('labelB');
let labelC = document.getElementById('labelC');
let labelD = document.getElementById('labelD');
let nextBtn = document.getElementById('nextBtn');
let inp = document.getElementsByTagName('input');
let selectedOpt = '';
let index = 0;
let score = 0;
let marks = 0;
htmlBtn?.addEventListener('click', function () {
    localStorage.setItem('selectedQuiz', 'html');
    location.pathname = './quiz.html';
});
cssBtn?.addEventListener('click', function () {
    localStorage.setItem('selectedQuiz', 'css')
    location.pathname = './quiz.html';
});
jsBtn?.addEventListener('click', function () {
    localStorage.setItem('selectedQuiz', 'js')
    location.pathname = './quiz.html';
});
let startQuiz = () => {
    let selectedQuiz = localStorage.getItem('selectedQuiz');
    //    console.log(selectedQuiz);
    if (selectedQuiz === 'html') {
        quizArray = htmlData;
    } else if (selectedQuiz === 'css') {
        quizArray = cssData;
    } else if (selectedQuiz === 'js') {
        quizArray = jsData;
    };
    let showQuestion = () => {
        quest.innerHTML = quizArray[index].question;
        labelA.textContent = quizArray[index].A;
        labelB.textContent = quizArray[index].B;
        labelC.textContent = quizArray[index].C;
        labelD.textContent = quizArray[index].D;
    };
    showQuestion();
    nextBtn.addEventListener('click', () => {
        for (let i = 0; i < inp.length; i++) {
            if (inp[i].type === 'radio' && inp[i].name === 'option' && inp[i].checked) {
                // console.log('inp[i]',inp[i])
                // console.log('inp[i].checked',inp[i].checked);
                console.log('inp[i].value', inp[i].value);

                inp[i].value = selectedOpt;

            }
        };
        index++;
        console.log('selectedOpt', selectedOpt);
        if (selectedOpt === quizArray[index].answer) {
            score++;
            marks += 10;
        };
        if (selectedOpt !== '') {
            alert('plz select an option');
            return;
        };
    })
};
if (location.pathname.endsWith('quiz.html')) {
    startQuiz()
}

