// better version from codereview:
// https://codereview.stackexchange.com/questions/281504/simple-countdown-to-halloween-project/281753?noredirect=1#comment559279_281753


let HalloweenDate = { month: 9 /*October*/, day: 31 }
function getMillisecondsToHalloween() {
    let now = new Date()
    // I used number arguments, instead of the date string:
    //      This seems more straightforward.
    let nextHalloween = new Date(now.getFullYear(), HalloweenDate.month, HalloweenDate.day)
    if (now > nextHalloween) {
        // I rely on the JavaScript built in Date logic:
        //      It's certainly correct.
        nextHalloween = new Date(now.getFullYear() + 1, HalloweenDate.month, HalloweenDate.day)
    }

    return nextHalloween - now
}

// I renamed the untilH parameter name to durationInMS:
//      I thought this was clearer.
function splitDurationInUnits(durationInMS) {
    const days = Math.floor(durationInMS / (24*60*60*1000))
    const hours = Math.floor(durationInMS / (60*60*1000)) % 24
    const minutes = Math.floor(durationInMS / (60*1000)) % 60
    const seconds = Math.floor(durationInMS / 1000) % 60
    
    return { days, hours, minutes, seconds }
}

// Converts days, hours, minutes and seconds to singular when they should be singular
function singular(value, singular, plural) {
    if(value == 1) {
        return singular
    } else {
        plural = singular + "s"
        return plural
    }
}

// requesting the elements once improves performance
//      because I used requestAnimationFrame, this is important.
//      see RoToRa's answer

let labelDays = document.getElementById('singularD')
let labelHours = document.getElementById('singularH')
let labelMinutes = document.getElementById('singularM')
let labelSeconds = document.getElementById('SingularS')

let outputDays = document.getElementById('days')
let outputHours = document.getElementById('hours')
let outputMinutes = document.getElementById('minutes')
let outputSeconds = document.getElementById('seconds')

function display(durationInUnits) {
    // I used textContent instead of innerHTML (see RoToRa's answer)
    singularD.textContent = singular(durationInUnits.days, "day")
    singularH.textContent = singular(durationInUnits.hours, "hour")
    singularM.textContent = singular(durationInUnits.minutes, "minute")
    singularS.textContent = singular(durationInUnits.seconds, "second")

    outputDays.textContent = durationInUnits.days
    outputHours.textContent = durationInUnits.hours
    outputMinutes.textContent = durationInUnits.minutes
    outputSeconds.textContent = durationInUnits.seconds
}

function updateTime() {
    // I separated the calculation logic from the display logic:
    //      I think it improves clarity.
    // It recalculates the next Halloween on every iteration
    //      which will be slower, but I'm more sure I won't have bugs if the timer reaches zero
    //      I could remove the resetCountdown functioon
    let untilHalloween = getMillisecondsToHalloween()
    let durationInUnits = splitDurationInUnits(untilHalloween)
    display(durationInUnits)

    requestAnimationFrame(updateTime)
}

// I use requestAnimationFrame instead of setInterval:
//      When I once had to implement a timer, I updated every second
//          I had to improve my work since the tester sometimes saw it skipping seconds.
requestAnimationFrame(updateTime)