<!DOCTYPE html>
<html>
    <head>
        <title>Simple Form</title>
		<link rel="stylesheet" href="./css/styles1.css" />
    </head>
    <body>
	<?php
    include 'headerM.php';
    ?>  
        <p class="results__caption">Movie Information saved</p>
	//use isset and empty in this code.
        <!-- Getting the output from the form value provided through 'index.php' -->
		<div class="results__label">Title: <?php echo $_POST['title'];  ?></div>
        <div class="results__label">Description: <?php echo $_POST['description']; ?></div>
        <div class="results__label">Genre: <?php echo $_POST['genre'];  ?></div>
		<div class="results__label">Subject: <?php echo $_POST['subject'];  ?></div>
		<div class="results__label">Star: <?php echo $_POST['Star'];   ?> </div>
		<div class="results__label">Year: <?php echo $_POST['year'];   ?> </div>
		<div class="results__label">Production: <?php echo $_POST['Production'];   ?></div> 
		
        <!-- End of getting the value from the submitted form -->
		<?php
    include 'footerM.php';
    ?> 
    </body>
</html>