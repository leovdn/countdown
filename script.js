import Countdown from './countdown.js';

const TempoAteNatal = new Countdown('25 December 2020 23:59:59 GMT-0300');
const TempoAteAnoNovo = new Countdown('31 December 2020 23:59:59 GMT-0300');

const textElement = document.querySelector('p');



setInterval(() => {
    textElement.innerHTML = 
        `   Dias: <h2>${TempoAteAnoNovo.total.days}</h2>
            Horas: <h2>${TempoAteAnoNovo.total.hours}</h2>
            Minutos: <h2>${TempoAteAnoNovo.total.minutes}</h2>
            Segundos: <h2>${TempoAteAnoNovo.total.seconds}</h2>
        `;
}, 1000)