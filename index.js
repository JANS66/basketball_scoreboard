const buttons = document.getElementsByTagName(`button`)
const homeScoreParagraph = document.getElementById(`homeScore`)
const awayScoreParagraph = document.getElementById(`awayScore`)

let homeScore = 0
let awayScore = 0

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
    
    if (event.target.classList.contains(`awayButtons`)) {
        awayScore += points
        awayScoreParagraph.textContent = awayScore
    }
}

Array.from(buttons).forEach((button) => button.addEventListener(`click`, addScore))