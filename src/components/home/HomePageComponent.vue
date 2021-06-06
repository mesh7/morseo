<template>
  <div class="home-component">
    <h1>-- --- .-. ... .</h1>
    <h2>You might have heard about the morse code, but do you know it</h2>
    <button class="button" @click="hello()">
      <div class="button-text">Get Started</div>
    </button>

    <input class="input" />
    <div id="output"></div>
  </div>
</template>

<script>
import "./HomePageComponent.scss";

export default {
  name: "HomePageComponent",
  methods: {
    created() {},
    hello() {
      console.log("hello");

      var output = document.getElementById("output"),
        pressed = {};

      //for knowing which key is pressed
      window.onkeydown = function (event) {
        if (pressed[event.which]) return;
        pressed[event.which] = event.timeStamp;
      };

      //for knowing how long the key is pressed
      window.onkeyup = function (event) {
        if (!pressed[event.which]) return;
        var duration = (event.timeStamp - pressed[event.which]) / 1000;
        output.innerHTML +=
          "<p>Key " +
          event.which +
          " was pressed for " +
          duration +
          " seconds</p>";
        pressed[event.which] = 0;
      };


    },

    validation() {},

    audio() {
      var spaceKeyAudio = new Audio("");
      spaceKeyAudio.play();
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="sass" scoped>
</style>
