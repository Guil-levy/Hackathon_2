document.addEventListener("DOMContentLoaded", () => {
    // Get the canvas element where the chart will be displayed
    const ctx = document.getElementById('characterChart').getContext('2d');
  
    // Fetch data from API endpoint
    fetch("http://localhost:3000/character-vote-counts")
      .then((response) => response.json())
      .then((data) => {
        // Process the aggregated data and use it to create your chart
        const characterNames = data.map((item) => item.character_name);
        const voteCounts = data.map((item) => item.vote_count);
  
        // Generate colors for each data point
        const backgroundColors = voteCounts.map((_, index) => `rgba(75, 192, 192, 0.7)`); // Use a consistent color
        const borderColors = voteCounts.map((_, index) => `rgba(75, 192, 192, 1)`); // Use a consistent border color
  
        // Create the data array for the chart
        const characterData = {
          labels: characterNames,
          datasets: [
            {
              label: 'Votes',
              data: voteCounts,
              backgroundColor: backgroundColors,
              borderColor: borderColors,
              borderWidth: 1,
            },
          ],
        };
  
        // Create and display the chart
        const characterChart = new Chart(ctx, {
          type: 'bar',
          data: characterData,
        });
      })
      .catch((error) => console.error(error));
  });
  