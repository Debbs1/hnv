const container = document.getElementById('container');
const score  = document.getElementById('score');
const scoreText = document.getElementById('score-text');
const scoreNumber = document.getElementById('score-number');
const questionContainer = document.getElementById('question-container');
const questionElement = document.getElementById('question');
const answerBtn = document.getElementById('answer-btn');
const answers = document.querySelectorAll('.btn');
const startBtn = document.getElementById('start-btn');
const nextBtn = document.getElementById('next-btn');
const retryBtn = document.getElementById('retry-btn');
let shuffleQuestions, index

startBtn.addEventListener('click', startGame);
function startGame(){
	startBtn.classList.add('hide')
	score.classList.remove('hide')
	questionContainer.classList.remove('hide')
	nextBtn.classList.remove('hide')
	shuffleQuestions = questions.sort(() => Math.random () -.5)
	index= 0
	nextQuestion();
};

function nextQuestion(){
	showQuestion(shuffleQuestions[index])

function showQuestion(question){
	questionElement.innertext = question.question
}

}
function selectAns (){}


const question = [
    {
        question: "Who is Captain America's love interest?",
        answers: [
        {text:'Natasha', correct: false},
        {text:'Peggy', correct: true},
        {text:'Jane', correct: false},
        {text:'Tony', correct: false}]
        
    },

    {
        question: "Why did Thanos want to destroy half of the world?",
        answers: [
        {text:'fun', correct: false},
        {text:'revenge', correct: false},
        {text:'peace', correct: true},
        {text:'pride', correct: false}]
        
    },

    {
        question: "What is the name of the racoon in guardians of the galaxy?",
        answers: [
        {text:'Rocket', correct: true},
        {text:'Bradley', correct: false},
        {text:'Groot', correct: false},
        {text:'StarLord', correct: false}]
        
    },

    {
        question: "Who is the odd one out here?",
        answers: [
        {texxt:'Nebula', correct: false},
        {text:'Hulk', correct: false},
        {text:'Fury', correct: false},
        {text:'Batman', correct: true}]
        
    },

    {
        question: "What is the name of Thor's hammer?",
        answers: [
        {text:'Morgenstern', correct: false},
        {text:'Mjolnir', correct: true},
        {text:'Odin', correct: false},
        {text:'Nameless', correct: false}]
        
    }
    ];