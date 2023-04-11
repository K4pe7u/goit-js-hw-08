import Player from '@vimeo/player';

// instalacja node.js lodash
import throttle from 'lodash.throttle';

// inicjowanie odtwarzania w skrypcie
const player = new Player('vimeo-player');

// zdarzenie 'timeupdate' + zapisywanie czasu odtwarzania w local storeage
// throttle -> ograniczenie częstotliwości aktualizacji
// data -> aktualny czas odtwarzania i zapisujemy go pod kluczem v-c-t
player.on(
  'timeupdate',
  throttle(function (data) {
    const currentTime = data.seconds;
    localStorage.setItem('videoplayer-current-time', currentTime);
  }, 1000)
);

// zapisany czas ładuje sie podczas oświezenia strony

const savedTime = localStorage.getItem('videoplayer-current-time');
if (savedTime) {
  player.setCurrentTime(savedTime);
}
