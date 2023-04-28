<?php
// Set the target directory for file uploads
$targetDir = "uploads/";

// Handle image upload
if (!empty($_FILES["image"])) {
    $image = $_FILES["image"];
    $imageTargetFile = $targetDir . basename($image["name"]);
    $imageFileType = strtolower(pathinfo($imageTargetFile, PATHINFO_EXTENSION));
    // Check if the file is an image
    if (getimagesize($image["tmp_name"])) {
        // Check if the file already exists
        if (file_exists($imageTargetFile)) {
            echo "Sorry, file already exists.";
        } else {
            // Upload the file
            if (move_uploaded_file($image["tmp_name"], $imageTargetFile)) {
                echo "The image file " . htmlspecialchars(basename($image["name"])) . " has been uploaded.";
            } else {
                echo "Sorry, there was an error uploading your file.";
            }
        }
    } else {
        echo "Please upload a valid image file.";
    }
}

// Handle additional file upload
if (!empty($_FILES["file"])) {
    $file = $_FILES["file"];
    $fileTargetFile = $targetDir . basename($file["name"]);
    // Check if the file already exists
    if (file_exists($fileTargetFile)) {
        echo "Sorry, file already exists.";
    } else {
        // Upload the file
        if (move_uploaded_file($file["tmp_name"], $fileTargetFile)) {
            echo "The file " . htmlspecialchars(basename($file["name"])) . " has been uploaded.";
        } else {
            echo "Sorry, there was an error uploading your file.";
        }
    }
}
?>
