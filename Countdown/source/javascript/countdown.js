// configurando data inicial do contador
const year = new Date().getFullYear()

let timeInterval
let deadline = new Date("Oct 31, " + year)

// Função que inicia o contador
function initCountdown() {

	// Recebe o total de milissegundos como retorno de updateTime
	const untilH = updateTime();

	// Verfica se o ano é bissexto e se a data inicial expirou
	const isLeapYear = !((year % 4) && (year % 100) || !(year % 400))
	if (year != isLeapYear && untilH.total <= 0) {
		deadline = new Date(deadline.getTime() + 365 * 24 * 60 * 60 * 1000)
		updateTime()
		}

	else if (year == isLeapYear && untilH.total <= 0) {
		deadline = new Date(deadline.getTime() + 366 * 24 * 60 * 60 * 1000)
		updateTime()
	}
	// Executa a função updateTime a cada 1 segundo
	timeInterval = setInterval(updateTime, 1000)
}

// Função que calcula os dias, horas, minutos e segundos até o halloween
function updateTime() {

	const untilHalloween = (deadline - new Date());

	const days = Math.floor(untilHalloween / (24*60*60*1000));
  	const hours = Math.floor(untilHalloween / (60*60*1000)) % 24;
  	const minutes = Math.floor(untilHalloween / (60*1000)) % 60;
  	const seconds = Math.floor(untilHalloween / 1000) % 60;

	  document.getElementById('days').innerHTML = days
	  document.getElementById('hours').innerHTML = hours
	  document.getElementById('minutes').innerHTML = minutes
	  document.getElementById('seconds').innerHTML = seconds

	  return {
		'total': untilHalloween
	  }
}

// Chamada inicial
initCountdown()
