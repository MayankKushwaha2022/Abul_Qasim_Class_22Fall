<?php
//isset works if 
if (isset($_POST['name']) && isset($_POST['pwd']) && isset($_POST['email']) ){
    echo 'welcome';
} else {
    echo 'Not Welcome';
    //header('Location: google.com');
    header('Location: index.php');
};
?>



<?php
include '';
?>

//This is how you connect with your database.

$db_connection = mysqli_connect('localhost','phpuser','password','to_really_do_db',3306)