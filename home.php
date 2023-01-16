<?php

// Allow from any origin
if (isset($_SERVER['HTTP_ORIGIN'])) {
    header("Access-Control-Allow-Origin: {$_SERVER['HTTP_ORIGIN']}");
    header('Access-Control-Allow-Credentials: true');
    header('Access-Control-Max-Age: 86400'); // cache for 1 day
}

// Access-Control headers are received during OPTIONS requests
if ($_SERVER['REQUEST_METHOD'] == 'OPTIONS') {

    if (isset($_SERVER['HTTP_ACCESS_CONTROL_REQUEST_METHOD'])) {
        header("Access-Control-Allow-Methods: GET, POST, OPTIONS");
    }

    if (isset($_SERVER['HTTP_ACCESS_CONTROL_REQUEST_HEADERS'])) {
        header("Access-Control-Allow-Headers:        {$_SERVER['HTTP_ACCESS_CONTROL_REQUEST_HEADERS']}");
    }

    exit(0);
}

// Allow from any origin

include 'database.php';

if (isset($_POST['data'])) {
	if ($_POST["data"] == "multiple") {
		$sql = "UPDATE home SET ";
		$update = "";
		foreach ($_POST as $key => $postData) {
			if ($key == "data")
				continue;
			$update .= ($update == "" ? "" : ",") . " " . $key . " = '" . $postData . "'";
		}
		$sql .= $update;
		$sql .= " WHERE home.`no`='1'";
	} else {
		$data = $_POST['data'];
		$name = $_POST['name'];
	
		$sql = "UPDATE home SET $name='$data' WHERE home.`no`='1';";
	}
	if (mysqli_query($conn, $sql)) {
		echo "Updated successfully !";
	} else {
		echo "Error: " . $sql . "
			" . mysqli_error($conn);
	}

    mysqli_close($conn);
} else {
    $query = "SELECT * FROM home;";
    $result = $conn->query($query);
    $data = array();
    while ($row = $result->fetch_assoc()) {
        $data[] = array(
            "num_1" => $row['num_1'],
            "num_2" => $row['num_2'],
            "num_3" => $row['num_3'],
            "num_4" => $row['num_4'],
            "num_5" => $row['num_5'],
            "img_1" => $row['img_1'],
            "img_2" => $row['img_2'],
            "img_3" => $row['img_3'],
            "img_4" => $row['img_4'],
            "img_5" => $row['img_5'],
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
            "popup_background" => $row['popup_background'],
            "popup_subscribe" => $row['popup_subscribe'],
            "subscribe_text" => $row['subscribe_text'],
            "q1_title" => $row['q1_title'],
            "q1_text" => $row['q1_text'],
            "q2_title" => $row['q2_title'],
            "q2_text" => $row['q2_text'],
            "q3_title" => $row['q3_title'],
            "q3_text" => $row['q3_text'],
            "q4_title" => $row['q4_title'],
            "q4_text" => $row['q4_text'],
            "q5_title" => $row['q5_title'],
            "q5_text" => $row['q5_text'],
            "q6_title" => $row['q6_title'],
            "q6_text" => $row['q6_text'],
            "q7_title" => $row['q7_title'],
            "q7_text" => $row['q7_text'],
            "q8_title" => $row['q8_title'],
            "q8_text" => $row['q8_text'],
        );

    }
    echo json_encode($data);
    $conn->close();
}
