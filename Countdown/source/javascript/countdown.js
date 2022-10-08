// Calcula tempo

function getTime(deadline) {

	const untilHalloween = (deadline - new Date());

	const days = Math.floor(untilHalloween / (24*60*60*1000));
  	const hours = Math.floor(untilHalloween / (60*60*1000)) % 24;
  	const minutes = Math.floor(untilHalloween / (60*1000)) % 60;
  	const seconds = Math.floor(untilHalloween / 1000) % 60;

  	return {

  		'total': untilHalloween,
  		'days': days,
  		'hours': hours,
  		'minutes': minutes,
  		'seconds': seconds
  	}
	
}

// Inicia cronômetro

function initCountdown(deadline) {

	const daysEl = document.getElementById('days');
	const hoursEl = document.getElementById('hours');
	const minutesEl = document.getElementById('minutes');
	const secondsEl = document.getElementById('seconds');

	// Atualiza cronômetro

	function updateCountdown() {

		let untilH = getTime(deadline);

		daysEl.innerHTML = untilH.days;
		hoursEl.innerHTML = untilH.hours;
		minutesEl.innerHTML = untilH.minutes;
		secondsEl.innerHTML = untilH.seconds;

		if (untilH.total <= 0) {
			clearInterval(timeInterval)
		}

		// Verifica se o ano é bissexto

		const year = new Date().getFullYear()
		const isLeapYear = !((year % 4) && (year % 100) || !(year % 400))

		if (year != isLeapYear && untilH.days == 0) {
			halloweenDate = new Date(deadline.getTime() + 365 * 24 * 60 * 60 * 1000)
			initCountdown(halloweenDate)
			}

		else if (year == isLeapYear && untilH.days == 0) {
			halloweenDate = new Date(deadline.getTime() + 366 * 24 * 60 * 60 * 1000)
			initCountdown(halloweenDate)

		}

	}

	updateCountdown()
	let timeInterval = setInterval(updateCountdown, 1000);
}

// Passa data inicial

const halloweenDate = new Date('31 Oct 2022');
initCountdown(halloweenDate)