const form = document.getElementById('recipe-form');
const messageDiv = document.getElementById('message');

form.addEventListener('submit', (event) => {
  event.preventDefault(); // Prevent default form submission

  // Get user input for recipe details
  const name = document.getElementById('name').value;
  const ingredients = document.getElementById('ingredients').value;
  const instructions = document.getElementById('instructions').value;
  const protein = document.getElementById('protein').value;
  const carbs = document.getElementById('carbs').value;
  const fats = document.getElementById('fats').value;

  // Send data using fetch API (assuming the PHP script is on the same server)
  fetch('save_recipe.php', {
    method: 'POST',
    body: new URLSearchParams({
      name: name,
      ingredients: ingredients,
      instructions: instructions,
      protein: protein,
      carbs: carbs,
      fats: fats
    })
  })
  .then(response => response.text())
  .then(data => {
    messageDiv.innerHTML = data;
    form.reset(); // Clear form after successful submission
  })
  .catch(error => {
    messageDiv.innerHTML = "Error saving recipe: " + error;
  });
});
