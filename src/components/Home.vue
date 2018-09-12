<template>
  <div>
    <img alt="Vue logo" src="../assets/logo.png" :data-intro=textWrapper(text) >
    <h1>
      Hello
    </h1>
  </div>
</template>

<script>
// Imports
import introJS from 'intro.js'

export default {
  name: 'app',
  data () {
    return {
      text: 'Hello step two!'
    }
  },
  mounted () {
    introJS().start()
  },
  methods: {
    textWrapper (text) {
      return `<i>${text}</i>`
    }
  }
}
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }

  .video-wrapper {
    position: relative;
  }

  .video-wrapper > video {
    width: 100%;
    vertical-align: middle;
  }

  .video-wrapper > video.has-media-controls-hidden::-webkit-media-controls {
    display: none;
  }

  .video-overlay-play-button {
    box-sizing: border-box;
    width: 100%;
    height: 100%;
    padding: 10px calc(50% - 50px);
    position: absolute;
    top: 0;
    left: 0;
    display: block;
    opacity: 0.95;
    cursor: pointer;
    background-image: linear-gradient(transparent, #000);
    transition: opacity 150ms;
  }

  .video-overlay-play-button:hover {
    opacity: 1;
  }

  .video-overlay-play-button.is-hidden {
    display: none;
  }
</style>
