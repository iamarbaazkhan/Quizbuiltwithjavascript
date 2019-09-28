// storing all the correct ans in correctAnswers variable
const correctAnswers = ["B", "B", "B", "B"];
// selection quiz form class to fetch all the data
const form = document.querySelector(".quiz-form");

// creating a variable to store result
const result = document.querySelector(".result");

// using event paramter to remove the refresh option

form.addEventListener("submit", e => {
  e.preventDefault();

  // creating a score variable to display the result in percent in the web page

  let score = 0;
  // userAnswers variable to store all the form value result .
  const userAnswers = [
    form.q1.value,
    form.q2.value,
    form.q3.value,
    form.q4.value
  ];
  // using forEach for checking answers
  userAnswers.forEach((answer, index) => {
    if (answer === correctAnswers[index]) {
      score += 25;
    }

    console.log(score);
  });

  //  window scrollto method to get up
  window.scrollTo(0, 0);
  //show result on page
  result.querySelector("span").textContent = `${score}`;
  // for removing the classlist
  result.classList.remove("d-none");
});
