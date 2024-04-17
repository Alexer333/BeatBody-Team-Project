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
displayWorkouts(data)
        console.log(data);
    } catch (error) {
        console.error(error);
    }
}
function displayWorkouts(data){
    console.log(data)
for (let i = 0; i < data.length; i++){
    // loop through data to show workout card
    //  create the div that the card
const workoutCard = document.createElement("div")
    // create the title of the care h1 or h2
    // workChoice means  i am creating a h1
const workoutName = document.createElement("h1")
workoutName.innerHTML = data[i].name
    // creat the image for the card
const image = document.createElement("img")
image.setAttribute("src",data[i].gifUrl)
    // append the title and image to the card
workoutCard.appendChild(workoutName)
workoutCard.appendChild(image)
    // append card to page
    document.getElementById("excercise-demo").appendChild(workoutCard)
    // be able to go to the next workout without 
}

}
