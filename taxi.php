<?php

 // Allow from any origin
    if (isset($_SERVER['HTTP_ORIGIN'])) {
        header("Access-Control-Allow-Origin: {$_SERVER['HTTP_ORIGIN']}");
        header('Access-Control-Allow-Credentials: true');
        header('Access-Control-Max-Age: 86400');    // cache for 1 day
    }

    // Access-Control headers are received during OPTIONS requests
    if ($_SERVER['REQUEST_METHOD'] == 'OPTIONS') {

        if (isset($_SERVER['HTTP_ACCESS_CONTROL_REQUEST_METHOD']))
            header("Access-Control-Allow-Methods: GET, POST, OPTIONS");         

        if (isset($_SERVER['HTTP_ACCESS_CONTROL_REQUEST_HEADERS']))
            header("Access-Control-Allow-Headers:        {$_SERVER['HTTP_ACCESS_CONTROL_REQUEST_HEADERS']}");

        exit(0);
    }

 // Allow from any origin

include 'database.php';

 if(isset($_POST['data']))
	 	{	 
	 		 $data = $_POST['data'];
	 		 $name = $_POST['name'];

				 $sql = "UPDATE taxi SET $name='$data' WHERE taxi.`no`='1';";
				 if (mysqli_query($conn, $sql)) {
					echo "Updated successfully !";
				 } else {
					echo "Error: " . $sql . "
			" . mysqli_error($conn);
				 }

				 mysqli_close($conn);
		}
else{ 
   
	$query = "SELECT * FROM taxi;";
	$result = $conn->query($query);
	$data = array();
	
	 while($row = $result->fetch_assoc())
	        {
	            $data[] = array(

	                "num_1" =>  $row['num_1'],
	                "num_2" =>  $row['num_2'],
	                "num_3" =>  $row['num_3'],
	                "num_4" =>  $row['num_4'],	  
	                "num_5" =>  $row['num_5'],
	                "img_1" =>  $row['img_1'],
	                "img_2" =>  $row['img_2'],
	                "img_3" =>  $row['img_3'],
	                "img_4" =>  $row['img_4'],	  
	                "img_5" =>  $row['img_5'],	 
	                "text_1" => $row['text_1'],	
	                "text_2" => $row['text_2'],	
	                "text_3" => $row['text_3'],	
	                "text_4" => $row['text_4'],	
	                "text_5" => $row['text_5'],	
	                "text_6" => $row['text_6'],	
	                "text_7" => $row['text_7'],	
	                "text_8" => $row['text_8'],	
	                "text_9" => $row['text_9'],	
	                "text_10" => $row['text_10'],	
	                "text_11" => $row['text_11'],	
	                "text_12" => $row['text_12'],	
	                "text_13" => $row['text_13'],
	                "text_14" => $row['text_14'],	
	                "text_15" => $row['text_15'],
	                "text_16" => $row['text_16'],	
	                "text_17" => $row['text_17'],	
	                "text_18" => $row['text_18'],	
	                "text_19" => $row['text_19'],	
	                "text_20" => $row['text_20']
	                        
	            );

	 }
 echo json_encode($data);
 $conn->close();
}
?>