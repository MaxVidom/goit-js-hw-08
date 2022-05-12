// import Vimeo from "@vimeo/player";
import throttle from "lodash.throttle";
const iframe = document.querySelector('iframe');
const player = new Vimeo.Player(iframe);
const currentTime = localStorage.getItem("videoplayer-current-time");
player.setCurrentTime(currentTime);
    const onPlay = function(data) {
        localStorage.setItem("videoplayer-current-time", data.seconds)
    };

player.on('timeupdate', throttle(onPlay, 1000));
