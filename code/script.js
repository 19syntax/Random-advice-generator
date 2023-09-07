const adviceNo = document.querySelector('.advice-no');
const adviceContent = document.querySelector('.advice-content');
const divDice = document.querySelector('.div-dice');


let globalData = null;
console.log(globalData)

function fetchData(){
    fetch('https://api.adviceslip.com/advice')
    .then(res => res.json())
    .then(data => {

        globalData = data;
        const advice = data.slip.advice;
        const id = data.slip.id;
        adviceNo.innerHTML = id;
        adviceContent.innerHTML = advice;
    })
    .catch(error => {
        console.log('Unable to fetch and advice')
    })
}
fetchData()
divDice.addEventListener("click", () => {
    fetchData()
});