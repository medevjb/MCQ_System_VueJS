<script setup>

import {ref, reactive} from 'vue';
import {questions} from './data/question'

function getResult(){
  let score = 0;
  questions.map(question =>{
    if(question.answer!=null){
      const answerId =  question.options.find((idd)=>question.answer === idd.id)
      if(answerId.isCorrect === true){
        score++;
      }
    }
  })

  return score;
} 

const toggleResult = ref(false);


</script>

<template>
    <!-- {{ questions }} -->
<div class="parentdiv mt-5" v-for="(question, index) in questions" :key="index">
  <p>{{ index+1 }} {{ question.question }}</p>
  <ul>
    <li v-for="(option, optionIndex) in question.options" :key="optionIndex">
      <input type="radio" :name="'question_' + index" class="me-2" :value="option.id" v-model="question.answer">
      <span >{{ option.text }}</span>
    </li>
  </ul>
</div>

<h1 class="text-2xl my-5" v-show="toggVUEleResult">
  Your Score : {{ getResult() }} <br>
</h1>

<button class="p-3 bg-green-800 hover:bg-orange-500 mt-5" @click="toggleResult=true">Complete</button>



 
</template>

<style scoped>
.parentdiv li{
  list-style-type: none;
}
</style>
