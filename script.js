import Countdown from './countdown.js';

const TempoAteNatal = new Countdown('25 December 2020 23:59:59 GMT-0300');
const TempoAteAnoNovo = new Countdown('31 December 2020 23:59:59 GMT-0300');

const daysValue = document.querySelector('.days');
const hoursValue = document.querySelector('.hours');
const minutesValue = document.querySelector('.minutes');
const secondsValue = document.querySelector('.seconds');

setInterval(() => {
    daysValue.innerHTML = `${TempoAteNatal.total.days}`;
    hoursValue.innerHTML = `${TempoAteNatal.total.hours}`;
    minutesValue.innerHTML = `${TempoAteNatal.total.minutes}`;
    secondsValue.innerHTML = `${TempoAteNatal.total.seconds}`;
}, 1000)






