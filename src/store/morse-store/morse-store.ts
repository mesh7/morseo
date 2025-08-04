import { defineStore } from 'pinia';
import { ref } from 'vue';
 import wordList from '../../assets/word-list/words.json'

// import { License, Phonetics, SearchedWord } from '../types/wordsType'

export const useMorseStore = defineStore('morsestore', () => {
  const searchWord = ref('');
   
  const pickRandomWord = () => {
    const morseWordArray =  wordList.morseword;
    const randomWordIndex = Math.round(Math.random() * morseWordArray.length);
    return morseWordArray[randomWordIndex];
  }

  const searchResponse = ref({});

  return {
    pickRandomWord,
    searchWord,
    searchResponse,
  }
})