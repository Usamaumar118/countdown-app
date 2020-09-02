const daysEl = document.getElementById('days')
const hoursEl = document.getElementById('hours')
const minsEl = document.getElementById('mins')
const secsEl = document.getElementById('secs')

const newYear = "1 Jan 2021"


function countdown(){

    const remainingTime = new Date(newYear) 
    const currentDate = new Date

    const totalsecs = (remainingTime - currentDate) / 1000

    const days = Math.floor(totalsecs / 3600 / 24 ) 
    const hours = Math.floor(totalsecs / 3600) % 24
    const mins = Math.floor(totalsecs / 60) % 60
    const secs = Math.floor(totalsecs) % 60

    daysEl.innerHTML = days
    hoursEl.innerHTML = formatTime(hours)
    minsEl.innerHTML = formatTime(mins)
    secsEl.innerHTML = formatTime(secs)
}

function formatTime(time) {
    return time < 10 ? `0${time}` : time
}


setInterval(countdown, 1000)