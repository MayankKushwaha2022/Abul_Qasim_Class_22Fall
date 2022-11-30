<!-- write your PHP script to define two string arrays -->
<!--write your php function  here -->
<?php 


$subjects = array("Animation", "Children", "Youth", "People");       
function allSubjects() {
  
    global $subjects;             
                          foreach($subjects as $item){
                            print ("<option>$item</option>");
                              //echo $item."<br>";
                          }
                       }

//allSubjects();

$genres = array("Action", "Adventure", "Comedy", "Drama");
function allGenres() {

    global $genres;                                                          
                        foreach($genres as $items){
                            print ("<option>$items</option>");   
                            //echo $items."<br>";
                        }
                    }
                    
//allGenres();
              ?>
<!DOCTYPE html>
<html>
<head lang="en">
    <meta charset="utf-8">
    <title>Chapter 12</title>    
    
    <link rel="stylesheet" href="./css/styles1.css" />
   

</head>
<body>
<!-- include the hearder file here -->
<?php
    include 'headerM.php';
    ?>
    
<main>
<form class="form" method="post" action="process.php" id="mainForm" method="post">
   <fieldset class="form__panel">
      <legend class="form__heading">Edit Movie Details</legend>
        <p class="form__row">
           <label>Title</label><br/>
           <input type="text" name="title" class="form__input form__input--large"/>
       </p>
       <p class="form__row">
           <label>Description</label><br/>
           <input type="text" name="description" class="form__input form__input--large">
       </p>            
       <p class="form__row"> 
           <label>Genre</label><br/>
           <select name="genre" class="form__input form__select">
              <option>Choose genre</option> 
              <!-- use php function to display genre options -->
              <?php
			 allGenres();
			 ?>
           </select>
       </p>
       <p class="form__row"> 
           <label>Subject</label><br/>
           <select name="subject" class="form__input form__select">
              <option>Choose subject</option> 
              <!-- use php function to display subject options -->
              <?php
				allSubjects();
				?>
           </select>
       </p>
       <p class="form__row">	
           <label>Star</label><br/>               
           <input type="text" name="Star" class="form__input form__input--medium" />
       </p>
       <p class="form__row">	
           <label>Year</label><br/>               
           <input type="text" name="year" class="form__input form__input--small" />
       </p>  
       <p class="form__row">	
           <label>Production</label><br/>               
           <input type="text" name="Production" class="form__input form__input--medium"/>
       </p>                             

       <div class="form__box"> 
          <input type="submit" class="form__btn"> <input type="reset" value="Clear Form" class="form__btn">      
       </div>
   </fieldset>
</form>
</main> 
<!-- include the footer file here --> 
<?php
    include 'footerM.php';
    ?>    
</body>
</html>
