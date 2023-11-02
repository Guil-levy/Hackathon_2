document.addEventListener("DOMContentLoaded", () => {
  const ctx = document.getElementById("characterChart").getContext("2d");

  fetch("http://localhost:3000/character-vote-counts")
    .then((response) => response.json())
    .then((data) => {
      //  const characterNames = data.map((item) => item.voted_characters);
      console.log(data.rows);

      const characterNames = data.map((item) => item.character_name);
      console.log(`characterNames: ${characterNames}`);
      const voteCounts = data.map((item) => item.vote_count);
      console.log(`voteCounts: ${voteCounts}`);

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
      console.log(characterData);

      // Create and display the chart
      const characterChart = new Chart(ctx, {
        type: "bar",
        data: characterData,
      });
    })
    .catch((error) => console.error(error));
});
