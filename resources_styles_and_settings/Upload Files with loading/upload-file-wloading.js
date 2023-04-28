const form = document.querySelector("form");
const fileInput = form.querySelector(".file-input");
const progressArea = document.querySelector(".progress-area");
const uploadedArea = document.querySelector(".uploaded-area");

form.addEventListener("click", () => {
  fileInput.click();
});

fileInput.onchange = ({target}) => {
  let files = target.files; //getting selected files
  if (files.length > 0) { //if files are selected
    for (let i = 0; i < files.length; i++) { //loop through each file
      let file = files[i];
      let fileName = file.name; //getting selected file name
      if (fileName.length >= 12) {
        //if file name is greater or equal to 12 then split the name and add ...
        let splitName = fileName.split(".");
        fileName = splitName[0].substring(0, 12) + "... ." + splitName[1];
      }
      uploadFile(file, fileName);//calling uploadFile with passing file and file name as arguments
    }
  }
}

function uploadFile(file, name) {
    let xhr = new XMLHttpRequest(); //creating new xml obj (AJAX)
    xhr.open("POST", "php/upload.php"); //sending post request to the specified URL/File
    xhr.upload.addEventListener("progress", ({ loaded, total }) => {
      let fileLoaded = Math.floor((loaded / total) * 100); //getting percentage of loaded file size
      let fileTotal = Math.floor(total / 1000); //getting file size in KB from bytes
      let fileSize;
      // if file size is less than 1024 then add only KB else convert size from KB into MB
      fileTotal < 1024 ? (fileSize = fileTotal + " KB") : (fileSize = (loaded / (1024 * 1024)).toFixed(2) + " MB");
      let progressHTML = `<li class="row">
                                  <i class="fas fa-file-alt"></i>
                                  <div class="content">
                                      <div class="details">
                                          <span class="name">${name} • Uploading</span>
                                          <span class="percent">${fileLoaded}%</span>
                                      </div>
                                          <div class="progress-bar" style="width: ${fileLoaded}%">
                                              <div class="progress"></div>
                                          </div>
                                      </div>
                                  </div>
                              </li>`;
    //   uploadedArea.classList.add("onprogress");
      progressArea.innerHTML = progressHTML; //use += to append the progress HTML for each file
      if (loaded == total) {
        progressArea.innerHTML = "";
          let uploadedHTML = `<li class="row" data-name="${name}">
                                      <div class="content">
                                          <i class="fas fa-file-alt"></i> 
                                          <div class="details">
                                              <span class="name">${name} • Uploaded</span>
                                              <span class="size">${fileSize}</span>
                                          </div>   
                                      </div>
                                      <i class="fas fa-check"></i> 
                                  </li>`;
        uploadedArea.insertAdjacentHTML("afterbegin", uploadedHTML);
      }
      
    });
  
  let formData = new FormData(); //create a new formData object for each file
  formData.append("file", file); //add the file to the formData object
  xhr.send(formData); //sending form data to php
}
