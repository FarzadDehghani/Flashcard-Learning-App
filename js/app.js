// List of questions and answers
const flashcards = [
  { question: "What is the capital of France?", answer: "Paris" },
  { question: "What is 5 + 7?", answer: "12" },
  { question: "What is the largest planet?", answer: "Jupiter" },
  { question: "What is the boiling point of water?", answer: "100°C" },
  { question: "What is the square root of 64?", answer: "8" },
];

let currentCardIndex = 0;
let showingAnswer = false;

const cardContent = document.getElementById("card-content");
const flashcard = document.getElementById("flashcard");
const nextBtn = document.getElementById("next-btn");

// Display the question
function showQuestion() {
  const currentCard = flashcards[currentCardIndex];
  cardContent.textContent = currentCard.question;
  flashcard.classList.remove("flip");
  showingAnswer = false;
}

// Display the answer
function showAnswer() {
  const currentCard = flashcards[currentCardIndex];
  cardContent.textContent = currentCard.answer;
  flashcard.classList.add("flip");
  showingAnswer = true;
}

// Move to the next card
function nextCard() {
  currentCardIndex = (currentCardIndex + 1) % flashcards.length;
  showQuestion();
}

// Set up click event for the flashcard
flashcard.addEventListener("click", () => {
  if (showingAnswer) {
    showQuestion();
  } else {
    showAnswer();
  }
});

// Set up click event for the next button
nextBtn.addEventListener("click", nextCard);

// Show the first card
showQuestion();
