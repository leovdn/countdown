import Countdown from './countdown.js';

const TempoAteNatal = new Countdown('25 December 2020 23:59:59 GMT-0300');
const TempoAteAnoNovo = new Countdown('31 December 2020 23:59:59 GMT-0300');


setInterval(() => {
    console.log(TempoAteNatal.total)

}, 10000)