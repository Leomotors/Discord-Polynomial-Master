// * Function for getting formatted time

function getFormattedTime(simple = false) {
    function addZero(num) {
        if (num < 10) {
            return `0${num}`
        }
        else {
            return `${num}`
        }
    }
    let d = new Date()
    let year = d.getFullYear()
    let month = addZero(d.getMonth() + 1)
    let day = addZero(d.getDate())
    let hour = addZero(d.getHours())
    let min = addZero(d.getMinutes())
    let sec = addZero(d.getSeconds())
    let formattedDate
    if (simple)
        formattedDate = `${year}${month}${day}${hour}${min}${sec}`
    else
        formattedDate = `${year}-${month}-${day} ${hour}:${min}:${sec}`
    return formattedDate
}

module.exports = getFormattedTime