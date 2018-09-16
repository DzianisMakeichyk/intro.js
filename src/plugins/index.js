import router from '@/router'
import introJs from 'intro.js'
const intro = {
  install (Vue) {
    Vue.mixin({
      mounted () {
        /* eslint-disable */
        introJs().setOption('doneLabel', 'Next page').oncomplete(() => {
          router.push({ path: this.$store.state.introJsGoTo })
        }).onafterchange((el) => {
          el.classList.contains('video_intro') ? this.videoInit() : ''
        }).start();
      },
      methods: {
        introGoTo (step) {
          return introJs().goToStepNumber(step).onafterchange((el) => {
            el.classList.contains('video_intro') ? this.videoInit() : ''
          }).setOption('doneLabel', 'Next page').oncomplete(() => {
            router.push({ path: this.$store.state.introJsGoTo })
          }).onafterchange((el) => {
            el.classList.contains('video_intro') ? this.videoInit() : ''
          }).start();
        },
        introGoPage (page) {
          this.$router.push({ name: page })
        },
        textWrapper: (val) => {
          return `<i> ${val} </i>`
        },
        videoWrapper (link) {
          return `<div class="player">
             <video class="player__video viewer" src="${link}"></video>
        
             <div class="player__controls">
               <div class="progress">
                <div class="progress__filled"></div>
               </div>
               <button class="player__button toggle" title="Toggle Play">►</button>
               <input type="range" name="volume" class="player__slider" min="0" max="1" step="0.05" value="1">
               <input type="range" name="playbackRate" class="player__slider" min="0.5" max="2" step="0.1" value="1">
               <button data-skip="-10" class="player__button">« 10s</button>
               <button data-skip="25" class="player__button">25s »</button>
             </div>
           </div>`
        },
        videoInit () {
          /* eslint-disable */
          setTimeout(function () {

            const player = document.querySelector('.player')
            const video = player.querySelector('.viewer')

            const progress = player.querySelector('.progress')
            const progressBar = player.querySelector('.progress__filled')
            const toggle = player.querySelector('.toggle')
            const skipButtons = player.querySelectorAll('[data-skip]');
            const ranges = player.querySelectorAll('.player__slider')

            function togglePlay () {
              const method = video.paused ? 'play' : 'pause';
              video[method]()
            }

            function updateButton() {
              const icons = this.paused ? '1' : '2'
              toggle.textContent = icons
            }

            function skip() {
              video.currentTime += parseFloat(this.dataset.skip);
            }

            function handleRangeUpdate() {
              video[this.name] = this.value;
            }

            function handelProgress() {
              const percent = (video.currentTime / video.duration) * 100;
              progressBar.style.flexBasis = `${percent}%`
            }

            function scrub(e) {
              const scrubTime = (e.offsetX / progress.offsetWidth) * video.duration;
              video.currentTime = scrubTime;
            }

            video.addEventListener('click', togglePlay)
            video.addEventListener('play', updateButton)
            video.addEventListener('pause', updateButton)
            video.addEventListener('timeupdate', handelProgress)

            toggle.addEventListener('click', togglePlay)

            skipButtons.forEach(button => button.addEventListener('click', skip));

            ranges.forEach(range => range.addEventListener('change', handleRangeUpdate));
            ranges.forEach(range => range.addEventListener('mousemove', handleRangeUpdate));


            progressBar.addEventListener('click', scrub)
          }, 500)
        }
      }
    })
  }
}

export default intro
