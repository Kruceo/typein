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
window.word = words[Math.floor(Math.random()*words.length)]


let map = 
{
    left: 'dxszaqwecrfv',
    middle: 'tgbyhn',
    rigth: 'ujmikolp'
}
let mapErrorCounter = 
{
    left: 0,
    middle:0,
    rigth: 0
}
for (let i = 0; i < window.word.length; i++) {
    
}
let index = 0
let lasttime =  (new Date()).getTime()
let successTime = 0
let tries = 0
let blocked = false
let listAverage = []
let average = 0
setInterval(() => {

    let total = 0
    listAverage.forEach(each=>total += each)
    average = total/listAverage.length
    document.body.querySelector('#success').innerHTML = 'total: ' + window.successTime/1000 + 's'
    document.body.querySelector('#timePerLetter').innerHTML = 'last per letter: ' +(window.successTime/window.word.length).toFixed(2) + 'ms'
    document.body.querySelector('#averagePerLetter').innerHTML = 'average per letter: ' +(average).toFixed(2) + 'ms'
    document.body.querySelector('#tries').innerHTML = 'errors: '+tries 
    document.body.querySelector('#errorMap').innerHTML = 'left: '+mapErrorCounter.left + '\n | ' +'middle: '+mapErrorCounter.middle + '\n | ' +'rigth: '+mapErrorCounter.rigth + '\n'
}, 60);
window.addEventListener('keydown',(e)=>
{
    if(blocked)return
    if(!"qwertyuiopçlkjhgfdsazxcvbnm".includes(e.key))return
    if(e.key == window.word[index])
    {
        
        (document.querySelector('.'+window.word[index] + index)).style.backgroundColor = "#244"
       
        if(index == 0)
        {
            lasttime =  (new Date()).getTime()
        }
        
        if(index >= window.word.length - 1)
        {
            index = 0
            window.successTime = (new Date()).getTime() - lasttime
            window.word = words[Math.floor(Math.random()*words.length)]
            
            document.querySelectorAll('.letter').forEach(each=> each.style.backgroundColor = "#2f2")
           
            console.log(successTime/1000 + ' s')
            console.log(tries + ' times')
            console.log(window.successTime/window.word.length + ' ms per letter')
            listAverage.push(window.successTime/window.word.length)
        }
        else
        {
            index ++
        }
        
    }
    else
    {
        if(map.left.includes(e.key))mapErrorCounter.left++
        if(map.middle.includes(e.key))mapErrorCounter.middle++
        if(map.rigth.includes(e.key))mapErrorCounter.rigth++
        tries ++
        lasttime = 0
        index = 0
        document.querySelectorAll('.letter').forEach(each=> each.style.backgroundColor = "#f22")
        blocked = true
        setTimeout(() => {
            blocked = false
            document.querySelectorAll('.letter').forEach(each=> each.style.backgroundColor = "#224")
        }, 3500);
    }
    console.log(index)
   
})
initJuca()