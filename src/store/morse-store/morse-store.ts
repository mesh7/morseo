import { defineStore } from 'pinia';
import { ref, type Ref } from 'vue';
import wordList from '../../assets/word-list/words.json';

export const useMorseStore = defineStore('morsestore', () => {
  const morseWord:Ref<String> = ref('');

  const morseWordArray:Ref<Array<String>> = ref([]);
   
  const pickRandomWord = (): void => {
    const morseWordList = wordList.morseword;
    const randomWordIndex = Math.round(Math.random() * morseWordList.length);
    morseWord.value = morseWordList[randomWordIndex];

    // Split the word into array elements
    morseWordArray.value = morseWord.value.split('');
  }

  return {
    pickRandomWord,
    morseWord,
    morseWordArray
  }
})