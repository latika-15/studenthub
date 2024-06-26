CREATE TABLE IF NOT EXISTS recipes (
  id INT PRIMARY KEY AUTO_INCREMENT,
  name VARCHAR(255) NOT NULL,
  ingredients TEXT,
  instructions TEXT,
  protein FLOAT,
  carbs FLOAT,
  fats FLOAT
);
