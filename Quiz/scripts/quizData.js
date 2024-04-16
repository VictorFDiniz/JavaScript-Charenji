const quizData = [
  {
    question: 'Qual animal é o mais rápido do mundo?',
    a: 'Tartaruga',
    b: 'Leão',
    c: 'Guepardo',
    d: 'Barata',
    correta: 'Guepardo'
  },
  {
    question: 'Qual é a capital do Brasil?',
    a: 'São Paulo',
    b: 'Brasília',
    c: 'Rio de Janeiro',
    d: 'Belo Horizonte',
    correta: 'Brasília'
  },
  {
    question: 'Qual é o maior planeta do Sistema Solar?',
    a: 'Júpiter',
    b: 'Terra',
    c: 'Saturno',
    d: 'Marte',
    correta: 'Júpiter'
  },
  {
    question: 'Quem pintou a Mona Lisa?',
    a: 'Pablo Picasso',
    b: 'Leonardo da Vinci',
    c: 'Vincent van Gogh',
    d: 'Michelangelo',
    correta: 'Leonardo da Vinci'
  }
];

let currentQuiz = 0

const clickableDivs = document.querySelectorAll('.clickable')
const question_text = document.getElementById('question_text')
const a_text = document.getElementById('a_text');
const b_text = document.getElementById('b_text');
const c_text = document.getElementById('c_text');
const d_text = document.getElementById('d_text');

loadQuiz()

function loadQuiz() {

const currentQuizData = quizData[currentQuiz]

question_text.textContent = currentQuizData.question;
a_text.textContent = currentQuizData.a
b_text.textContent = currentQuizData.b
c_text.textContent = currentQuizData.c 
d_text.textContent = currentQuizData.d 

}

clickableDivs.forEach(function(clickable) {
  clickable.addEventListener("click", () => {
    currentQuiz++;

  if (currentQuiz < quizData.length) {
    loadQuiz()
  } else {
    alert("Owari!")
  }
  })
})