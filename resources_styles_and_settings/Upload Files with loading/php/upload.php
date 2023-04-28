<?php
    $file_array = $_FILES['file'];

    for ($i = 0; $i < count($file_array['name']); $i++) {
        $file_name = $file_array['name'][$i]; //getting file name
        $tmp_name = $file_array['tmp_name'][$i]; //getting temp_name of the file
        $file_up_name = time().$file_name; //making file name dynamic by adding time before file name
        move_uploaded_file($tmp_name, "files/".$file_up_name); //moving file to the specified folder with dynamic name
    }
?>
