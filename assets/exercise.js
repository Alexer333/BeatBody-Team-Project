console.log("connected");
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
      "X-RapidAPI-Key": "366ca0f84emsh84274272616981bp1bc784jsne55b13ad269b",
      "X-RapidAPI-Host": "exercisedb.p.rapidapi.com",
    },
  };

  try {
    const response = await fetch(exerDbUrl, options);
    const data = await response.json();

    console.log(data);
  } catch (error) {
    console.error(error);
  }
}
