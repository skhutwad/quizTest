const usernameEle = document.querySelector("#username");
const topicEle = document.querySelector("#topic");
const submitBtnEle = document.querySelector("#submit");
let username;
let topic;
let questionList;
let questionIndex = 0;

function createOptions(options) {
  const optionsContainer = document.createElement("div");
  optionsContainer.setAttribute("class", "options-container");
  let container;
  for (let item of options) {
    container = document.createElement("div");
    container.setAttribute("class", "q-option");
    const input = document.createElement("input");
    input.setAttribute("type", "radio");
    input.setAttribute("name", "option");
    input.setAttribute("value", item);
    const label = document.createElement("label");
    label.innerHTML = item;
    container.appendChild(input);
    container.appendChild(label);
    optionsContainer.appendChild(container);
  }

  document.querySelector(".q-options").appendChild(optionsContainer);
}

submitBtnEle.addEventListener("click", function () {
  username = usernameEle.value;
  topic = topicEle.value;
  questionList = quizDB[topic];
  const container = document.querySelector(".container");
  const body = document.querySelector("body");
  body.removeChild(container);
  document.querySelector(".q-text").innerHTML =
    questionList[questionIndex].question;
  createOptions(questionList[questionIndex].options);
  const questionContainer = document.querySelector(".questionContainer");
  questionContainer.style.display = "flex";
  // container.appendChild(p);
});

document.querySelector("#next").addEventListener("click", function () {
  questionIndex++;

  document.querySelector(".q-text").innerHTML =
    questionList[questionIndex].question;
  document
    .querySelector(".q-options")
    .removeChild(document.querySelector(".options-container"));
  createOptions(questionList[questionIndex].options);
  if (questionIndex === questionList.length - 1) {
    document.querySelector("#next").style.display = "none";
    document.querySelector("#submit-test").style.display = "block";
  }
});
