// Name and Password from the register-form
/* var name = document.getElementById("name");
var pw = document.getElementById("pw");

// storing input from register-form
function store() {
  localStorage.setItem("name", name.value);
  localStorage.setItem("pw", pw.value);
}

// check if stored data from register-form is equal to entered data in the   login-form
function check() {
  // stored data from the register-form
  var storedName = localStorage.getItem("name");
  var storedPw = localStorage.getItem("pw");

  // entered data from the login-form
  var userName = document.getElementById("userName");
  var userPw = document.getElementById("userPw");

  // check if stored data from register-form is equal to data from login form
} */
function reset() {
  document.getElementById("register-form").reset();
}
var citiesByState = {
  Jordan: ["Amman", "Zarqa", "Madaba"],
  SaudiArabia: ["Riyadh", "Jeddah", "Medina"],
  Turkey: ["Istanbul", "Antalya", "Ankara"],
};
function makeSubmenu(value) {
  if (value.length == 0)
    document.getElementById("citySelect").innerHTML = "<option></option>";
  else {
    var citiesOptions = "";
    for (cityId in citiesByState[value]) {
      citiesOptions += "<option>" + citiesByState[value][cityId] + "</option>";
    }
    document.getElementById("citySelect").innerHTML = citiesOptions;
  }
}
function displaySelected() {
  var country = document.getElementById("countrySelect").value;
  var city = document.getElementById("citySelect").value;
  alert(country + "\n" + city);
}
function resetSelection() {
  document.getElementById("countrySelect").selectedIndex = 0;
  document.getElementById("citySelect").selectedIndex = 0;
}

function store() {
  var fname = document.getElementById("fname");
  var lname = document.getElementById("lname");
  var address = document.getElementById("address");
  var countrySelect = document.getElementById("countrySelect");
  var citySelect = document.getElementById("citySelect");
  var code = document.getElementById("code");
  var course = document.getElementById("course");
  var email = document.getElementById("email");
  localStorage.setItem("fname", fname.value);
  localStorage.setItem("lname", lname.value);
  localStorage.setItem("address", address.value);
  localStorage.setItem("countrySelect", countrySelect.value);
  localStorage.setItem("citySelect", citySelect.value);
  localStorage.setItem("code", code.value);
  localStorage.setItem("course", course.value);
  localStorage.setItem("email", email.value);
}

function login() {
  var name = document.getElementById("name");
  var pw = document.getElementById("password");

  localStorage.setItem("name", name.value);
  localStorage.setItem("password", pw.value);

  var storedName = localStorage.getItem("name");
  var storedPw = localStorage.getItem("password");

  var code = document.getElementById("code");
  var email = document.getElementById("email");

  if (email.value !== storedName || code.value !== storedPw) {
    alert("unsuccessufully");
  } else {
    alert("successufully");
  }

  return false;
}
