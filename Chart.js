<canvas id="profitChart"></canvas>
<script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
<script>
  const ctx = document.getElementById('profitChart').getContext('2d');
  const profitChart = new Chart(ctx, {
    type: 'line',
    data: {
      labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4'],
      datasets: [{
        label: 'Profit/Loss',
        data: [200, -50, 300, 150],
        borderColor: '#76c7c0',
        tension: 0.1
      }]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  });
</script>
