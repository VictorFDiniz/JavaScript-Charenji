const quizData = [
  {
    question: 'Qual animal é conhecido por sua capacidade de mudar de cor?',
    a: 'Cavalo-marinho',
    b: 'Camaleão',
    c: 'Tartaruga',
    d: 'Elefante',
    correct: 'b'
  },
  {
    question: 'Qual é o maior mamífero do mundo?',
    a: 'Elefante Africano',
    b: 'Baleia Azul',
    c: 'Girafa',
    d: 'Urso Polar',
    correct: 'b'
  },
  {
    question: 'Qual animal é famoso por sua longa migração anual?',
    a: 'Pinguim Imperador',
    b: 'Tartaruga Marinha',
    c: 'Salmão',
    d: 'Gnu',
    correct: 'd'
  },
  {
    question: 'Qual animal é conhecido por sua inteligência e uso de ferramentas?',
    a: 'Golfinho',
    b: 'Cachorro',
    c: 'Corvo',
    d: 'Gato',
    correct: 'c'
  },
  {
    question: 'Qual é o único mamífero capaz de voar?',
    a: 'Morcego',
    b: 'Esquilo-voador',
    c: 'Gavião',
    d: 'Avestruz',
    correct: 'a'
  },
  {
    question: 'Qual é o animal terrestre mais rápido do mundo?',
    a: 'Tartaruga',
    b: 'Leão',
    c: 'Guepardo',
    d: 'Lebre',
    correct: 'c'
  },
  {
    question: 'Qual animal é conhecido por sua capacidade de viver tanto na água quanto em terra?',
    a: 'Sapo',
    b: 'Golfinho',
    c: 'Lontra',
    d: 'Crocodilo',
    correct: 'a'
  },
  {
    question: 'Qual é o maior pássaro do mundo?',
    a: 'Águia',
    b: 'Avestruz',
    c: 'Pinguim',
    d: 'Condor',
    correct: 'b'
  },
  {
    question: 'Qual animal é famoso por sua preguiça e lentidão?',
    a: 'Lesma',
    b: 'Koala',
    c: 'Bicho-preguiça',
    d: 'Tartaruga',
    correct: 'c'
  },
  {
    question: 'Qual é o menor mamífero do mundo?',
    a: 'Musaranho-pigmeu',
    b: 'Camundongo',
    c: 'Coelho',
    d: 'Hámster',
    correct: 'a'
  },
  {
    question: 'Qual animal é conhecido por sua memória excepcional?',
    a: 'Gato',
    b: 'Cachorro',
    c: 'Elefante',
    d: 'Papagaio',
    correct: 'c'
  },
  {
    question: 'Qual é o maior réptil do mundo?',
    a: 'Jacaré',
    b: 'Crocodilo de água salgada',
    c: 'Iguana',
    d: 'Jiboia',
    correct: 'b'
  },
  {
    question: 'Qual animal pode dormir em pé?',
    a: 'Cavalo',
    b: 'Cachorro',
    c: 'Gato',
    d: 'Porco',
    correct: 'a'
  },
  {
    question: 'Qual é o único mamífero que pode pôr ovos?',
    a: 'Ornitorrinco',
    b: 'Morcego',
    c: 'Canguru',
    d: 'Gorila',
    correct: 'a'
  },
  {
    question: 'Qual animal tem o maior tempo de gestação?',
    a: 'Cachorro',
    b: 'Gato',
    c: 'Elefante',
    d: 'Girafa',
    correct: 'c'
  }
];

let currentQuiz = 0
let score = 0

const clickableDivs = document.querySelectorAll('.clickable')
const question_text = document.getElementById('question_text')
const a_text = document.getElementById('a_text');
const b_text = document.getElementById('b_text');
const c_text = document.getElementById('c_text');
const d_text = document.getElementById('d_text');

function loadQuiz() {

const currentQuizData = quizData[currentQuiz]

question_text.textContent = currentQuizData.question;
a_text.textContent = currentQuizData.a
b_text.textContent = currentQuizData.b
c_text.textContent = currentQuizData.c 
d_text.textContent = currentQuizData.d 

}

clickableDivs.forEach(clickable => {
  clickable.addEventListener("click", () => {
    const selectedAnswer = clickable.getAttribute('data-answer');
    const correctAnswer = quizData[currentQuiz].correct;

    if (selectedAnswer === correctAnswer) {
      score++;
    }

    currentQuiz++;

    if (currentQuiz < quizData.length) {
      loadQuiz();
    } else {
      const totalQuestions = quizData.length;
      document.getElementById('quiz').innerHTML = `<h2>Você acertou ${score} de ${totalQuestions} questões.</h2>`;
    }
  });
});

loadQuiz();
