<?php

// Database connection details (replace with your actual credentials)
$servername = "localhost";
$username = "your_username";
$password = "your_password";
$dbname = "your_database_name";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
  die("Connection failed: " . $conn->connect_error);
}

// Escape user input to prevent SQL injection
$name = mysqli_real_escape_string($conn, $_POST["name"]);
$ingredients = mysqli_real_escape_string($conn, $_POST["ingredients"]);
$instructions = mysqli_real_escape_string($conn, $_POST["instructions"]);
$protein = floatval($_POST["protein"]); // Convert to float
$carbs = floatval($_POST["carbs"]); // Convert to float
$fats = floatval($_POST["fats"]); // Convert to float

// Basic validation for required fields
if (empty($name) || empty($ingredients) || empty($instructions)) {
  echo "Error: Please fill in all required fields.";
  exit();
}

// Prepare SQL statement (prevents SQL injection)
$sql = "INSERT INTO recipes (name, ingredients, instructions, protein, carbs, fats) VALUES (?, ?, ?, ?, ?, ?)";

$stmt = $conn->prepare($sql);
$stmt->bind_param("ssssdd", $name, $ingredients, $instructions, $protein, $carbs, $fats);

if ($stmt->execute()) {
  echo "Recipe saved successfully!";
} else {
  echo "Error saving recipe: " . $conn->error;
}

$stmt->close();
$conn->close();
?>
