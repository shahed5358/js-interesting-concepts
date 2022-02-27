function welcomeMessage(name, greetHandler) {
    greetHandler(name);
}
// const name = ['tom hanks', 'tom brady', 'tom cruise'];
// const myObj = { name: 'tom', age: 15 }
function greetMorning(name) {
    console.log('good morning', name)
}
function greetAfternoon(name) {
    console.log('good afternoon', name)
}
welcomeMessage('tom hanks', greetMorning);
welcomeMessage('sakib hanks', greetMorning);
welcomeMessage('shahed', greetAfternoon)

function handleClick() {
    console.log('button is clicked')
}
document.getElementById('my-btn').addEventListener('click',
    handleClick)
document.getElementById('my-btn').addEventListener('click', function () {
    console.log('btn is clicked')
})