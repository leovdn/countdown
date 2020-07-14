import Countdown from './countdown.js';

const TempoAteNatal = new Countdown('25 December 2020 23:59:59 GMT-0300');
const TempoAteAnoNovo = new Countdown('31 December 2020 23:59:59 GMT-0300');
const TempoAteCarnaval = new Countdown('16 February 2021 23:59:59 GMT-0300');


function natalCount() {
    const daysValue = document.querySelector('.natal .days');
    const hoursValue = document.querySelector('.natal .hours');
    const minutesValue = document.querySelector('.natal .minutes');
    const secondsValue = document.querySelector('.natal .seconds');

    setInterval(() => {
        daysValue.innerHTML = `${TempoAteNatal.total.days}`;
        hoursValue.innerHTML = `${TempoAteNatal.total.hours}`;
        minutesValue.innerHTML = `${TempoAteNatal.total.minutes}`;
        secondsValue.innerHTML = `${TempoAteNatal.total.seconds}`;
    }, 1000);
};

natalCount();


function anoNovoCount() {
    const daysValue = document.querySelector('.ano-novo .days');
    const hoursValue = document.querySelector('.ano-novo .hours');
    const minutesValue = document.querySelector('.ano-novo .minutes');
    const secondsValue = document.querySelector('.ano-novo .seconds');

    setInterval(() => {
        daysValue.innerHTML = `${TempoAteAnoNovo.total.days}`;
        hoursValue.innerHTML = `${TempoAteAnoNovo.total.hours}`;
        minutesValue.innerHTML = `${TempoAteAnoNovo.total.minutes}`;
        secondsValue.innerHTML = `${TempoAteAnoNovo.total.seconds}`;
    }, 1000);
}

anoNovoCount();

function carnavalCount() {
    const daysValue = document.querySelector('.carnaval .days');
    const hoursValue = document.querySelector('.carnaval .hours');
    const minutesValue = document.querySelector('.carnaval .minutes');
    const secondsValue = document.querySelector('.carnaval .seconds');

    setInterval(() => {
        daysValue.innerHTML = `${TempoAteCarnaval.total.days}`;
        hoursValue.innerHTML = `${TempoAteCarnaval.total.hours}`;
        minutesValue.innerHTML = `${TempoAteCarnaval.total.minutes}`;
        secondsValue.innerHTML = `${TempoAteCarnaval.total.seconds}`;
    }, 1000);
}

carnavalCount();