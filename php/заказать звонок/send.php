<?php 
$name = $_POST['name'];
$phone = $_POST['phone'];
$message = $name.'   '.$phone;
mail('qwerty@example.com', 'My Subject', $message);

?>