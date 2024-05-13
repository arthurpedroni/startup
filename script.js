function previewImage(event) {
    var input = event.target;
    var preview = document.getElementById('imagemPreview');
    var usuario = document.getElementById('foto');
    preview.innerHTML = '';
    if (input.files && input.files[0]) {
      var reader = new FileReader();
      reader.onload = function(e) {
        var img = document.createElement("img");
        img.src = e.target.result;
        preview.appendChild(img);
      }
      reader.readAsDataURL(input.files[0]);
    }
  }