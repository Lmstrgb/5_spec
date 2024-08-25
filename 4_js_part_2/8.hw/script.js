const containerEl = document.querySelector('.contVideo');

const contVid = document.createElement('div');
const videoEl = document.createElement('video');
videoEl.setAttribute('src', 'media/video/video_lesson.mp4');
videoEl.classList.add('video');
videoEl.innerHTML = 'Ваш браузер не поддерживает этот формат видео';

const runnerEl = document.createElement('input');
runnerEl.setAttribute('type', 'range');
runnerEl.setAttribute('min', '0');
runnerEl.setAttribute('max', '100');
runnerEl.setAttribute('value', '0');
runnerEl.setAttribute('step', '0.01');
runnerEl.classList.add('begunok');

const runnerVol = document.createElement('input');
runnerVol.setAttribute('type', 'range');
runnerVol.setAttribute('min', '0');
runnerVol.setAttribute('max', '1');
runnerVol.setAttribute('value', '0.2');
runnerVol.setAttribute('step', '0.01');
runnerVol.classList.add('begunokVol');

const contVol = document.createElement('div');
const volImg = document.createElement('div');
const contBtn = document.createElement('div');
const playEl = document.createElement('div');
const pauseEl = document.createElement('div');


playEl.addEventListener('click', function (e) {
  videoEl.play();
});

pauseEl.addEventListener('click', function (e) {
  videoEl.pause();
})

// videoEl.addEventListener('loadeddata', function (e) {
//   //begunokEl.max = videoEl.duration; // Устанавливаем максимальное значение бегунка
//   begunokEl.setAttribute("value", 0);

//   console.log("звук видео = " + videoEl.volume);
//   console.log(videoEl.duration);
// });

// begunokEl.addEventListener('change', function (e) {
//   videoEl.currentTime = e.target.value / 100 * videoEl.duration;
// });

videoEl.addEventListener("loadeddata", () => {

  videoEl.volume = 0.2;
  //volumeEl.setAttribute("value", runnerVol.value);
});

runnerEl.addEventListener('input', (e) => {
  videoEl.currentTime = (e.target.value / 100) * videoEl.duration;
});

videoEl.addEventListener('timeupdate', (e) => {
  // begunokEl.setAttribute('value', Math.round(videoEl.currentTime / videoEl.duration) * 100);
  runnerEl.value = (e.target.currentTime / e.target.duration) * 100;
});



volImg.addEventListener('click', () => {
  if (runnerVol.style.display === 'none' || runnerVol.style.display === '') {
    runnerVol.style.display = 'block';
    runnerVol.value = 0.2;
  } else {
    runnerVol.style.display = 'none';
  }
});

runnerVol.addEventListener('input', () => {
  videoEl.volume = runnerVol.value;
  //videoEl.volume = e.target.value / 100;
})


contBtn.classList.add('btn_1');
playEl.classList.add('play');
pauseEl.classList.add('pause');
contVol.classList.add('volume_container');
volImg.classList.add('volumeImg');

containerEl.appendChild(contVid);
contVid.appendChild(videoEl);
containerEl.appendChild(runnerEl);
contBtn.appendChild(playEl);
contBtn.appendChild(pauseEl);
contVol.appendChild(volImg);
contVol.appendChild(runnerVol);
contBtn.appendChild(contVol);
containerEl.appendChild(contBtn);
