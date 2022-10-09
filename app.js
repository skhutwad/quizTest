const usernameEle = document.querySelector('#username');
const topicEle = document.querySelector('#topic');
const submitBtnEle = document.querySelector('#submit');

submitBtnEle.addEventListener('click', function(){
    // console.log("username:", usernameEle.value);
    // console.log("topic:", topicEle.value);
    // const p = document.createElement('p');
    // p.innerHTML = "What is CSS?";
    
    const container = document.querySelector('.container');
    const body = document.querySelector('body');
    body.removeChild(container);
    const questionContainer = document.querySelector('.questionContainer');
    questionContainer.style.display = 'flex';
    // container.appendChild(p);
        

})
