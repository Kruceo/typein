import initJuca from './node_modules/juca/index.js'
let words = [
    "photograph",
    "library",
    "outdoor",
    "pessimist",
    "selectors",
    "difference",
    "roulette",
    "midtower",
    "soundbar",
    "pensilvania",
    "motherboard",
    "graphics",
    "notebook",
    "connection",
    "microphone",
    "lightning",
    "eleven",
    "controller",
    "settings",
    "schedule",
    "spatula",
    "knowledge",
    "lieutenant"
]
window.word = words[Math.floor(Math.random() * words.length)]


let map =
{
    left: 'dxszaqwecrfv',
    middle: 'tgbyhn',
    rigth: 'ujmikolp'
}
window.mapErrorCounter =
{
    left: 0,
    middle: 0,
    right: 0
}
for (let i = 0; i < window.word.length; i++) {

}
let index = 0
let lasttime = (new Date()).getTime()
window.successTime = 0
window.tries = 0
let blocked = false
let listAverage = []
window.average = 0
setInterval(() => {

    let total = 0
    listAverage.forEach(each => total += each)
    window.average = total / listAverage.length

}, 120);
window.addEventListener('keydown', (e) => {
    setTimeout(() => {


        let mobileValue = (document.body.querySelector('input[id="mobileInput"]').value + '')
        let mobileKey = mobileValue.charAt(mobileValue.length - 1).toLowerCase()

        let keyToProcess = (e.key == "Unidentified") ? mobileKey : e.key
       
        if (blocked) return
        if (!"qwertyuiopçlkjhgfdsazxcvbnm".includes(keyToProcess)) return
        if (keyToProcess == window.word[index]) {

            (document.querySelector('.' + window.word[index] + index)).style.backgroundColor = "#488"

            if (index == 0) {
                lasttime = (new Date()).getTime()
            }

            if (index >= window.word.length - 1) {
                index = 0
                window.successTime = (new Date()).getTime() - lasttime
                window.word = words[Math.floor(Math.random() * words.length)]

                document.querySelectorAll('.letter').forEach(each => each.style.backgroundColor = "#2f2")

                console.log(successTime / 1000 + ' s')
                console.log(tries + ' times')
                console.log(window.successTime / window.word.length + ' ms per letter')
                listAverage.push(window.successTime / window.word.length)
            }
            else {
                index++
            }

        }
        else {
            if (map.left.includes(e.key)) window.mapErrorCounter.left++
            if (map.middle.includes(e.key)) window.mapErrorCounter.middle++
            if (map.rigth.includes(e.key)) window.mapErrorCounter.right++
            window.tries++
            lasttime = 0
            index = 0
            document.querySelectorAll('.letter').forEach(each => each.style.backgroundColor = "#f22")
            blocked = true
            setTimeout(() => {
                blocked = false
                document.querySelectorAll('.letter').forEach(each => each.style.backgroundColor = "#224")
            }, 3500);
        }
        console.log(index)

    }, 16);

})
window.addEventListener('click', (e) => {
    document.body.querySelector('#mobileInput').focus()
    setTimeout(() => {
        document.body.querySelector('input[id="mobileInput"]').click()

    }, 500)
})
initJuca()