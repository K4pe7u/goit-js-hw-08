import Player from '@vimeo/player';
import throttle from 'lodash';

const player = new Player('vimeo-player');

player.on(
  'timeupdate',
  _.throttle(function (data) {
    const currentTime = data.seconds;
    localStorage.setItem('videoplayer-current-time', currentTime);
  }, 1000)
);

const savedTime = localStorage.getItem('videoplayer-current-time');
if (savedTime) {
  player.setCurrentTime(savedTime);
}
