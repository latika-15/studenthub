const form = document.getElementById('protein-calculator');
const resultDiv = document.getElementById('result');

form.addEventListener('submit', (event) => {
  event.preventDefault(); // Prevent default form submission

  // Get user input
  const weight = parseFloat(document.getElementById('weight').value);
  const activityLevel = parseFloat(document.getElementById('activity').value);

  // Calculate estimated protein needs (grams per kilogram)
  const proteinNeeds = weight * activityLevel;

  // Display the result in the result div
  resultDiv.innerHTML = `Your estimated daily protein needs are approximately ${proteinNeeds.toFixed(2)} grams.`;
});
