document.addEventListener("DOMContentLoaded", () => {
  // Get the canvas 
  const ctx = document.getElementById("characterChart").getContext("2d");

  // Fetch data from your API endpoint
  fetch("http://localhost:3000/character-vote-counts")
    .then((response) => response.json())
    .then((data) => {
      // create your chart
      const characterNames = data.map((item) => item.voted_characters);
    //   const characterNames = data.map((item) => item.name);
      const voteCounts = data.map((item) => item.vote_count);
      const backgroundColors = voteCounts.map(() => "rgba(75, 192, 192, 0.7)"); 
      const borderColors = voteCounts.map(() => "rgba(75, 192, 192, 1)"); 

      // data array for the chart
      const characterData = {
        labels: characterNames,
        datasets: [
          {
            label: "Votes",
            data: voteCounts,
            backgroundColor: backgroundColors,
            borderColor: borderColors,
            borderWidth: 1,
          },
        ],
      };

      // Create and display the chart
      const characterChart = new Chart(ctx, {
        type: "bar",
        data: characterData,
      });
    })
    .catch((error) => console.error(error));
});
