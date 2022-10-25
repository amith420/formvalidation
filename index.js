let resultSet = (event) => {
    event.preventDefault();
    let name = document.forms["form"]["name"].value.trim();
    let gender = document.forms["form"]["gender"].value;
    let stnd = document.forms["form"]["stnd"].value;
    let section = document.forms["form"]["section"].value;
    let dob = document.forms["form"]["dob"].value;
    if (name && gender && stnd && section && dob) {
      document.write("Name: " + name + "<br><br>Gender: " + gender + "<br><br>Class: " + stnd + "<br><br>Section: " + section + "<br><br>D.O.B: " + dob);
      document.forms['form'].reset();
    }
    name
      ? document.getElementById("name").classList.remove("error")
      : document.getElementById("name").classList.add("error");
    stnd
      ? document.getElementById("stnd").classList.remove("error")
      : document.getElementById("stnd").classList.add("error");
    section
      ? document.getElementById("section").classList.remove("error")
      : document.getElementById("section").classList.add("error");
    gender
      ? document.getElementById("error-message").classList.remove("error-message-active")
      : document.getElementById("error-message").classList.add("error-message-active");
    dob
      ? document.getElementById("dob").classList.remove("error")
      : document.getElementById("dob").classList.add("error");
  };