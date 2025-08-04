import { defineStore } from 'pinia';
import { ref } from 'vue';
import wordList from '../../assets/word-list/words.json';

export const useMorseStore = defineStore('morsestore', () => {
  const morseWord = ref('');
   
  const pickRandomWord = () => {
    const morseWordArray =  wordList.morseword;
    const randomWordIndex = Math.round(Math.random() * morseWordArray.length);
    morseWord.value = morseWordArray[randomWordIndex];
  }

  return {
    pickRandomWord,
    morseWord,
  }
})