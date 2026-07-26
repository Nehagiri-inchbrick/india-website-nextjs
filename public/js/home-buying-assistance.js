(function () {
  var form = document.getElementById("homeBuyingForm");
  var note = document.getElementById("hbaFormNote");
  if (!form) return;

  form.addEventListener("submit", function (event) {
    event.preventDefault();

    var name = document.getElementById("hbaName");
    var phone = document.getElementById("hbaPhone");
    var city = document.getElementById("hbaCity");

    if (!name.value.trim() || !phone.value.trim() || !city.value.trim()) {
      note.textContent = "Please fill in all required fields.";
      note.classList.remove("is-success");
      return;
    }

    note.textContent = "Thank you! Our buying advisor will contact you within 24 hours.";
    note.classList.add("is-success");
    form.reset();
  });
})();
