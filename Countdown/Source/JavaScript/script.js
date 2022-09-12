const daysEle = document.getElementById('days')
const hoursEle = document.getElementById('hours')
const minutesEle = document.getElementById('minutes')
const secondsEle = document.getElementById('seconds')

const halloween = "31 Oct 2022"

function countdown() {
	
	const halloweenDate = new Date(halloween);
	const currentYear = new Date();

	const untilHalloween = (halloweenDate - currentYear)

	const days = Math.floor(untilHalloween / (24*60*60*1000))
  	const hours = Math.floor(untilHalloween / (60*60*1000) % 24)
  	const minutes = Math.floor(untilHalloween / (60*1000) % 60)
  	const seconds = Math.floor(untilHalloween / 1000) % 60

	daysEle.innerHTML = days;
	hoursEle.innerHTML = hours;
	minutesEle.innerHTML = minutes;
	secondsEle.innerHTML = seconds;

}

countdown();

setInterval(countdown, 1000)