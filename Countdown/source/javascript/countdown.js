// Definindo data inicial do contador
const year = new Date().getFullYear();

let timeInterval;
let countdownWasStarted = false;
let deadline = new Date(year, 9, 31);

const singD = document.getElementById('singularD');
const singH = document.getElementById('singularH');
const singM = document.getElementById('singularM');
const singS = document.getElementById('singularS');

const daysEl = document.getElementById('days');
const hoursEl = document.getElementById('hours');
const minsEl = document.getElementById('minutes');
const secsEl = document.getElementById('seconds');

// Função que inicia o contador
function initCountdown() {

	// Armazena o tempo total em milissegundos até o halloween
	const untilH = (deadline - new Date());

	// Verfica se o ano é bissexto e se a data inicial expirou
	const isLeapYear = !((year % 4) && (year % 100) || !(year % 400));

	if (isLeapYear === false && untilH <= 0) {
		deadline = new Date(deadline.getTime() + 365 * 24 * 60 * 60 * 1000);
		countdownWasStarted = true;
		updateTime();
	}

	else if (isLeapYear === true && untilH <= 0) {
		deadline = new Date(deadline.getTime() + 366 * 24 * 60 * 60 * 1000);
		countdownWasStarted = true;
		updateTime();
	}
	// Executa a função updateTime a cada 1 segundo
	timeInterval = setInterval(updateTime, 1000);
}

// Converte os dias, horas, minutos e segundos para o singular quando devem estar no singular
function singular(value, singular) {

	if(value == 1) {
		return singular;
	} else {
		return singular + "s";
	}
}

// Reinicia o contador
function resetCountdown() {
	
	clearInterval(timeInterval);
	initCountdown();
}

// Função que manipula o DOM e calcula os dias, horas, minutos e segundos até o halloween
function updateTime() {

		// Armazena o tempo total em milissegundos até o halloween
		const untilHalloween = (deadline - new Date());

		// Armazena o ano atual da variavel deadline
		const deadlineYear = deadline.getFullYear();

		// Caso o contador tenha expirado, chama a função resetCountdown para reinicia-lo
		if(countdownWasStarted === false && deadlineYear === year && untilHalloween <= 0) {
			resetCountdown();
		}
		// Se o contador já reiniciou, redefine a variavel countdownWasStarted para false
		else if(deadlineYear !== year && countdownWasStarted === true) {
			countdownWasStarted = !countdownWasStarted;
		}

		// Calculando dias, horas, minutos e segundos
		const days = Math.floor(untilHalloween / (24*60*60*1000));
		const hours = Math.floor(untilHalloween / (60*60*1000)) % 24;
		const minutes = Math.floor(untilHalloween / (60*1000)) % 60;
		const seconds = Math.floor(untilHalloween / 1000) % 60;
	
		let displayDays = singular(days, "day");
		let displayHours = singular(hours, "hour");
		let displayMinu = singular(minutes, "minute");
		let displaySecs = singular(seconds, "second");

		daysEl.textContent = days;
		hoursEl.textContent = hours;
		minsEl.textContent = minutes;
		secsEl.textContent = seconds;

		singD.textContent = displayDays;
		singH.textContent = displayHours;
		singM.textContent = displayMinu;
		singS.textContent = displaySecs;
}

// Chamada inicial
initCountdown();
