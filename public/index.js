document.addEventListener("DOMContentLoaded", function () {
  const mobilNavToggle = document.querySelector(
    "body > header > div.mobil > button"
  );
  const mainNav = document.querySelector("body > header > nav");
  const functionNavToggle = () => {
    mainNav.classList.toggle("nav-open");
    mobilNavToggle.classList.toggle("is-active");
    //mainNav.appendChild(headerAction);
    console.log("click test");
  };
  mobilNavToggle.addEventListener("click", functionNavToggle);

  const fileInput = document.getElementById("media");
  const filePreview = document.getElementById("filePreview");
  const imagePreview = document.getElementById("imagePreview");
  const fileName = document.getElementById("fileName");
  const fileSize = document.getElementById("fileSize");
  const removeFileBtn = document.getElementById("removeFile");

  fileInput.addEventListener("change", function (e) {
    const file = e.target.files[0];

    if (file) {
      // Afficher la prévisualisation
      filePreview.classList.add("active");

      // Afficher le nom du fichier
      fileName.textContent = file.name;

      // Afficher la taille du fichier
      const sizeInMB = (file.size / (1024 * 1024)).toFixed(2);
      fileSize.textContent = `Taille: ${sizeInMB} MB`;

      // Si c'est une image, afficher la prévisualisation
      if (file.type.startsWith("image/")) {
        const reader = new FileReader();
        reader.onload = function (e) {
          imagePreview.innerHTML = `<img src="${e.target.result}" alt="Preview">`;
        };
        reader.readAsDataURL(file);
      } else if (file.type.startsWith("video/")) {
        const reader = new FileReader();
        reader.onload = function (e) {
          // add a class so CSS can constrain preview size
          imagePreview.innerHTML = `<video class="preview-video" src="${e.target.result}" controls></video>`;
        };
        reader.readAsDataURL(file);
      } else {
        // Pour les autres fichiers, afficher une icône
        imagePreview.innerHTML = '<div class="file-icon">📄</div>';
      }
    }
  });

  removeFileBtn.addEventListener("click", function () {
    fileInput.value = "";
    filePreview.classList.remove("active");
    imagePreview.innerHTML = "";
    fileName.textContent = "";
    fileSize.textContent = "";
  });

  // Fix: correct form id is 'blogform' in create.ej
  const blogForm = document.getElementById("blogform");
  if (blogForm) {
    blogForm.addEventListener("submit", function (e) {
      // allow normal submission to server; remove preventDefault
    });
  }
});
