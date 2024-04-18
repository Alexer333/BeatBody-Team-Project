let submitBtn = document.getElementById("submit");
submitBtn.addEventListener("click", function (event) {
  event.preventDefault();
  const bodyPart = document.getElementById("workout").value;
  console.log(bodyPart);
  fetchData(bodyPart);
});
async function fetchData(bodyPart) {
  const exerDbUrl = `https://exercisedb.p.rapidapi.com/exercises/bodyPart/${bodyPart}?limit=10`;
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "deeffb9949msh58f965dc47f70afp171ac2jsndd7f15196498",
      "X-RapidAPI-Host": "exercisedb.p.rapidapi.com",
    },
  };

  try {
    const response = await fetch(exerDbUrl, options);
    const data = await response.json();
    displayWorkouts(data);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}
// empty div goes on top or goes on bottom?
function displayWorkouts(data) {
  clearContent("excercise-demo");
  console.log(data);
  for (let i = 0; i < data.length; i++) {
    // loop through data to show workout card
    //  create the div that the card
    const workoutCard = document.createElement("div");

    workoutCard.className = "task-card"
// to make the div element draggable test out to make sure this part on line 36 works

// dragElement(document.getElementById("excercise-demo"));

    // create the title of the care h1 or h2
    // workName means  i am creating a h1
    const workoutName = document.createElement("h1");
    workoutName.innerHTML = data[i].name;
    // create the image for the card
    const image = document.createElement("img");
    image.setAttribute("src", data[i].gifUrl);
    // append the title and image to the card

    workoutCard.appendChild(workoutName);
    workoutCard.appendChild(image);
    // append card to page
    document.getElementById("excercise-demo").appendChild(workoutCard);
    workoutCard.addEventListener("click", function(){
      const workoutCardContainer = document.getElementById("workoutcard-container");
      workoutCard.parentNode.removeChild(workoutCard);
      workoutCardContainer.appendChild(workoutCard);
    })
    // be able to go to the next workout without refresh to have a new workout img come up
    // after workout is done transfers you to the part where the random pokemon pops up
    // alert comes up when the pokemon is coming
    clearInputField()
  }
}

// add a function that clears the  the body part words section
function clearContent(elementId) {
  document.getElementById(elementId).innerHTML = "";
}
// needs to be clear after the button is hit  to submit
function clearInputField() {
  document.getElementById("workout").value = "";
  console.log("its running")
}

// create cards draggable for workout
// aks questio to see if line 36 needs to be above the function



// div.addEventListener("mousedown", onmousedown);

// function onMouseDown(event) {
//   rect = event.target.getBoundingClientRect();
//   let startingX = event.clientX;
//   let startingY = event.clientY;

//   event.target.rectX = rect.left;
//   event.target.rectY = rect.top;
//   event.target.startingX = startingX;
//   event.target.startingY = startingY;

//   document.addEventListener("mousemove", onMouseDown);
// }

// function onMouseMove(event) {
//   let currentX = event.clientX;
//   let currentY = event.clientY;
//   event.target.style.position = "absolute";
//   event.target.style.left = (event.target.rectX
//   + currentX - Event.target.startingX + "PX");
//   event.target.style.top = (event.target.rectY
//   + currentY - event.target.startingY + "px");

//   event.target.addEventListener("mouseup", cleanUpListners);
//   event.target.addEventListener("mouseleave", cleanUpListners)
// }

// function cleanUpListners(event) {
//   document.removeEventListener("mousemove", onMouseMove);
//   event.target.removeEventListener("mouseup", onMouseMove);
//   event.target.removeEventListener("mouseleave", onMouseMove);
//   console.log ("does this work")
// }
  // ISSUE: about about this whole code from 63 to 96 and then until i am done with the function
  

// ISSUE: was trying to have it where the user can drag the image did not work but no console errors popped up?


// droppable box for the cards  to make there own workout that is given

// have the droppable card not erase themselves when they pick a new body part

