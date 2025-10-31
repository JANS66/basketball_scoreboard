const buttons = document.getElementsByTagName(`button`)
const homeScoreParagraph = document.getElementById(`homeScore`)
const guestScoreParagraph = document.getElementById(`guestScore`)

let homeScore = 0
let guestScore = 0

const parsePoints = event => {
    let value = event.target.textContent
    if (value === `+1`) return 1
    if (value === `+2`) return 2
    if (value === `+3`) return 3
    return 0
}

const addScore = event => {
    let points = parsePoints(event)

    if (event.target.classList.contains(`homeButtons`)) {
        homeScore += points
        homeScoreParagraph.textContent = homeScore
    }
    
    if (event.target.classList.contains(`guestButtons`)) {
        guestScore += points
        guestScoreParagraph.textContent = guestScore
    }
}

Array.from(buttons).forEach((button) => button.addEventListener(`click`, addScore))