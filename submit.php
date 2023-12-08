<?php
$host = 'localhost'; // or your database host
$db   = 'your_database_name';
$user = 'your_username';
$pass = 'your_password';
$charset = 'utf8mb4';

// Set up the DSN
$dsn = "mysql:host=$host;dbname=$db;charset=$charset";
$options = [
    PDO::ATTR_ERRMODE            => PDO::ERRMODE_EXCEPTION,
    PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC,
    PDO::ATTR_EMULATE_PREPARES   => false,
];

try {
     $pdo = new PDO($dsn, $user, $pass, $options);
} catch (\PDOException $e) {
     throw new \PDOException($e->getMessage(), (int)$e->getCode());
}

// Insert data
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST['name']; // Retrieve other form data similarly

    $stmt = $pdo->prepare("INSERT INTO your_table_name (name) VALUES (:name)");
    $stmt->execute(['name' => $name]);
    echo "Record added successfully.";
}
?>
