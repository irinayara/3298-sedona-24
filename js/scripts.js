function togglemodal() { 
    var el = document.querySelector(".modal-form");
    el.classList.toggle("hidden");
  }
  var el = document.querySelector(".find-sedona");
  el.addEventListener("click", togglemodal);

  var form = document.querySelector(".modal-form");
  form.addEventListener("submit", saveform);
  function saveform() {
    
    var grown = document.querySelector("#grownup");
    localStorage.grown = grown.value;
    var children = document.querySelector("#children");
    localStorage.children = children.value;
  }
  var grown = document.querySelector("#grownup");
  grown.value = localStorage.grown || 0;
  var children = document.querySelector("#children");
  children.value = localStorage.children || 0;
