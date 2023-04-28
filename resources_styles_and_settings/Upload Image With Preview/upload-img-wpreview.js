function previewBeforeUpload(id) {
    document.querySelector("#"+id).addEventListener("change",function(e){
        if(e.target.files.length == 0){
            return;
        }
        let file = e.target.files[0];
        let url = URL.createObjectURL(file);
        let previewDiv = document.querySelector("#"+id+"-preview div");
        previewDiv.innerText = file.name;
        let img = document.querySelector("#"+id+"-preview img");
        img.src = url;
    });
}

previewBeforeUpload("file-1");
previewBeforeUpload("file-2");
previewBeforeUpload("file-3");