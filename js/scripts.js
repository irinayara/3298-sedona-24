function togglemodal() { 
    var el = document.querySelector(".modal-form");
    el.classList.remove("error");
    if (el.classList.contains("showed")){
      el.classList.remove("showed");
      el.classList.add("hidden");
    } else {
      el.classList.add("showed");
      el.classList.remove("hidden");
    }

  }
  var el = document.querySelector(".find-sedona");
  el.addEventListener("click", togglemodal);

  var form = document.querySelector(".modal-form");
  form.addEventListener("submit", saveform);
  var button = document.querySelector(".modal-form button");
  button.addEventListener("click", saveform);

  function saveform(e) {
    if (document.querySelector(".modal-form:invalid")) {
      var el = document.querySelector(".modal-form");
      el.classList.remove("error");
      el.offsetWidth = el.offsetWidth;
      el.classList.add("error");
    } else{
      var grown = document.querySelector("#grownup");
      localStorage.grown = grown.value;
      var children = document.querySelector("#children");
      localStorage.children = children.value;
    }
  }
  var grown = document.querySelector("#grownup");
  grown.value = localStorage.grown || 0;
  var children = document.querySelector("#children");
  children.value = localStorage.children || 0;

  togglemodal();