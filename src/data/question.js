import { reactive } from "vue"

const questions = reactive([
    {
      "question": "What is the capital of Japan?",
      "options": [
        {"id": 1, "text": "Seoul", "isCorrect": false},
        {"id": 2, "text": "Beijing", "isCorrect": false},
        {"id": 3, "text": "Tokyo", "isCorrect": true},
        {"id": 4, "text": "Bangkok", "isCorrect": false}
      ]
    },
    {
      "question": "Which element has the chemical symbol 'O'?",
      "options": [
        {"id": 1, "text": "Oxygen", "isCorrect": true},
        {"id": 2, "text": "Gold", "isCorrect": false},
        {"id": 3, "text": "Silver", "isCorrect": false},
        {"id": 4, "text": "Iron", "isCorrect": false}
      ]
    },
    {
      "question": "Who wrote 'Romeo and Juliet'?",
      "options": [
        {"id": 1, "text": "Charles Dickens", "isCorrect": false},
        {"id": 2, "text": "William Shakespeare", "isCorrect": true},
        {"id": 3, "text": "Jane Austen", "isCorrect": false},
        {"id": 4, "text": "Mark Twain", "isCorrect": false}
      ]
    },
    {
      "question": "What is the largest planet in our solar system?",
      "options": [
        {"id": 1, "text": "Venus", "isCorrect": false},
        {"id": 2, "text": "Earth", "isCorrect": false},
        {"id": 3, "text": "Jupiter", "isCorrect": true},
        {"id": 4, "text": "Mars", "isCorrect": false}
      ]
    },
    {
      "question": "Which continent is known as the 'Land of the Rising Sun'?",
      "options": [
        {"id": 1, "text": "Africa", "isCorrect": false},
        {"id": 2, "text": "Asia", "isCorrect": true},
        {"id": 3, "text": "Europe", "isCorrect": false},
        {"id": 4, "text": "South America", "isCorrect": false}
      ]
    },
    {
      "question": "What is the chemical symbol for gold?",
      "options": [
        {"id": 1, "text": "Au", "isCorrect": true},
        {"id": 2, "text": "Ag", "isCorrect": false},
        {"id": 3, "text": "Fe", "isCorrect": false},
        {"id": 4, "text": "Cu", "isCorrect": false}
      ]
    },
    {
      "question": "Which planet is known as the 'Red Planet'?",
      "options": [
        {"id": 1, "text": "Mars", "isCorrect": true},
        {"id": 2, "text": "Venus", "isCorrect": false},
        {"id": 3, "text": "Jupiter", "isCorrect": false},
        {"id": 4, "text": "Saturn", "isCorrect": false}
      ]
    },
    {
      "question": "Who painted the Mona Lisa?",
      "options": [
        {"id": 1, "text": "Vincent van Gogh", "isCorrect": false},
        {"id": 2, "text": "Leonardo da Vinci", "isCorrect": true},
        {"id": 3, "text": "Pablo Picasso", "isCorrect": false},
        {"id": 4, "text": "Michelangelo", "isCorrect": false}
      ],
    },
    {
      "question": "What is the currency of Japan?",
      "options": [
        {"id": 1, "text": "Yuan", "isCorrect": false},
        {"id": 2, "text": "Won", "isCorrect": false},
        {"id": 3, "text": "Ringgit", "isCorrect": false},
        {"id": 4, "text": "Yen", "isCorrect": true}
      ]
    },
    {
      "question": "Which planet is known as the 'Blue Planet'?",
      "options": [
        {"id": 1, "text": "Earth", "isCorrect": true},
        {"id": 2, "text": "Uranus", "isCorrect": false},
        {"id": 3, "text": "Neptune", "isCorrect": false},
        {"id": 4, "text": "Mercury", "isCorrect": false}
      ]
    }
  ])

  export {questions}
  