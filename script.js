(function () {

"use strict";

const searchButton = document.querySelector("[data-search]");
const inputTextElement = document.querySelector("[data-input]");
const wordTextElement = document.querySelector("[data-word]");
const wordTypeElem = document.querySelector("[data-wordType]");
const wordDefinition = document.querySelector("[data-definition]");
const sentenceExample = document.querySelector("[data-example]");
const h1 = document.querySelector("[data-header]");
const  dictionaryElements = document.querySelectorAll(".hidden");
const  words = [
    {
        dictionaryWord : "god",
        definition :"a spirit or being believed to control some part of the universe or life and often worshipped for doing so, or something that represents this spirit or being",
        example : "The site was named after a Norse god.",
        type : "noun",
        pronunciation : "\\ɡɑːd\\"
        
    },
    {
        dictionaryWord : "filter",
        definition : "a tool for selecting or removing a particular type of information.",
        example : "You can apply filters to capture the most relevant data",
        type : "noun",
        pronunciation : "/ˈfɪl.tɚ/"
    },
    {
        dictionaryWord : "exact",
        definition : "in great detail, or complete, correct, or true in every way:",
        example : "The exact distance is 1.838 metres.",
        type : "adjective",
        pronunciation : "/ɪɡˈzækt/"
    },
    {
        dictionaryWord : "risk",
        definition : "the possibility of something bad happening:",
        example : "In this business, the risks and the rewards are high.",
        type : "noun",
        pronunciation : "/rɪsk/"
    },
    {
        dictionaryWord : "helpless",
        definition : "unable to do anything to help yourself or anyone else:",
        example : "a helpless two-day-old baby",
        type : "adjective",
        pronunciation : "/ˈhelp.ləs/"
    },
    {
        dictionaryWord : "prospect",
        definition : "the possibility that something good might happen in the future:",
        example : "Is there any prospect of the weather improving?",
        type : "noun",
        pronunciation : "/ˈprɑː.spekt/"
    },
    {
        dictionaryWord : "repetition",
        definition : "he act of doing or saying something again:",
        example : "His books are full of repetition.",
        type : "noun",
        pronunciation : "/ˌrep.əˈtɪʃ.ən/"
    },
    {
        dictionaryWord : "elbow",
        definition : "the part in the middle of the arm where it bends, or the part of a piece of clothing that covers this area:",
        example : "I banged my elbow on the shelf.",
        type : "noun",
        pronunciation : "/ˈel.boʊ/"
    },
    {
        dictionaryWord : "theme",
        definition : "the main subject of a talk, book, film, etc.:",
        example : "The theme of loss runs through most of his novels",
        type : "noun",
        pronunciation : "/θiːm/"
    },
    {
        dictionaryWord : "force",
        definition : "physical, especially violent, strength, or power:",
        example : "The force of the wind had brought down a great many trees in the area.",
        type : "noun",
        pronunciation : "/fɔːrs/"
    },
]

function getUserInput(){
    return inputTextElement.value;
}

function clearInput(){
    inputTextElement.value = "";
}

function findWord(userWord){
    if ( !inputTextElement.value ){
        h1.textContent = "Please write a word first";
        return;
    }

    return words.filter((value) => value.dictionaryWord === userWord)
    
}

function displayWordInfo(word){

    wordTextElement.innerHTML = word[0].dictionaryWord;
    wordTypeElem.innerHTML = word[0].type + " " + word[0].pronunciation;
    wordDefinition.innerHTML = word[0].definition;
    sentenceExample.innerHTML = word[0].example;

    dictionaryElements.forEach(elem => {
        elem.classList.remove("hidden");
    })
    
}

function hideElements(){

    dictionaryElements.forEach(elem => {
        elem.classList.toggle("hidden");
    })
}

function searchWord(){
    let userWord = getUserInput();
    let word = findWord(userWord);
   
    if ( !word.length){
        h1.textContent = 'No such word';
        hideElements();
        clearInput();
        return;
    }
    h1.textContent = 'Dictionary App';
    clearInput();
    displayWordInfo(word);
    
}

searchButton.addEventListener("click",searchWord);

})();