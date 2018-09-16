<template>
  <div>
    <img alt="Vue logo" src="../assets/logo.png" :data-intro=textWrapper(text2) />
    <h1 :data-intro=textWrapper(text2)>
      Hello
    </h1>
    <div class="container">
      <button @click="introGoTo(1)">Start again</button>
    </div>
    <div class="container">
      <button @click="introGoPage('Index')">Go Home start one</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data () {
    return {
      text2: 'Hello step two!'
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

  .player {
    max-width:750px;
    border:5px solid rgba(0,0,0,0.2);
    box-shadow:0 0 20px rgba(0,0,0,0.2);
    position: relative;
    font-size: 0;
    overflow: hidden;
  }

  /* This css is only applied when fullscreen is active. */
  .player:fullscreen {
    max-width: none;
    width: 100%;
  }

  .player:-webkit-full-screen {
    max-width: none;
    width: 100%;
  }

  .player__video {
    width: 100%;
  }

  .player__button {
    background:none;
    border:0;
    line-height:1;
    color:white;
    text-align: center;
    outline:0;
    padding: 0;
    cursor:pointer;
    max-width:50px;
  }

  .player__button:focus {
    border-color: #ffc600;
  }

  .player__slider {
    width:10px;
    height:30px;
  }

  .player__controls {
    display:flex;
    position: absolute;
    bottom:0;
    width: 100%;
    transform: translateY(100%) translateY(-5px);
    transition:all .3s;
    flex-wrap:wrap;
    background:rgba(0,0,0,0.1);
  }

  .player:hover .player__controls {
    transform: translateY(0);
  }

  .player:hover .progress {
    height:15px;
  }

  .player__controls > * {
    flex:1;
  }

  .progress {
    flex:10;
    position: relative;
    display:flex;
    flex-basis:100%;
    height:5px;
    transition:height 0.3s;
    background:rgba(0,0,0,0.5);
    cursor:ew-resize;
  }

  .progress__filled {
    width:50%;
    background:#ffc600;
    flex:0;
    flex-basis:50%;
  }

  /* unholy css to style input type="range" */

  input[type=range] {
    -webkit-appearance: none;
    background:transparent;
    width: 100%;
    margin: 0 5px;
  }
  input[type=range]:focus {
    outline: none;
  }
  input[type=range]::-webkit-slider-runnable-track {
    width: 100%;
    height: 8.4px;
    cursor: pointer;
    box-shadow: 1px 1px 1px rgba(0, 0, 0, 0), 0 0 1px rgba(13, 13, 13, 0);
    background: rgba(255,255,255,0.8);
    border-radius: 1.3px;
    border: 0.2px solid rgba(1, 1, 1, 0);
  }
  input[type=range]::-webkit-slider-thumb {
    height: 15px;
    width: 15px;
    border-radius: 50px;
    background: #ffc600;
    cursor: pointer;
    -webkit-appearance: none;
    margin-top: -3.5px;
    box-shadow:0 0 2px rgba(0,0,0,0.2);
  }
  input[type=range]:focus::-webkit-slider-runnable-track {
    background: #bada55;
  }
  input[type=range]::-moz-range-track {
    width: 100%;
    height: 8.4px;
    cursor: pointer;
    box-shadow: 1px 1px 1px rgba(0, 0, 0, 0), 0 0 1px rgba(13, 13, 13, 0);
    background: #ffffff;
    border-radius: 1.3px;
    border: 0.2px solid rgba(1, 1, 1, 0);
  }
  input[type=range]::-moz-range-thumb {
    box-shadow: 0 0 0 rgba(0, 0, 0, 0), 0 0 0 rgba(13, 13, 13, 0);
    height: 15px;
    width: 15px;
    border-radius: 50px;
    background: #ffc600;
    cursor: pointer;
  }

  * {
    font-family: 'Roboto', sans-serif;
  }

  .container {
    margin: 25px auto;
    width: 130px;
    height: 40px;
    text-align: center;
  }

  button {
    outline: none;
    height: 40px;
    text-align: center;
    width: 130px;
    border-radius: 40px;
    background: #fff;
    border: 2px solid #1ECD97;
    color: #1ECD97;
    letter-spacing: 1px;
    text-shadow: 0;
    font-size: 12px;
    font-weight: bold;
    cursor: pointer;
    transition: all 0.25s ease;
  }
  button:hover {
    color: white;
    background: #1ECD97;
  }
  button:active {
    letter-spacing: 2px;
  }

  @-webkit-keyframes rotating {
    from {
      -webkit-transform: rotate(0deg);
      transform: rotate(0deg);
    }
    to {
      -webkit-transform: rotate(360deg);
      transform: rotate(360deg);
    }
  }

  @keyframes rotating {
    from {
      -webkit-transform: rotate(0deg);
      transform: rotate(0deg);
    }
    to {
      -webkit-transform: rotate(360deg);
      transform: rotate(360deg);
    }
  }

</style>
