import { defineStore } from 'pinia'
import { ref } from 'vue';

// import { License, Phonetics, SearchedWord } from '../types/wordsType'

export const useMorseStore = defineStore('morsestore', () => {
  const searchWord = ref('');

  // Function to generate 1000 random words
  const pickRandomWord = () => {
    var spaceKeyAudio = new Audio("");
      spaceKeyAudio.play();
  }

  const searchResponse = ref({});

  return {
    searchWord,
    searchResponse,
  }
})